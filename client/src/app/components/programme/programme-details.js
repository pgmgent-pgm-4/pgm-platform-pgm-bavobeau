const CourseDetailsComponent = ({ course }) => {
  return (
    <div className="post-details">
      <h1>
        <u>{course.name}</u>
      </h1>
      <p className="border-bottom">{course.description}</p>
      <ul className="border-bottom">
        {course.lecturers.map((lecturer) => {
          <li>{lecturer.name}</li>;
        })}
      </ul>
      <p>{course.amountOfHoursPerWeek}</p>
      <p>{course.studyPoints}</p>
      <a href={course.ectsUrl}>ects-fiche</a>
    </div>
  );
};

export default CourseDetailsComponent;
