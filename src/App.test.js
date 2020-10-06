import React from 'react';
import renderer from 'react-test-renderer'
import App from './App';

describe('App snapshot test', () => {
  test('App snapshot test 1', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
});

