import React from 'react';

const About = () => {
  return (
    <div className="card-content-about">
      <div className="content-font">
        <h3 className="title is-3">How to sell your preloved designer items on designer marketplace in 5 simple steps</h3>
        <div className="about">
          <h2>Create your profile - creating an account, uploading a photo and writing a brief intro about yourself.</h2>
          <div className="createprofile">
            <img src= 'https://i.imgur.com/VZm3AUy.png?4'/>
            <h2>Take a quality picture of your for sale item on a white background</h2>
            {/* <img src= 'https://i.imgur.com/TZIx1lw.png?2'/> */}
          </div>
          <div className="takepic">
            <img src= 'https://i.imgur.com/8QwSyal.png?2'/>
            <h2>Upload a photo of your item along with a product description stating brand, size and quality.</h2>
          </div>
          <div className="qanda">
            <img src= 'https://i.imgur.com/upnsLfI.png?2'/>
            <h2>Check for comments for buys questions</h2>
          </div>
          <div className="paid">
            <img src= 'https://i.imgur.com/uoIs0QU.png?2'/>
            <h2>Receive payment - Once the buyer has acknowledged receipt, payment will be processed  </h2>
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
