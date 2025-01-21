import { PostResponse } from "../../apis/postApi";
interface ProjectSupportProps {
    post: PostResponse | undefined;
    onSupportClick: () => void;
}
declare const ProjectSupport: ({ post, onSupportClick }: ProjectSupportProps) => import("react/jsx-runtime").JSX.Element;
export default ProjectSupport;
