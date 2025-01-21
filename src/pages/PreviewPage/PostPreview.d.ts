import React from "react";
interface PostPreviewProps {
    id: string | number;
    title: string;
    description: string;
    username: string;
    profileImageUrl?: string;
    minimumFund: string;
    fundRaised: string;
    image: string;
}
declare const PostPreview: React.FC<PostPreviewProps>;
export default PostPreview;
