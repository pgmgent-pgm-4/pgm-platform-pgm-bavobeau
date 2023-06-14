import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom"
import { GET_COURSE_BY_ID } from "../graphql";
import { CourseDetailsComponent } from "../components/programme";
import { BodyLayoutContainer } from "../components/layout";

const ProgrammeDetailsPage = () => {
  let params = useParams();
  let courseId = (params.courseId);

  const { loading, error, data } = useQuery(GET_COURSE_BY_ID, {
    variables: {
      courseId: courseId
    }
  });

  const gqlResult = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.toString()}Error :</p>;

    return (
      <BodyLayoutContainer props={"md"}>
        <CourseDetailsComponent course={data.course} />
      </BodyLayoutContainer>
    );
  };

  return (
    <>
      {gqlResult()}
    </>
  )
};

export default ProgrammeDetailsPage;