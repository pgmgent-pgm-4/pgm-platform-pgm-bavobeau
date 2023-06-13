import { Outlet } from "react-router-dom";
import PostSummaryComponent from "./post-summary.component";

const PostsListComponent = ({posts}) => {
  return (
    <div className="posts-list row row-cols-1 row-cols-md-3 g-5">
      {posts && posts.map((post) => (
        <PostSummaryComponent key={post.id} post={post} />
      ))}
      <Outlet />
    </div>
  )
};

export default PostsListComponent;