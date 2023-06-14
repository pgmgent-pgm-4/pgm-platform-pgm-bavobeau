import { Outlet } from "react-router-dom";
import { GridLayoutContainer } from "../layout";
import GridItemContainer from "../layout/GridItemLayout";

const PostsListComponent = ({children, posts}) => {
  return (
      <GridLayoutContainer>
        {posts && posts.map((post) => (
          <GridItemContainer card={post} adres="posts" />
          ))}
        <Outlet />
        {children}
      </GridLayoutContainer>
  )
};

export default PostsListComponent;