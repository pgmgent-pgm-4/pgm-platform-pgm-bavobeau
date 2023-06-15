// Import external modules
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Button } from "reactstrap";

// Import custom components
import { GET_ALL_TEAMMEMBERS } from "../../graphql";
import { TeamsListComponent } from ".";

const TeamsListRelayCursor = () => {
  const [filterType, setFilterType] = useState([]);

  const { data, loading, fetchMore, error } = useQuery(GET_ALL_TEAMMEMBERS, {
    variables: {
      first: 20,
      after: null,
      memberType_in:
        filterType.length > 0 ? filterType : ["Student", "Alumni", "Lecturer"],
    },
  });

  const [nodes, setNodes] = useState();
  const [pageInfo, setPageInfo] = useState();

  useEffect(() => {
    if (!!data) {
      console.log(data);
      setNodes(
        data.teamMembersConnectionRelayCursor.edges.map((edge) => edge.node)
      );
      setPageInfo(data.teamMembersConnectionRelayCursor.pageInfo);
    }
    return () => {};
  }, [data]);

  const handleFilterType = (type) => {
    if (filterType.includes(type)) {
      setFilterType(filterType.filter((t) => t !== type));
    } else {
      setFilterType([...filterType, type]);
    }
  };

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
        <Button
          className="mx-auto"
          color={filterType.includes("Student") ? "primary" : "secondary"}
          onClick={() => handleFilterType("Student")}
        >
          Student
        </Button>
        <Button
          className="mx-auto"
          color={filterType.includes("Lecturer") ? "primary" : "secondary"}
          onClick={() => handleFilterType("Lecturer")}
        >
          Lecturer
        </Button>
        <Button
          className="mx-auto"
          color={filterType.includes("Alumni") ? "primary" : "secondary"}
          onClick={() => handleFilterType("Alumni")}
        >
          Alumni
        </Button>
        <TeamsListComponent teams={nodes}>
          {}
          <Button
            className="mx-auto"
            color="primary"
            onClick={() => {
              if (pageInfo.hasNextPage) {
                fetchMore({
                  variables: {
                    first: 10,
                    after: pageInfo.endCursor,
                  },
                });
              }
            }}
          >
            Load more...
          </Button>
        </TeamsListComponent>
      </>
    );
  };

  return <>{gqlResultAsJSX()}</>;
};

export default TeamsListRelayCursor;
