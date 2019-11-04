import React from 'react';
import { shallow } from 'enzyme';
import HistoryItem from './HistoryItem';

describe('HistoryItem component', () => {
  const props = {
    handleHistoryClick: () => {},
    url: 'jkl',
    method: 'jkl',
    headers: {},
    results: {}
  };
  it('renders HistoryItem', () => {   
    const wrapper = shallow(<HistoryItem {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
