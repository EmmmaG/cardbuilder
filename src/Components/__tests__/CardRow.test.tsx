import * as React from 'react'
import { shallow } from 'enzyme'
import idObj from 'identity-obj-proxy'

import CardRow, { Props } from '../CardRow'

const baseProps: Props = {
    content: 'Sydney',
	classes: idObj,
}

describe('CardRow', () => {
    const render = (props?: Partial<Props>) => shallow(<CardRow {...{ ...baseProps, ...props }} />)

	it('renders correctly', () => {
		const wrapper = render().dive()
		expect(wrapper).toMatchSnapshot()
    })

    it('renders with correct props', () => {
        const wrapper = render({title: 'Address', inline: true }).dive()
		expect(wrapper).toMatchSnapshot()
    })
})
