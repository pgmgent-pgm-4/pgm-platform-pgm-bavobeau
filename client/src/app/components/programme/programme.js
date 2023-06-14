import { useQuery } from "@apollo/client";
import { NavLink } from "react-router-dom";

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
      <p>Tijdens het Graduaat Programmeren leer je het zichtbare (front-end) en onzichtbare (backend) deel van web- en mobiele toepassingen ontwikkelen. Je wordt specialist in JavaScript, HTML, CSS en vult jouw skills aan met o.a. PHP, Python, UI/UX. Naast deze technische kant, vergaar je ook algemene ICT-skills. Je leert ook hoe digital agencies werken en wat jouw rol hierbinnen zal zijn. Na deze opleiding kan je aan de slag als front-end developer, full-stack JavaScript developer, PHP developer, Web Designer + Coder of CMS Themer.</p>
      {semesters.map(semester => (
        <>   
          <div className="row">
            <h2 className="col">{semester.replace("_"," ")}</h2>
            <p className="col">studiepunten</p>
          </div>      
            {data && data.courses
              .filter(item => item.semester === semester)
              .map(item => (
                <NavLink to={`/programme/${item.id}`} className="row">
                  <div className="col">{item.name}</div>
                  <div className="col">{item.studyPoints}</div>
                </NavLink>
              ))}
          </>
      ))}

    </div>
  );
};

export default Programme;