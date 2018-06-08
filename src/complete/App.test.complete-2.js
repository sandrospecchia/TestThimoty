/* leave first line blank for cq */
import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should have the `th` "Items"', () => {
    const wrapper = shallow(
      <App />
    );
    expect(
      wrapper.contains(<th>Items</th>)   // contains ricerca direttamente ed esattamente quello che c'è scritto in questo caso nel dom deve trovarsi <th>Items</th>
    ).toBe(true);
  });

  it('should have a `button` element', () => {
    const wrapper = shallow(
      <App />
    );
    expect(
      wrapper.containsMatchingElement(   // containsMatchingElement ti fa la ricerca in base a una criterio non esatto come il contains 
        <button>Add item</button>       // ad esempio se andiamo nel DOM vediamo che ha un sacco di proprietà tra cui la className.
      )
    ).toBe(true);
  });

  it('should have an `input` element', () => {
    const wrapper = shallow(
      <App />
    );
    expect(
      wrapper.containsMatchingElement( // containsMatchingElement ti fa la ricerca in base a una criterio non esatto come il contains
        <input />
      )
    ).toBe(true);
  });

  it('`button` should be disabled', () => {
    const wrapper = shallow(
      <App />
    );
    const button = wrapper.find('button').first();   // il find ti da la possibilità di cercare gli elementi per stile
    expect(
      button.props().disabled
    ).toBe(true);
  });
});
