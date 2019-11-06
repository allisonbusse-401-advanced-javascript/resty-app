import React from 'react';
import { shallow } from 'enzyme';
import History from './History';

describe('History component', () => {
  const props = {
    handleHistoryClick: () => {},
    historyItems: []
  };

  it('renders History', () => {   
    const wrapper = shallow(<History {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
