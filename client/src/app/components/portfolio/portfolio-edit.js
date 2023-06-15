import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { Button } from "reactstrap";

import { GET_PORTFOLIO_BY_ID } from "../../graphql/queries";
import { UPDATE_PROJECT } from "../../graphql/mutations";

const PortfolioEdit = ({userId}) => {
  const { data, loading, error } = useQuery(GET_PORTFOLIO_BY_ID, {
    variables: {
      id: userId,
    }
  });

  const [updateProject, {data1, loading1, error1}] = useMutation(UPDATE_PROJECT);

  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleUpdate = ({newValues}) => {
    console.log(newValues);
    updateProject({updateProject:{
      data: {
        newValues
      }
    }});
    setEditMode(false);
  };

  const gqlResultAsJSX = () => {
    if (loading) return (
      <div className="spinner-border" role="status">
        <strong>Loading...</strong>
        <span className="visually-hidden">Loading...</span>
      </div>
    );

    if (error) return <p>Error :{error.toString()}</p>;

    return (
      <form>
        {data && data.projects.map((project) => (
          <>
            <div className="mb-3 row">
              <label htmlFor={project.title} className="col-sm-2 col-form-label">Title: </label>
              <div className="col-sm-10">
                <input type="text" disabled={!editMode} className="form-control" id="title" defaultValue={project.title}></input>
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="description" className="col-sm-2 col-form-label">Description: </label>
              <div className="col-sm-10">
                <input type="text" disabled={!editMode} className="form-control" id="description" defaultValue={project.description}></input>
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="body" className="col-sm-2 col-form-label">Body: </label>
              <div className="col-sm-10">
                <textarea type="text-field" disabled={!editMode} className="form-control" id="body" defaultValue={project.body.markdown}></textarea>
              </div>
            </div>
            {!editMode && (
              <>
                <Button className="mx-auto" color="primary" onClick={handleEdit}>
                  Edit
                </Button>
              </>
            )}
            {editMode && (
              <>
                <Button className="mx-auto" color="danger" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button className="mx-auto" color="success" onClick={handleUpdate({
                      title: document.getElementById("title").value,
                      description: document.getElementById("description").value,
                      body: document.getElementById("body").value,
                      Id: project.id,
                    })}>
                  Update
                </Button>
              </>
            )}
          </>
        ))}
      </form>
    )
  };

  return (
    <>
      {gqlResultAsJSX()}
    </>
  )
};

export default PortfolioEdit;