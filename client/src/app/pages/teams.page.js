import { BodyLayoutContainer } from "../components/layout";
import { TeamsListRelayCursor } from "../components/team";

const TeamsPage = () => {
  return (
    <BodyLayoutContainer>
      <h1 className="text-3xl font-bold"><u>The PGM Team</u></h1>
      <TeamsListRelayCursor />
    </BodyLayoutContainer>
  );
};

export default TeamsPage;