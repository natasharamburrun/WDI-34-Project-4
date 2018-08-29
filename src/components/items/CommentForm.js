import React from 'react';

const CommentForm = ({commentCreate, handleCommentChange}) => {
  return(

    <section className="comment-box">
      <form onSubmit={commentCreate}>
        <article className="media-comment">
          <div className="media-content-comment">
            <div className="content-comment">
              <div className="field-comment">
                <div className="control">
                  <label className="label">Leave a comment for the seller</label>
                  <textarea className="textarea" name="content" placeholder="Write a comment" onChange={handleCommentChange}/>
                </div>
              </div>
              <br/>
              <button className="button">Post</button>
            </div>
          </div>
        </article>
      </form>
    </section>
  );
};

export default CommentForm;
