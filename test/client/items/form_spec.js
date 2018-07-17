/* global describe, it, beforeEach */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ItemsForm from '../../../src/components/items/Form';

describe('ItemsForm tests', () => {

  let wrapper;

  beforeEach(done => {
    // shallow is for functional components (it does not trigger lifecycle hooks)
    const props = {
      data: {
        item: {
          category: 'clothes',
          itemCategory: 'dress',
          designerName: 'd&g',
          itemDescription: 'mid length flow',
          size: 's',
          price: '155',
          condition: 'new',
          material: 'silk',
          colour: 'red',
          image: 'https://d38r3tbvwkical.cloudfront.net/images/141/picture/141317_1.jpg?c=1531819017',
          salePitch: 'never worn in good condition',
          shipping: 'royal mail'
        },
        errors: {}
      }
    };

    wrapper = shallow(<ItemsForm {...props} />);
    done();
  });

  it('should render a form', done => {
    expect(wrapper.find('form').length).to.eq(1);
    done();
  });

  it('should render the correct inputs', done => {
    expect(wrapper.find('[name="category"]').length).to.eq(1);
    expect(wrapper.find('[name="itemCategory"]').length).to.eq(1);
    expect(wrapper.find('[name="designerName"]').length).to.eq(1);
    expect(wrapper.find('[name="itemDescription"]').length).to.eq(1);
    expect(wrapper.find('[name="size"]').length).to.eq(1);
    expect(wrapper.find('[name="price"]').length).to.eq(1);
    expect(wrapper.find('[name="condition"]').length).to.eq(1);
    expect(wrapper.find('[name="material"]').length).to.eq(1);
    expect(wrapper.find('[name="colour"]').length).to.eq(1);
    expect(wrapper.find('[name="image"]').length).to.eq(1);
    expect(wrapper.find('[name="salePitch"]').length).to.eq(1);
    expect(wrapper.find('[name="shipping"]').length).to.eq(1);
    expect(wrapper.find('button').length).to.eq(1);
    done();
  });

  it('should render the correct inputs', done => {
    expect(wrapper.find({ value: 'clothes', name: 'category' }).length).to.eq(1);
    expect(wrapper.find({ value: 'dress', name: 'itemCategory' }).length).to.eq(1);
    expect(wrapper.find({value: 'd&g', name: 'designerName'}).length).to.eq(1);
    expect(wrapper.find({value: 'mid length flow', name: 'itemDescription'}).length).to.eq(1);
    expect(wrapper.find({value: 's', name: 'size'}).length).to.eq(1);
    expect(wrapper.find({value: '155', name: 'price'}).length).to.eq(1);
    expect(wrapper.find({ value: 'new', name: 'condition' }).length).to.eq(1);
    expect(wrapper.find({ value: 'silk', name: 'material' }).length).to.eq(1);
    expect(wrapper.find({value: 'red', name: 'colour'}).length).to.eq(1);
    expect(wrapper.find({value: 'never worn in good condition', name: 'salePitch'}).length).to.eq(1);
    expect(wrapper.find({value: 'royal mail', name: 'shipping'}).length).to.eq(1);

    done();
  });


});
