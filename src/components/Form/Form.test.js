import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form component', () => {
  it('renders Form', () => {   
    const props = {
      handleSubmit: () => {},
      handleChange: () => {},
      url: 'jkl',
      method: 'jkl',
      body: 'uio'
    };

    const wrapper = shallow(<Form {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
