import * as React from 'react'
import { shallow } from 'enzyme'
import idObj from 'identity-obj-proxy'
import Button from '../../Components/Button'
import TextInput from '../../Components/TextInput'
import BuilderForm, { Props } from '../BuilderForm'

const props: Props = {
    onFormChange: jest.fn(),
    onAvatarSelected: jest.fn(),
	classes: idObj,
}

describe('BuilderForm', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<BuilderForm {...props} />).dive()
		expect(wrapper).toMatchSnapshot()
    })

    it('should update state with correct input value', () => {
		const wrapper = shallow(<BuilderForm {...props} />).dive()

        const textInput = wrapper.find(TextInput).findWhere(t => t.prop('title') === 'GIVEN NAME')
        const value = 'jon'
        textInput.prop('onChange')(value)

        expect(wrapper.state('formValue')).toEqual(expect.objectContaining({ givenName: value }))
    })

    it('should not open alert dialog if email is valid', () => {
        const wrapper = shallow(<BuilderForm {...props} />).dive()
        const emailInput = wrapper.find(TextInput).findWhere(t => t.prop('title') === 'EMAIL')

        const validEmail = 'jon@gmail.com'
        emailInput.prop('onChange')(validEmail)

        const createButton = wrapper.find(Button).findWhere(b => b.prop('buttonContent') === 'Create hCard')

        createButton.simulate('click')

        expect(wrapper.state('isOpen')).toBeFalsy()
    })

    it('should open alert dialog if email is not valid', () => {
        const wrapper = shallow(<BuilderForm {...props} />).dive()
        const emailInput = wrapper.find(TextInput).findWhere(t => t.prop('title') === 'EMAIL')

        const invalidEmail = 'jon@A'
        emailInput.prop('onChange')(invalidEmail)

        const createButton = wrapper.find(Button).findWhere(b => b.prop('buttonContent') === 'Create hCard')

        createButton.simulate('click')

        expect(wrapper.state('isOpen')).toBeTruthy()
    })
})
