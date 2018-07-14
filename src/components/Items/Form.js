import React from 'react';

const ItemsForm = ({ handleChange, handleSubmit, data }) => {
  return(

    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Item Category</label>
        <input className="input" name="itemCategory" placeholder="itemCategory" onChange={handleChange} value={data.itemCategory || ''}/>
      </div>

      <div className="field">
        <label className="label">Designer Name</label>
        <input className="input" name="designerName" placeholder="designerName" onChange={handleChange} value={data.designerName || ''}/>
      </div>

      <div className="field">
        <label className="label">Item Description</label>
        <textarea className="input" name="itemDescription" placeholder="itemDescription" onChange={handleChange} value={data.itemDescription || ''}/>
      </div>

      <div className="field">
        <label className="label">Size</label>
        <input className="input" name="size" placeholder="size" onChange={handleChange} value={data.size || ''}/>
      </div>

      <div className="field">
        <label className="label">Price</label>
        <input className="input" name="price" placeholder="price" onChange={handleChange} value={data.price || ''}/>
      </div>

      <div className="field">
        <label className="label">rrp</label>
        <input className="input" name="rrp" placeholder="rrp" onChange={handleChange} value={data.rrp || ''}/>
      </div>

      <div className="field">
        <label className="label">Condition</label>
        <input className="input" name="condition" placeholder="condition" onChange={handleChange} value={data.condition || ''}/>
      </div>

      <div className="field">
        <label className="label">Material</label>
        <input className="input" name="material" placeholder="material" onChange={handleChange} value={data.material || ''}/>
      </div>

      <div className="field">
        <label className="label">Colour</label>
        <input className="input" name="colour" placeholder="colour" onChange={handleChange} value={data.colour || ''}/>
      </div>

      <div className="field">
        <label className="label">Image</label>
        <input className="input" name="image" placeholder="image" onChange={handleChange} value={data.image || ''}/>
      </div>

      <div className="field">
        <label className="label">Shipping</label>
        <textarea className="input" name="shipping" placeholder="Shipping" onChange={handleChange} value={data.shipping || ''}/>
      </div>

      <button className="button">Submit</button>
    </form>
  );
};

export default ItemsForm;
