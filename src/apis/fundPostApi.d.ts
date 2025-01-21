export interface FundPostRequest {
    amount: string;
}
export declare const fundPostApi: (id: number, amount: string) => Promise<import("axios").AxiosResponse<any, any>>;
