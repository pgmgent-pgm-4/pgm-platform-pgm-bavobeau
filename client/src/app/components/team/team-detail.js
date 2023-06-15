const TeamDetailsComponent = ({teamMember}) => {
  return (
    <div className="row column-gap-3">
      <div className="col-4">
        <img src={teamMember.picture.url} alt={teamMember.firstName}></img>
      </div>
      <div className="col-7">
        <h1>{teamMember.firstName} {teamMember.lastName}</h1>
        <h2>Role: {teamMember.memberType}</h2>
        <h2>Job: {teamMember.jobTitle}</h2>
      </div>
    </div>
  )
};

export default TeamDetailsComponent;