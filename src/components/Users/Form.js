import React from 'react';

const UsersForm = ({ handleChange, handleSubmit, data }) => {
  return(
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Username</label>
        <input className="input" name="username" placeholder="Username" onChange={handleChange} value={data.username || ''}/>
        {data.errors.username &&<small>{data.errors.username}</small>}
      </div>

      <div className="field">
        <label className="label">Image</label>
        <input className="input" name="image" placeholder="Image" onChange={handleChange} value={data.image || ''}/>
        {data.errors.image &&<small>{data.errors.image}</small>}
      </div>

      <div className="field">
        <label className="label">Bio</label>
        <textarea className="textarea" name="image" placeholder="Image" onChange={handleChange} value={data.image || ''}/>
        {data.errors.image &&<small>{data.errors.image}</small>}
      </div>

      <div className="update-button">
        <button className="button">Update</button>
      </div>
    </form>
  );
};

export default UsersForm;
