import React from 'react';
import User from '../../lib/User';

const CommentBox = ({ data, handleCommentDelete }) => {
  return(
    <section className="comment-box">
      <div className="content-comment">
        {data.item.comments.map((comment, i) =>
          <article key={i} className="media">
            <div key={comment._id} className='media'>
              <figure className="media-left">
                <p className="image is-64x64">
                  {User.getCurrentUser() &&
                  <div className="userPicture" style={{backgroundImage: `url(${User.getCurrentUser().image})`}}>
                  </div>
                  }
                </p>
              </figure>
              <div className="media-content">
                <p className="control">
                  {User.getCurrentUser() && <p className="title is-6">Name: {User.getCurrentUser().username}</p>}
                  {User.getCurrentUser() && <p className="subtitle is-6">Email: {User.getCurrentUser().email}</p>}
                  <p className="subtitle is-6">Comment: {comment.content}</p>
                </p>
              </div>
              <figure className="media-right">
                <button onClick={() => handleCommentDelete(comment._id)} className="delete"></button>
              </figure>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};

export default CommentBox;
