export interface FundOverview {
    post: {
        id: string;
        userId: string;
        username: string;
        profileImageUrl: string;
        title: string;
        description: string;
        minimumFund: string;
        fundRaised: string;
        deadlineDate: string;
        image: string;
        createdAt: string;
    };
    amount: string;
}
export interface UserFundsResponse {
    fundOverviews: FundOverview[];
}
export declare const getUserFunds: () => Promise<UserFundsResponse>;
