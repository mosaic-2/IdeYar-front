import PostSection from "./PostSection";

export default interface PostInfo {
  title: string | null;
  text: string | null;
  image: string | null;
  sections: PostSection[];
}
