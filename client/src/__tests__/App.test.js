import React from 'react';
import App from '../App';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Root from '../Root';
import Home from '../Home';
import EligiblePage from '.././Component/pages/EligiblePage';
import NotEligiblePage from '.././Component/pages/NotEligiblePage';


describe('router test', () => {

    let wrapper;

it('Home router Test',() => {

    wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
         <Root>
          <Home/>
          </Root>
        </MemoryRouter>
      );
      expect(wrapper.find(Home)).toHaveLength(1);
      expect(wrapper.find(EligiblePage)).toHaveLength(0);
      expect(wrapper.find(NotEligiblePage)).toHaveLength(0); 

      wrapper.unmount();
})


it('Eligible router Test',() => {

    wrapper = mount(
        <MemoryRouter initialEntries={[ '/pages/Eligible' ]}>
         <Root>
          <EligiblePage/>
          </Root>
        </MemoryRouter>
      );


      expect(wrapper.find(Home)).toHaveLength(0);
      expect(wrapper.find(EligiblePage)).toHaveLength(1);
      expect(wrapper.find(NotEligiblePage)).toHaveLength(0); 

      wrapper.unmount();
})

it('NotEligiblePage router Test',() => {
  wrapper = mount(
      <MemoryRouter initialEntries={[ '/pages/NotEligible' ]}>
       <Root>
        <NotEligiblePage/>
        </Root>
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(EligiblePage)).toHaveLength(0);
    expect(wrapper.find(NotEligiblePage)).toHaveLength(1);   
    wrapper.unmount();
})

it('notfound link ',() => {
    wrapper = mount(
        <MemoryRouter initialEntries={[ '/unknown' ]}>
         <Root>
          <App/>
          </Root>
        </MemoryRouter>
      );
      expect(wrapper.find(Home)).toHaveLength(0);
      expect(wrapper.find(EligiblePage)).toHaveLength(0);
      expect(wrapper.find(NotEligiblePage)).toHaveLength(0);     
      wrapper.unmount();
})

});
