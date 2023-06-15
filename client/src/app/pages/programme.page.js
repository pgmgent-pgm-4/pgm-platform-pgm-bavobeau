import { BodyLayoutContainer } from "../components/layout";
import Programme from "../components/programme/programme";

const ProgrammePage = () => {
  return (
    <BodyLayoutContainer>
      <h1 className="text-3xl font-bold">
        <u>Programme Graduaat Programmeren</u>
      </h1>
      <Programme></Programme>
    </BodyLayoutContainer>
  );
};

export default ProgrammePage;
