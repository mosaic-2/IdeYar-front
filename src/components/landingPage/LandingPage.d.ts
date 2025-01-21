type Post = {
    createdAt: string;
    deadlineDate: string;
    description: string;
    fundRaised: number;
    id: string;
    image: string;
    minimumFund: number;
    profileImageUrl: string;
    title: string;
    userId: string;
    username: string;
};
export type Posts = Post[];
declare const LandingPage: () => import("react/jsx-runtime").JSX.Element;
export default LandingPage;
