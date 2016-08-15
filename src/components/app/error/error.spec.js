'use strict';

import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Error from './Error';

chai.use(chaiEnzyme());

describe('The ERROR component', () => { 

	it('Should set the value on the button', () => {

	    const wrapper = shallow(

	    	<Error 
	    		value={'some value'}
	    	/>

	    );

	    expect(wrapper.find('div').text()).to.equal('some value');

	});

});