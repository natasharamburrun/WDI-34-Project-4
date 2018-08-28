import React from 'react';
import ReactFilestack from 'filestack-react';

const ItemsForm = ({ handleChange, handleSubmit, handleFilestack, data }) => {
  return(

    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Category</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select name="category" onChange={handleChange} value={data.item.category || ''} >
              <option value="" disabled>Please Choose</option>
              <option>Clothes</option>
              <option>Bags</option>
              <option>Shoes</option>
              <option>Accessories</option>
            </select>
          </div>
        </div>
        {data.errors.category &&<small>{data.errors.category}</small>}
      </div>

      <div className="field">
        <label className="label">Gender</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select name="gender" onChange={handleChange} value={data.item.gender || ''} >
              <option value="" disabled>Please Choose</option>
              <option>Female</option>
              <option>Male</option>
              <option>Kids</option>
            </select>
          </div>
        </div>
        {data.errors.gender &&<small>{data.errors.gender}</small>}
      </div>

      <div className="field">
        <label className="label">Item Category</label>
        <input className="input" name="itemCategory" placeholder="itemCategory" onChange={handleChange} value={data.item.itemCategory || ''}/>
        {data.errors.itemCategory &&<small>{data.errors.itemCategory}</small>}
      </div>

      <div className="field">
        <label className="label">Designer Name</label>
        <input className="input" name="designerName" placeholder="designerName" onChange={handleChange} value={data.item.designerName || ''}/>
        {data.errors.designerName &&<small>{data.errors.designerName}</small>}
      </div>

      <div className="field">
        <label className="label">Item Description</label>
        <textarea className="input" name="itemDescription" placeholder="itemDescription" onChange={handleChange} value={data.item.itemDescription || ''}/>
        {data.errors.itemDescription &&<small>{data.errors.itemDescription}</small>}
      </div>

      <div className="field">
        <label className="label">Size</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select name="size" onChange={handleChange} value={data.item.size || ''} >
              <option value="" disabled>Please Choose</option>
              <option>XL</option>
              <option>L</option>
              <option>M</option>
              <option>S</option>
              <option>XS</option>
            </select>
          </div>
          {data.errors.size &&<small>{data.errors.size}</small>}
        </div>
      </div>

      <div className="field">
        <label className="label">Price</label>
        <input className="input" name="price" placeholder="price" onChange={handleChange} value={data.item.price || ''}/>
        {data.errors.price &&<small>{data.errors.price}</small>}
      </div>

      <div className="field">
        <label className="label">rrp</label>
        <input className="input" name="rrp" placeholder="rrp" onChange={handleChange} value={data.item.rrp || ''}/>
      </div>
      {data.errors.rrp &&<small>{data.errors.rrp}</small>}

      <div className="field">
        <label className="label">Condition</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select name="condition" onChange={handleChange} value={data.item.condition || ''} >
              <option value="" disabled>Please Choose</option>
              <option>New with tags</option>
              <option>New</option>
              <option>Very good</option>
              <option>Good</option>
              <option>Satisfactory</option>
            </select>
          </div>
          {data.errors.condition &&<small>{data.errors.condition}</small>}
        </div>
      </div>

      <div className="field">
        <label className="label">Material</label>
        <input className="input" name="material" placeholder="material" onChange={handleChange} value={data.item.material || ''}/>
        {data.errors.material &&<small>{data.errors.material}</small>}
      </div>

      <div className="field">
        <label className="label">Colour</label>
        <input className="input" name="colour" placeholder="colour" onChange={handleChange} value={data.item.colour || ''}/>
        {data.errors.colour &&<small>{data.errors.colour}</small>}
      </div>

      <div className="field">
        <label className="label">Image</label>
        <ReactFilestack
          apikey={'AVG2Ji6nNTN2YLLIdg09Mz'}
          options={{
            accept: ['image/*'],
            maxSize: 500 * 500,
            maxFiles: 5
          }}
          onSuccess={handleFilestack}
          render={({ onPick }) => (
            <div>
              <button onClick={onPick}>Upload Pictures</button>
              {data.item.image && <img src={data.item.image} />}
            </div>
          )}
          onChange={handleChange}
          value={data.item.image || ''}
        />
        {data.errors.image &&<small>{data.errors.image}</small>}
      </div>

      <div className="field">
        <label className="label">Sale Description</label>
        <textarea className="input" name="salePitch" placeholder="Sale Description" onChange={handleChange} value={data.item.salePitch || ''}/>
        {data.errors.salePitch &&<small>{data.errors.salePitch}</small>}
      </div>

      <div className="field">
        <label className="label">Shipping</label>
        <textarea className="input" name="shipping" placeholder="Shipping" onChange={handleChange} value={data.item.shipping || ''}/>
        {data.errors.shipping &&<small>{data.errors.shipping}</small>}
      </div>

      <button className="button">Submit</button>
    </form>
  );
};

export default ItemsForm;
