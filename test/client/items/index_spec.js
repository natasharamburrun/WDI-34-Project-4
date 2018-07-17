/* global describe, it, beforeEach, before, after */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import sinon from 'sinon';
import axios from 'axios';
import Promise from 'bluebird';
import _ from 'lodash';

import ItemsIndex from '../../../src/components/items/Index';

const data = [{
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
}, {
  _id: 2,
  category: 'Clothes',
  itemCategory: 'Dress',
  itemDescription: 'DOLCE & GABBANA Floral Print Dress',
  designerName: 'DOLCE & GABBANA',
  size: 's',
  price: 309,
  rrp: 755,
  condition: 'Hardly Ever Worn/Used',
  material: 'Silk',
  colour: 'Multi-Coloured / Stripe',
  shipping: 'Hermes £2.79',
  salePitch: 'Bottega Veneta brick red fit & flare dress with capped sleeves, round neckline and side zipper closure. Pleated at back for fit with a textured hem.',
  image: 'https://d38r3tbvwkical.cloudfront.net/images/144/picture/144040_1.jpg?c=1527840269'
}, {
  _id: 3,
  category: 'Clothes',
  itemCategory: 'Dress',
  itemDescription: 'Bottega Veneta Red fit & flare Dress',
  designerName: 'BOTTEGA VENETA',
  size: 'm',
  price: 120,
  rrp: 1225,
  condition: 'Hardly Ever Worn/Used',
  material: '100% Wool',
  colour: 'Red',
  shipping: 'Royal Mail Standard 2nd Class £2.95',
  salePitch: 'Good condition with a small faded mark below the waist on the right side. This can be seen with the zoom in in picture 2. The mark is hard to see due to the colour of the fabric. 8.5/10.',
  image: 'https://d38r3tbvwkical.cloudfront.net/images/119/picture/119820_1.jpg?c=1529852233'
}, {
  _id: 4,
  category: 'Clothes',
  itemCategory: 'Dress',
  itemDescription: 'Ralph Lauren red dress',
  designerName: 'RALPH LAUREN',
  size: 'm',
  price: 500,
  rrp: 2000,
  condition: 'Never Worn Without Tags',
  material: 'Silk Stretch Knit',
  colour: 'Red',
  shipping: 'Royal Mail Signed 2nd Class £3.95',
  salePitch: 'beautiful dress, stretches to fit to give a great silhouette. Side zip to give snug fit for a flirty summer dress.',
  image: 'https://d38r3tbvwkical.cloudfront.net/images/137/picture/137532_1.jpg?c=1527010690'
}, {
  _id: 5,
  category: 'Bags',
  itemCategory: 'Ladies Shoulder Bags',
  itemDescription: 'Chanel bag',
  designerName: 'Chanel',
  size: 's',
  price: 2499,
  rrp: 3500,
  condition: 'worn',
  material: 'Lambskin Leather',
  colour: 'black',
  shipping: 'Royal Mail Signed 2nd Class £3.95',
  salePitch: 'This CHANEL Maxi Jumbo XL Flap Bag is in Very Good Pre-Owned Condition accompanied by Chanel Dust Bag, Box, Authenticity Card, Care Booklet. Circa 1997. Primarily made from Lambskin Leather complimented by Gold hardware.',
  image: 'https://d38r3tbvwkical.cloudfront.net/images/131/picture/131050_1.jpg?c=1516270097'
}];

describe('ItemsIndex tests', () => {
  let wrapper;
  let promise;

  before(done => {
    promise = Promise.resolve({ data });
    sinon.stub(axios, 'get').returns(promise);
    done();
  });

  after(done => {
    axios.get.restore();
    done();
  });


  it('should render items', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('div.card').length).to.eq(5);
      done();
    })
      .catch(done);
  });

  it('should render the correct data', done => {
    promise.then(() => {
      wrapper.update();
      _.orderBy(data, 'name', 'asc').forEach((item, index) => {
        expect(wrapper.find('img').at(index).prop('src')).to.eq(item.image);
        expect(wrapper.find('.title.name').at(index).text()).to.eq(item.designerName);
        expect(wrapper.find('Link').at(index).prop('to')).to.eq(`/items/${item._id}`);
      });
      done();
    });
  });

  it('should re-order the criminals when the sort dropdown is changed', done => {
    const e = { target: { value: 'name|desc' } };
    promise.then(() => {
      wrapper.find('select').simulate('change', e);
      wrapper.update();

      _.orderBy(data, 'name', 'desc').forEach((item, index) => {
        expect(wrapper.find('img').at(index).prop('src')).to.eq(item.image);
        expect(wrapper.find('.title.name').at(index).text()).to.eq(item.designerName);
        expect(wrapper.find('Link').at(index).prop('to')).to.eq(`/items/${item._id}`);
      });

      done();
    });
  });

  it('should filter the items', done => {
    const input = wrapper.find('input');
    promise.then(() => {
      input.simulate('change', { target: { value: 'BALENCIAGA' } });
      wrapper.update();
      expect(wrapper.find('div.card').length).to.eq(1);

      input.simulate('change', { target: { value: 'DOLCE & GABBANA' } });
      wrapper.update();
      expect(wrapper.find('div.card').length).to.eq(1);

      input.simulate('change', { target: { value: 'garbage' } });
      wrapper.update();
      expect(wrapper.find('div.card').length).to.eq(0);

      done();
    });
  });


  beforeEach(done => {
    wrapper = mount(
      <MemoryRouter>
        <ItemsIndex />
      </MemoryRouter>
    );
    done();
  });
});
