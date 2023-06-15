import { PostsListRelayCursor } from "../components/posts";
import { BodyLayoutContainer } from "../components/layout";

const PostsPage = () => {
  return (
    <BodyLayoutContainer>
      <h1 className="text-3xl font-bold">
        <u>Blog Posts</u>
      </h1>
      <PostsListRelayCursor />
    </BodyLayoutContainer>
  );
};

export default PostsPage;
