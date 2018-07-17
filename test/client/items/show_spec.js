/* global describe, it, beforeEach, before, after */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import sinon from 'sinon';
import axios from 'axios';
import Promise from 'bluebird';

import ItemsShow from '../../../src/components/criminals/Show';

const data = {
  _id: 1,
  category: 'Clothes',
  itemCategory: 'Dress',
  itemDescription: 'Balenciaga graphic print dress',
  designerName: 'BALENCIAGA',
  size: 's',
  price: 195,
  rrp: 680,
  condition: 'Hardly Ever Worn/Used',
  material: 'Wool/Cotton Mix',
  colour: 'Multi-Coloured / Stripe',
  shipping: 'Royal Mail Signed 2nd Class £3.95',
  salePitch: 'BLACK WITH VIBRANT PRINT, PULLED AT WAIST, V NECKLINE ZIPS AT BACK, HALF LINED',
  image: 'https://d38r3tbvwkical.cloudfront.net/images/144/picture/144795_1.jpg?c=1528467935'
};

describe('ItemsShow tests', () => {
  let promise;
  let wrapper;

  before(done => {
    promise = Promise.resolve({ data });
    sinon.stub(axios, 'get').returns(promise);
    done();
  });

  after(done => {
    axios.get.restore();
    done();
  });

  beforeEach(done => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/items/1']}>
        <Route path="/items/:id" component={ItemsShow} />
      </MemoryRouter>
    );
    done();
  });

  it('should render the correct data', done => {
    promise.then(() => {
      wrapper.update();
      console.log(wrapper.debug());
      expect(wrapper.find('img').prop('src')).to.eq(data.image);
      expect(wrapper.find('h2.title').text()).to.eq(data.designerName);
      expect(wrapper.find('h2.title').text()).to.eq(data.name);
      wrapper
        .at(0)
        .children()
        .map((li, index) => expect(li.text()).to.eq(data.items[index]));

      done();
    });
  });

});
