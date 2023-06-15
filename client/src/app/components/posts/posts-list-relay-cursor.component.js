// Import external modules
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Button } from "reactstrap";

// Import custom components
import { GET_POSTS_WITH_RELAY_CURSOR } from "../../graphql";
import PostsListComponent from "./posts-list.component";

const PostsListRelayCursor = ({}) => {
  const { data, loading, fetchMore, error } = useQuery(
    GET_POSTS_WITH_RELAY_CURSOR,
    {
      variables: {
        first: 18,
        after: null,
      },
    }
  );

  const [nodes, setNodes] = useState();
  const [pageInfo, setPageInfo] = useState();

  useEffect(() => {
    if (!!data) {
      console.log(data);
      setNodes(data.postsConnectionRelayCursor.edges.map((edge) => edge.node));
      setPageInfo(data.postsConnectionRelayCursor.pageInfo);
    }
    return () => {};
  }, [data]);

  const gqlResultAsJSX = () => {
    if (loading)
      return (
        <div className="spinner-border" role="status">
          <strong>Loading...</strong>
          <span className="visually-hidden">Loading...</span>
        </div>
      );

    if (error) return <p>Error :{error.toString()}</p>;

    return (
      <>
        <PostsListComponent posts={nodes}>
          <Button
            className="mx-auto"
            color="primary"
            onClick={() => {
              if (pageInfo.hasNextPage) {
                fetchMore({
                  variables: {
                    first: 9,
                    after: pageInfo.endCursor,
                  },
                });
              }
            }}
          >
            Load more...
          </Button>
        </PostsListComponent>
      </>
    );
  };

  return <>{gqlResultAsJSX()}</>;
};

export default PostsListRelayCursor;
