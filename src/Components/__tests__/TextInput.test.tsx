import * as React from 'react'
import { shallow } from 'enzyme'
import idObj from 'identity-obj-proxy'
import TextField from '@material-ui/core/TextField'

import TextInput, { Props } from '../TextInput'

const props: Props = {
    title: 'Details',
    onChange: jest.fn(),
	classes: idObj,
}

describe('TextInput', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<TextInput {...props} />).dive()
		expect(wrapper).toMatchSnapshot()
    })

    it('updates with new value', () => {
        const wrapper = shallow(<TextInput {...props} />).dive()
        const textField = wrapper.find(TextField)
        const newValue = 'new'
        const event = { target: {value: newValue}} as any

        textField.prop('onChange')!(event)

        expect(wrapper.state('value')).toEqual(newValue)
        expect(props.onChange).toHaveBeenCalledWith(newValue)
    })
})
