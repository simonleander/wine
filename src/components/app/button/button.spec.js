'use strict';

import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import styles from './button.css';
import Button from './Button';

chai.use(chaiEnzyme());

describe('The BUTTON component', () => { 

	it('Should provide a fallback, once the button is clicked', () => {

		let called = false;

		const callback = () => called = true;  

	    const wrapper = shallow(

	    	<Button 
	    		onClick={callback}
	    	/>

	    );

	    wrapper.find('button').simulate('click');

	    expect(called).to.be.true;

	});

	it('Should set the value on the button', () => {

	    const wrapper = shallow(

	    	<Button 
	    		value={'some value'}
	    	/>

	    );

	    expect(wrapper.find('button').text()).to.equal('some value');

	});

});