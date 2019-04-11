import * as React from 'react'
import { shallow } from 'enzyme'
import idObj from 'identity-obj-proxy'

import PreviewCard, { Props } from '../PreviewCard'

const props: Props = {
    contents: {
        givenName: 'Jon',
        surname: '',
        email: 'Jon@somewhere.com',
        phone: '012345678',
        houseName: '',
        street: '',
        suburb: '',
        state: 'NSW',
        postcode: '1000',
        country: 'Aus',
    },
	classes: idObj,
}

describe('PreviewCard', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<PreviewCard {...props} />).dive()
		expect(wrapper).toMatchSnapshot()
    })
})
