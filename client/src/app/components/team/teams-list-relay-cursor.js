// Import external modules
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Button } from "reactstrap";

// Import custom components
import { GET_ALL_TEAMMEMBERS } from "../../graphql";
import { TeamsListComponent } from ".";

const TeamsListRelayCursor = ({}) => {
  const { data, loading, fetchMore, error } = useQuery(GET_ALL_TEAMMEMBERS, {
    variables: {
      first: 20,
      after: null,
    },
  });

  const [nodes, setNodes] = useState();
  const [pageInfo, setPageInfo] = useState();

  useEffect(() => {
    if (!!data) {
      console.log(data);
      setNodes(data.teamMembersConnectionRelayCursor.edges.map((edge) => edge.node));
      setPageInfo(data.teamMembersConnectionRelayCursor.pageInfo);
    }
    return () => {}
  }, [data])

  const gqlResultAsJSX = () => {
    if (loading) return (
      <div className="spinner-border" role="status">
        <strong>Loading...</strong>
        <span className="visually-hidden">Loading...</span>
      </div>
    );

    if (error) return <p>Error :{error.toString()}</p>;

    return (
      <>
        <TeamsListComponent teams={nodes}>
          <Button className='mx-auto' color="primary" onClick={() => {
          if (pageInfo.hasNextPage) {
            fetchMore({
              variables: {
                first: 10,
                after: pageInfo.endCursor,
              },
            });
          }
        }}>
          Load more...
          </Button>
        </TeamsListComponent>
      </>
    )
  };

  return (
    <>
      {gqlResultAsJSX()}
    </>
  )
};

export default TeamsListRelayCursor;
