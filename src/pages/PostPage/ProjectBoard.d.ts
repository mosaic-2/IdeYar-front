import { MutableRefObject } from "react";
import { PostDetail, PostResponse } from "../../apis/postApi";
interface Props {
    post: PostResponse | undefined;
    postDetails: PostDetail[] | undefined;
    sectionRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}
declare const ProjectBoard: ({ post, postDetails, sectionRefs }: Props) => import("react/jsx-runtime").JSX.Element;
export default ProjectBoard;
