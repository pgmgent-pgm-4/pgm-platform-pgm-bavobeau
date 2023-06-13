// Import external modules
import {
  useQuery,
} from "@apollo/client";

// Import custom components
import { GET_POSTS_BY_AMOUNT } from '../../graphql';
import PostsListComponent from "./posts-list.component";
import { NavLink } from "react-router-dom";

const PostsListHome = () => {
  const { data, loading, error } = useQuery(GET_POSTS_BY_AMOUNT, {
    variables: {
      first: 3,
      after: null,
    },
  });
  
  const gqlResultAsJSX = () => {
    if (loading) return (
      <div className="spinner-border" role="status">
        <strong>Loading...</strong>
        <span className="visually-hidden">Loading...</span>
      </div>
    );
    if (error) return <p>{error.toString()}</p>;

    return (
      <div className="position-relative">
        <PostsListComponent posts={data.posts} />
        <NavLink to={`/posts`} className="link-info position-absolute bottom-10 end-0">More Posts</NavLink>
      </div>
    )
  };

  return (
    <>
      {
        gqlResultAsJSX()
      }
    </>
  )
};

export default PostsListHome;