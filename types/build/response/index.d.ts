export interface DataResponse<D> {
    data: D;
    totalCount?: number;
}
export declare type ErrorCode = 'USER_NOT_FOUND';
export declare type ReasonCode = 'USER_ID_DOES_NOT_EXIST';
export interface ErrorReason {
    code: ReasonCode;
    message: string;
}
export interface ErrorDetails {
    error?: {
        name?: string;
        message: string;
        stack?: string;
    };
}
export interface ErrorBody {
    code: ErrorCode;
    reason: ErrorReason;
    details?: ErrorDetails;
}
export interface ErrorResponse {
    error: ErrorBody;
}
