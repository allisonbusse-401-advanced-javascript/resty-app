import React from 'react';
import { shallow } from 'enzyme';
import HeaderForm from './HeaderForm';

describe('HeaderForm component', () => {
  const props = {
    handleHeaderSubmit: () => {},
    handleChange: () => {},
    authUsername: 'jkl',
    authPassword: 'jkl',
    authToken: 'uio'
  };
  it('renders HeaderForm', () => {   
    const wrapper = shallow(<HeaderForm {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
