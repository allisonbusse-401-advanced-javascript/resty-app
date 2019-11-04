import React from 'react';
import { shallow } from 'enzyme';
import Gifs from './Gifs';

Gifs.apiCall = jest.fn();

describe('Gifs container', () => {
  it('renders Gif component', () => {
    // eslint-disable-next-line no-undef
    global.fetch = jest.fn(() => Promise.resolve());
    const wrapper = shallow(<Gifs />);
    expect(wrapper).toMatchSnapshot();
  });
});