import { useQuery } from "@apollo/client";

import { GET_ALL_COURSES } from "../../graphql";

const Programme = () => {
  const { data, loading, error } = useQuery(GET_ALL_COURSES);

  const semesters = ['Semester_1', 'Semester_2', 'Semester_3', 'Semester_4'];

  if (loading) return (
    <div className="spinner-border" role="status">
      <strong>Loading...</strong>
      <span className="visually-hidden">Loading...</span>
    </div>
  )

  if (error) return <p>{error.toString()}</p>;
  
  return (
    <div className="container">
      {semesters.map(semester => (
        <div key={semester} className="row row-cols-2">
          <h2 className="col">{semester.replace("_"," ")}</h2>
          <p className="col">studiepunten</p>
            {data && data.courses
              .filter(item => item.semester === semester)
              .map(item => (
                <>
                  <div className="col">{item.name}</div>
                  <div className="col">{item.studyPoints}</div>
                </>
              ))}
          </div>
      ))}
    </div>
  );
};

export default Programme;