// Import external modules
import {
  gql,
  useQuery,
} from "@apollo/client";
import { Spinner } from 'reactstrap';

// Import custom components
import { GET_ALL_POSTS_SMALL } from '../graphql';
import { PostsListRelayCursor } from '../components/posts';
import { BodyLayoutContainer } from "../components/layout";

const PostsPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS_SMALL);

  const gqlResult = () => {
    if (loading) return (
      <div className="spinner-border" role="status">
      <strong>Loading...</strong>
      <span className="visually-hidden">Loading...</span>
    </div>
    );

    if (error) return <p>Error :{error.toString()}</p>;
    return (
      <PostsListRelayCursor />
    )
  };

  return (
    <BodyLayoutContainer>
      {gqlResult()}
    </BodyLayoutContainer>
  )
};

export default PostsPage;