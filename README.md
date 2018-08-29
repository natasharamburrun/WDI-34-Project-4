![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)
# GA WDI-34  Project #4: A MERN stack Application

## Designer Marketplace
Visit app which is deployed on [Heroku](https://designer-marketplace.herokuapp.com/)

### Project Brief
* **Build a full-stack application** by making your own backend and your own front-end
* **Use an Express API** to serve your data from a Mongo database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
* **Have a visually impressive design**
* **Be deployed online** so it's publicly accessible.
* **Have automated tests** for _at least_ one RESTful resource on the back-end, and _at least_ one classical and one functional component on the front-end.
---
#### Technologies Used
HTML | SCSS | JavaScript (ES6) | MongoDB | Express | React | Node.js | Webpack | Mongoose | [Draw.io](https://www.draw.io) | [Trello](https://trello.com)

<hr/>

#### Idea
The final project of the WDI course was optional individual or group project. I opted to complete this project solo to be able to complete the full process of building a MERN stack app using the latest technology we learnt.

I choose to build a resale e-commerce application which allows the public to register to sell and buy unwanted luxury clothes and accessories. Similar concept to Vestiaire Collective or HEWI.

<strong>Homepage</strong>: The homepage invites new users to the website and provides a taster of what Designer Marketplace has to offer for sale.
<p align="center"><img src="src/images/homepage.gif" "width=700"></p>

#### Planning and Design
I used Draw.io to plan a skeleton of the website identifying the functionality and design. I managed this project using Trello to organise and prioritise tasks.

<strong>Wireframes - Draw.io</strong>:
<p align="center"><img src="src/images/wireframe.png" "width=700"></p>

<strong>Planning - Trello</strong>:
<p align="center"><img src="src/images/trello.png" "width=700"></p>

#### The build
I have successful built of a fully functioning full-stack application with a back-end and front-end which has a RESTful design patten.

<strong>Items Index Page</strong>: This page is to showcase all the items for sale. I have included a filter by category and a search by brand option.
<p align="center"><img src="src/images/items-index.gif" "width=700"></p>

CODE: Below I have included the code used to filter items on the page and return by the brand name. Here I used regular expression ie regex to match patterns of the character with strings.

```
filteredItems = (items) => {
  const re = new RegExp(this.state.search, 'i');
  return items.filter(item => re.test(item.designerName));
}
```
<strong>Items Show Page</strong>: The show page for items allows the buyer to browse the product detail. My highlight of this page is the comment section which allows users to leave a message about the product. 
<p align="center"><img src="src/images/items-show.gif" "width=700"></p>

<strong>Buy Now</strong>: My highlight of the project was implementing third party API Stripe. I successful implemented  stripe charges where the app processes payment from a test credit card by generating a token.
<p align="center"><img src="src/images/buynow.gif" "width=700"></p>

CODE:
```
submit = (e) => {
  e.preventDefault();
  this.props.stripe.createToken({ name: 'Name' })
    .then(token => {
      axios({
        url: '/api/orders',
        method: 'POST',
        headers: {Authorization: `Bearer ${Auth.getToken()}`},
        data: {
          ...token,
          currency: 'GBP',
          amount: this.props.amount * 100,
          payee: User.getCurrentUser().username || '',
          UserEmail: User.getCurrentUser().email || ''
        }
      })
        .then(() => this.setState({ complete: true }));
    });
}
```
<strong>Add a new item</strong>: The application has CRUD functionality where you can create, update, read and delete items. For this feature I have implemented API Filestack to enable user to upload images. I have also included dropdown options to make it easier for users to select options when filling out form.
<p align="center"><img src="src/images/new-items.gif" "width=700"></p>

<strong>Users Profile Index Page</strong>: I have created a users profile index page to provide the app a community feel. Allowing users to view profiles for buyers and sellers.
<p align="center"><img src="src/images/user-index.png" "width=700"></p>

#### Challenges and features to include
- Disable buy now button when item has been sold
- Payment successful to include order info including order id, and buyer info ie email and address.
- filter options to include sort by colour, item or price.
- Favourite items and list on the user profile page (ie wishlist)
- Allow users to follow each other
