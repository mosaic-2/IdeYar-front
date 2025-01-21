export interface Project {
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
}
export interface UserProjectsResponse {
    posts: Project[];
}
export declare const getUserProjects: () => Promise<UserProjectsResponse>;
