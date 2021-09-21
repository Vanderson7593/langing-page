export type ApiRequestMethod = "POST" | "GET" | "PUT" | "DELETE" | "PATCH";

export type Status = 'success' | 'error'

export interface HttpResponse<T extends Object> {
    status: Status
    message: any
    data: T;
}

export interface Response {
    message: Record<string, string[]>;
    status: Status
}

export interface ModelData<T> extends Response {
    data: T;
}

export interface ListData<T> extends Response {
    payload: ReadonlyArray<T>;
}
