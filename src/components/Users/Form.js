import React from 'react';
import ReactFilestack from 'filestack-react';

const UsersForm = ({ handleChange, handleSubmit, handleFilestack, data }) => {
  return(
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Username</label>
        <input className="input" name="username" placeholder="Username" onChange={handleChange} value={data.user.username || ''}/>
        {data.errors.username &&<small>{data.errors.username}</small>}
      </div>

      <div className="field">
        <label className="label">Image</label>
        <ReactFilestack
          apikey={'AbEqJmhCVTTmU0EfzPrSoz'}
          options={{
            accept: ['image/*'],
            maxSize: 500 * 500,
            maxFiles: 1
          }}
          onSuccess={handleFilestack}
          render={({ onPick }) => (
            <div className="submitProfilepic">
              <img src={data.user.image} />
              <button onClick={onPick}>Upload Photo</button>
            </div>
          )}
        />
        {data.errors.image &&<small>{data.errors.image}</small>}
      </div>

      <div className="field">
        <label className="label">Bio</label>
        <textarea className="textarea" name="bio" placeholder="Bio" onChange={handleChange} value={data.user.bio || ''}/>
        {data.errors.bio &&<small>{data.errors.bio}</small>}
      </div>

      <div className="update-button">
        <button className="button">Update</button>
      </div>
    </form>
  );
};

export default UsersForm;
