import React from 'react';
import { shallow ,mount } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import {gql} from '@apollo/client';

import Contact from '../Contact.js';
import Main from '../Main.js';
import {mocks , submitquery} from "../mocks.js"

describe('Contact Component', () => {

  it('Should be not visible when disp=false', 
  () =>
   {    
    
    const component = mount(
      <MockedProvider mocks={mocks}>
    < Contact disp={false} />
    </MockedProvider>);
  
    expect(component.find(Contact)).toMatchSnapshot();
  });

  it('Should be  visible when disp=True', 
  () =>
   {    
    
    const component = mount(<MockedProvider mocks={mocks}>
     < Contact disp={true} />
     </MockedProvider>);
  
    expect(component.find(Contact)).toMatchSnapshot();
  });
});

