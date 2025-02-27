import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.base.query.v1beta1";
/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 *
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 */
export interface PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     */
    key: Uint8Array;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     */
    offset: Long;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     */
    limit: Long;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal: boolean;
    /** reverse is set to true if results are to be returned in the descending order. */
    reverse: boolean;
}
/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 *
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 */
export interface PageResponse {
    /**
     * next_key is the key to be passed to PageRequest.key to
     * query the next page most efficiently
     */
    nextKey: Uint8Array;
    /**
     * total is total number of results available if PageRequest.count_total
     * was set, its value is undefined otherwise
     */
    total: Long;
}
export declare const PageRequest: {
    encode(message: PageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: Uint8Array | _m0.Reader, length?: number | undefined): PageRequest;
    fromJSON(object: any): PageRequest;
    toJSON(message: PageRequest): unknown;
    fromPartial(object: {
        key?: Uint8Array | undefined;
        offset?: Long.Long | undefined;
        limit?: Long.Long | undefined;
        countTotal?: boolean | undefined;
        reverse?: boolean | undefined;
    }): PageRequest;
};
export declare const PageResponse: {
    encode(message: PageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: Uint8Array | _m0.Reader, length?: number | undefined): PageResponse;
    fromJSON(object: any): PageResponse;
    toJSON(message: PageResponse): unknown;
    fromPartial(object: {
        nextKey?: Uint8Array | undefined;
        total?: Long.Long | undefined;
    }): PageResponse;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
