import { Outlet } from "react-router-dom";
import { GridLayoutContainer, GridItemContainer } from "../layout";

const PostsListComponent = ({ children, posts }) => {
  return (
    <GridLayoutContainer amount={3}>
      {posts &&
        posts.map((post) => <GridItemContainer card={post} adres="posts" />)}
      <Outlet />
      {children}
    </GridLayoutContainer>
  );
};

export default PostsListComponent;
