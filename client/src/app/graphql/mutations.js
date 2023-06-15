import { gql } from "@apollo/client";

export const UPDATE_PROJECT = gql`
mutation UpdateProject($id: ID = "", $body: RichTextAST = "", $coverImage: String = "", $description: String = "", $title: String = "") {
  updateProject(
    data: {body: $body, coverImage: $coverImage, description: $description, title: $title}
    where: {id: $id}
  )
}`;