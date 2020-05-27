export interface DataResponse<D> {
    data: D;
    totalCount?: number;
    // links?: LinkPages;
}

export type ErrorCode = 'USER_NOT_FOUND';
export type ReasonCode = 'USER_ID_DOES_NOT_EXIST';

export interface ErrorReason {
    code: ReasonCode;
    message: string;
}

export interface ErrorDetails {
    // A bit more lenient than Error
    error?: { name?: string; message: string; stack?: string };
}
export interface ErrorBody {
    code: ErrorCode;
    reason: ErrorReason;
    details?: ErrorDetails;
}

export interface ErrorResponse {
    error: ErrorBody;
}