
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ObjectSchema } from 'joi';
import { DataResponse } from '../../../types/build/response';
export class APIResponse<T> {
    public status?: number;
    public body?: DataResponse<T>;
    public send?: (res: Response) => Response;

    constructor(
        status: number,
        body?: DataResponse<T>,
        send?: (res: Response) => Response,
    ) {
        this.status = status;
        if (body) this.body = body;
        if (send) {
            this.send = send;
        } else {
            this.send = (res: Response): Response =>
                body ? res.status(status).json(this.body) : res.status(status).send();
        }
    }
}


export const dataResponse = <D>(data: D): DataResponse<D> => ({ data });
export const isDataResponse = <D>(data: any): data is DataResponse<D> =>
    data && data.data;

export type NoParams = undefined;

type HandlerWithoutParams<ResponseBody> = (
) => Promise<ResponseBody>;

type HandlerWithParams<Params, ResponseBody> = (
    params: Params,
) => Promise<ResponseBody>;

//   interface CommonRouteOptions {
//     requiredPermissions?: Permission[];
//     filterDataByRole?: (operator: Operator | undefined, data: any) => any;
//   }

//   export interface ResourceDependentPermission<T extends string> {
//     resourceDependentPermissions?: { [K in T]: Permission[] };
//   }

//type RouteOptionsWithoutParams = CommonRouteOptions;

type RouteOptionsWithParams = {
    schema: ObjectSchema;
};

const handle = <Params, ResponseBody, T>(
    handler:
        | HandlerWithoutParams<ResponseBody | APIResponse<T>>
        | HandlerWithParams<Params, ResponseBody | APIResponse<T>>,
    filterDataByRole: any,
) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await handler({
            ...req.params,
            ...req.query,
            ...req.body,
            ...req.file,
            ...res.locals,
        });
        const filteredData = filterDataByRole
            ? filterDataByRole(data)
            : data;

        if (
            filteredData &&
            filteredData instanceof APIResponse &&
            !!filteredData.send
        ) {
            filteredData.send(res);
        } else if (isDataResponse(filteredData)) {
            res.json(filteredData);
        } else {
            res.json(dataResponse(filteredData));
        }
    } catch (error) {
        console.log('ERROR')
        next(error);
    }
};

interface Route {
    <Params extends {}, ResponseBody extends {} | null>(
        handler: HandlerWithParams<Params, ResponseBody>,
        // options?: RouteOptionsWithoutParams,
    ): RequestHandler[];
    <Params extends {}, ResponseBody extends {} | null>(
        handler: HandlerWithParams<Params, ResponseBody>,
        options: RouteOptionsWithParams,
    ): RequestHandler[];
    <
        Params extends {},
        ResponseBody extends {} | null,
        ResourceTypes extends string
        >(
        handler: HandlerWithParams<Params, ResponseBody>,
        options: RouteOptionsWithParams
        // ResourceDependentPermission<ResourceTypes>,
    ): RequestHandler[];
}

const route: Route = (handler: any, options: any = {}): RequestHandler[] => {
    const {
        filterDataByRole,
    } = options;
    return [
        handle(handler, filterDataByRole),
    ];
};

export default route;
