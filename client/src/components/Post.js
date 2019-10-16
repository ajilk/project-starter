import React from 'react';
import { Link } from 'react-router-dom';

function Post({ content, createdAt, id, deletePost }) {
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text" style={{ justifyContent: 'justify-content-between' }} >
          <Link to={"/posts/" + id}>{content}</Link>
          <button onClick={() => deletePost(id)} className="btn btn-outline-dark">X</button>
        </div>
        <div className="card-footer small text-muted text-right">
          {createdAt}
        </div>
      </div>
    </div >
  );
}

export default Post;