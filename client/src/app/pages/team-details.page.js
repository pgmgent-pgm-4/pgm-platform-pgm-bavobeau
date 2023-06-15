// Import external modules
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_TEAMMEMBER_BY_ID } from "../graphql";
import { TeamDetailsComponent } from "../components/team";
import { BodyLayoutContainer } from "../components/layout";

// Import custom components

const TeamDetailPage = () => {
  let params = useParams();
  let teamId = params.teamId;

  const { loading, error, data } = useQuery(GET_TEAMMEMBER_BY_ID, {
    variables: {
      teamId: teamId,
    },
  });

  const gqlResult = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.toString()}Error :(</p>;

    return <TeamDetailsComponent teamMember={data.teamMember} />;
  };

  return <BodyLayoutContainer>{gqlResult()}</BodyLayoutContainer>;
};

export default TeamDetailPage;
