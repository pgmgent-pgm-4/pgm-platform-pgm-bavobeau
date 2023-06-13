import { NavLink } from "react-router-dom";

const PostSummaryComponent = ({post}) => {
  return (
    <div className="col">
      <NavLink to={`/posts/${post.id}`}>
        <div className="post-summary card h-100">
          <img src={post.thumbnailUrl} className="card-img-top" alt={post.title}></img>
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
          </div>
        </div>
      </NavLink>      
    </div>
  )
};

export default PostSummaryComponent;