import React from 'react';
import ReactFilestack from 'filestack-react';

const ItemsForm = ({ handleChange, handleSubmit, handleFilestack, data }) => {
  return(

    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Category</label>
        <input className="input" name="category" placeholder="Category" onChange={handleChange} value={data.item.category || ''}/>
      </div>

      <div className="field">
        <label className="label">Item Category</label>
        <input className="input" name="itemCategory" placeholder="itemCategory" onChange={handleChange} value={data.item.itemCategory || ''}/>
      </div>

      <div className="field">
        <label className="label">Designer Name</label>
        <input className="input" name="designerName" placeholder="designerName" onChange={handleChange} value={data.item.designerName || ''}/>
      </div>

      <div className="field">
        <label className="label">Item Description</label>
        <textarea className="input" name="itemDescription" placeholder="itemDescription" onChange={handleChange} value={data.item.itemDescription || ''}/>
      </div>

      <div className="field">
        <label className="label">Size</label>
        <input className="input" name="size" placeholder="size" onChange={handleChange} value={data.item.size || ''}/>
      </div>

      <div className="field">
        <label className="label">Price</label>
        <input className="input" name="price" placeholder="price" onChange={handleChange} value={data.item.price || ''}/>
      </div>

      <div className="field">
        <label className="label">rrp</label>
        <input className="input" name="rrp" placeholder="rrp" onChange={handleChange} value={data.item.rrp || ''}/>
      </div>

      <div className="field">
        <label className="label">Condition</label>
        <input className="input" name="condition" placeholder="condition" onChange={handleChange} value={data.item.condition || ''}/>
      </div>

      <div className="field">
        <label className="label">Material</label>
        <input className="input" name="material" placeholder="material" onChange={handleChange} value={data.item.material || ''}/>
      </div>

      <div className="field">
        <label className="label">Colour</label>
        <input className="input" name="colour" placeholder="colour" onChange={handleChange} value={data.item.colour || ''}/>
      </div>

      <div className="field">
        <label className="label">Image</label>
        <ReactFilestack
          apikey={'AbEqJmhCVTTmU0EfzPrSoz'}
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
        />
        {data.errors.image &&<small>{data.errors.image}</small>}
      </div>

      {/* <div className="field">
        <label className="label">Image</label>
        <input className="input" name="image" placeholder="image" onChange={handleChange} value={data.item.image || ''}/>
      </div> */}

      <div className="field">
        <label className="label">Sale Description</label>
        <textarea className="input" name="salePitch" placeholder="Sale Description" onChange={handleChange} value={data.item.salePitch || ''}/>
      </div>

      <div className="field">
        <label className="label">Shipping</label>
        <textarea className="input" name="shipping" placeholder="Shipping" onChange={handleChange} value={data.item.shipping || ''}/>
      </div>

      <button className="button">Submit</button>
    </form>
  );
};

export default ItemsForm;
