import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('App', () => {
  it('should have the `th` "Items"', () => {
    const wrapper = shallow(
      <App />
    );
    expect(
      wrapper.contains(<th>Items</th>)
    ).toBe(true);
  });


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
      const button = wrapper.find('button').first();   // il find ti da la possibilità di cercare gli elementi per proprietà
      expect(
        button.props().disabled
      ).toBe(true);
    });
  });
  describe('App', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(
        <App />
      );
    });
  
    it('should have the `th` "Items"', () => {
      expect(
        wrapper.contains(<th>Items</th>)
      ).toBe(true);
    });
  
    it('should have a `button` element', () => {
      expect(
        wrapper.containsMatchingElement(
          <button>Add item</button>
        )
      ).toBe(true);
    });
  
    it('should have an `input` element', () => {
      expect(
        wrapper.containsMatchingElement(
          <input />
        )
      ).toBe(true);
    });
  
    it('`button` should be disabled', () => {
      const button = wrapper.find('button').first();
      expect(
        button.props().disabled
      ).toBe(true);
    });
  
    describe('the user populates the input', () => {
      const item = 'Vancouver';
  
      beforeEach(() => {
        const input = wrapper.find('input').first();
        input.simulate('change', {
          target: { value: item }
        })
      });
  
      it('should update the state property `item`', () => {
        expect(
          wrapper.state().item
        ).toEqual(item);
      });
  
      it('should enable `button`', () => {
        const button = wrapper.find('button').first();
        expect(
          button.props().disabled
        ).toBe(false);
      });
    });
  });
  
});

