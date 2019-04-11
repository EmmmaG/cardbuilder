import * as React from 'react'
import { shallow } from 'enzyme'
import idObj from 'identity-obj-proxy'

import CardBuilder, { Props } from '../CardBuilder'

const props: Props = {
	classes: idObj,
}

describe('CardBuilder', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<CardBuilder {...props} />).dive()
		expect(wrapper).toMatchSnapshot()
    })
})
