import * as React from 'react'
import { shallow } from 'enzyme'
import idObj from 'identity-obj-proxy'

import Divider, { Props } from '../Divider'

const props: Props = {
    title: 'Details',
	classes: idObj,
}

describe('Divider', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Divider {...props} />).dive()
		expect(wrapper).toMatchSnapshot()
	})
})
