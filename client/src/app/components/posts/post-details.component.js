import { BodyLayoutContainer } from "../layout";

const PostDetailsComponent = ({ post }) => {
  return (
    <BodyLayoutContainer>
      <div className="post-details">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        ></div>
      </div>
    </BodyLayoutContainer>
  );
};

export default PostDetailsComponent;
