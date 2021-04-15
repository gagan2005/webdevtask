import React from 'react';
import { shallow ,mount } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import {gql} from '@apollo/client';

import Contact from '../Contact.js';
import Main from '../Main.js';
import {mocks , submitquery} from "../mocks.js"

describe('Main Component', () => {

    it('Contact component should be visible when clicking on Contact Link', 
    () =>
     {    
      
      const component = mount(<MockedProvider mocks={mocks}>
        
        < Main />
        </MockedProvider>);
      component.find(".Contact").simulate('click');
      expect(component.find(Main)).toMatchSnapshot();
    });
  
    it('Should be closed when clicking on cancelIcon', 
    () =>
     {    
      
        const component = mount(<MockedProvider mocks={mocks}>
        
          < Main />
        </MockedProvider>);
        component.find(".Contact").simulate('click');
        component.find(".cancelicon").simulate('click');
        // expect(component).toMatchSnapshot();
        // const component = mount(< Main disp={false} />);
       
        expect(component.find(Main)).toMatchSnapshot();
    });
  });
  
  
    
  // describe('Main Component', () => {
  
  //     it('Contact component should be visible when clicking on Contact Link', 
  //     () =>
  //      {    
        
  //       const component = mount(< Main disp={false} />);
  //       component.find(".Contact").simulate('click');
  //       expect(component).toMatchSnapshot();
  //     });
    
  //     it('Should be closed when clicking on cancelIcon', 
  //     () =>
  //      {    
        
  //         const component = mount(< Main disp={false} />);
  //         component.find(".Contact").simulate('click');
  //         component.find(".cancelicon").simulate('click');
  //         // expect(component).toMatchSnapshot();
  //         // const component = mount(< Main disp={false} />);
         
  //         expect(component).toMatchSnapshot();
  //     });
  //   });
  