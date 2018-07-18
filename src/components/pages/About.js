import React from 'react';

const About = () => {
  return (
    <div className="card-content-about">
      <div className="content-font">
        <h3 className="title headline">How to sell your preloved designer items on designer marketplace in 5 simple steps</h3>
        <h3 className="title subheadline">Create your profile - creating an account, uploading a photo and writing a brief intro about yourself.</h3>
        <div className="about">
          <div className="createprofile">
            <img src= 'https://i.imgur.com/VZm3AUy.png?4'/>
            <h2>Take a quality picture of your sale item. It is highly recommended to upload a picture on a clear preferably white background to improve browsing and lead to more successful sales. Always photograph the entire item, keep the background simple and avoid blurred or filtered images.</h2>
            {/* <img src= 'https://i.imgur.com/TZIx1lw.png?2'/> */}
          </div>
          <div className="takepic">
            <img src= 'https://i.imgur.com/8QwSyal.png?2'/>
            <h2>Upload a photo of your item along with a product description stating brand, size and quality. Ensure that your item description is as accurate - and sellable - as possible.</h2>
          </div>
          <div className="qanda">
            <img src= 'https://i.imgur.com/upnsLfI.png?2'/>
            <h2>Check for comments for buys questions. Communication is key, always be as polite and as prompt as possible when liaising with prospective buyers.</h2>
          </div>
          <div className="paid">
            <img src= 'https://i.imgur.com/uoIs0QU.png?2'/>
            <h2>Receive payment - Once the buyer has acknowledged receipt, payment will be processed</h2>
          </div>
          <div className="ship">
            <img src= 'https://i.imgur.com/4RsvgA6.png?2'/>
            <h2>Once your item sells, ship it directly to the buyer</h2>
          </div>
        </div>
        <h3 className="title"></h3>
      </div>
    </div>
  );
};

export default About;
