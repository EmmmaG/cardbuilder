import * as React from 'react'
import { shallow } from 'enzyme'
import idObj from 'identity-obj-proxy'

import Button, { Props } from '../Button'

const props: Props = {
    buttonContent: 'button test',
    onClick: jest.fn(),
	classes: idObj,
}

describe('Button', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Button {...props} />)
		expect(wrapper).toMatchSnapshot()
	})
})
