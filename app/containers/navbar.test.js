import React from 'react';
import { shallow, mount } from 'enzyme';
import Navbar from './Navbar';
import {MemoryRouter} from 'react-router-dom'

describe('navbar', () => {
  it('should exist', () => {
    const wrapper = mount( <MemoryRouter> <Navbar /> </MemoryRouter>)

    expect(wrapper.find('.top-container').exists()).toBe(true);
  })
})
