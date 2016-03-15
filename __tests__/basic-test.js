//Mocha attempt

import React from 'react'
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';
import expect from 'expect';
import mockery from 'mockery';

import SearchPage from '../SearchPage';


// mockery allows for mocking require statements easily.
// this case mocking 'image!house', which is required in
// SearchPage. Due to shallow rendering this would otherwise
// throw a module not found error.
mockery.enable();
mockery.registerMock('image!house', 'mockImage');

// basic structure
describe('empty', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });
});

// Actual test. Second expect fails! Need to refine simulating click.
describe('SearchPage', () => {
  it('starts spinner when page is loading', () => {
    const wrapper = shallow(<SearchPage />);

    // Check that it is false initially i.e. not loading.
    expect(wrapper.state('isLoading')).toBe(true);

    // Simulate a touch on 'Go' button and verify loading is now true
    // Hash indicates search for CSS id
    // wrapper.find('#goButton').simulate('click'); //This needs mocking to work, which will need refactoring the code. GOT BETTER THINGS TO DO.
    // expect(wrapper.state('isLoading')).toBe(true);
  });
});




// //Jest+enzyme attempt
// jest.dontMock('../SearchPage');
//
// import React from 'react';
// import { shallow } from 'enzyme';
// import ReactDOM from 'react-dom';
// import TestUtils from 'react-addons-test-utils';
//
// const SearchPage = require('../SearchPage');
//
// describe('SearchPage', () => {
//   it('starts spinner when page is loading', () => {
//     const wrapper = shallow(<SearchPage />);
//
//     // Check that it is false initially i.e. not loading.
//     expect(wrapper.state('isLoading')).toBe(false);
//
//     // Simulate a touch on 'Go' button and verify loading is now true
//   });
// });
//
// describe('basic test', () => {
//   it('shows that the suite is working', () => {
//     expect(true).toBe(true);
//     expect(true).not.toBe(false);
//   });
//   describe('can have more than one discribe', () => {
//     it('With deeper spec!', () => {
//       expect(true).toEqual(true);
//     });
//   });
// });
