import React from 'react';
import { shallow } from 'enzyme';
import ResultsDisplay from './ResultsDisplay';

describe('ResultsDisplay component', () => {
  const props = {
    headers: {},
    response: {},
  };

  it('renders ResultsDisplay', () => {   
    const wrapper = shallow(<ResultsDisplay {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
