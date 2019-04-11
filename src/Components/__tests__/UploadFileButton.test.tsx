import * as React from 'react'
import { shallow } from 'enzyme'
import idObj from 'identity-obj-proxy'

import UploadFileButton, { Props } from '../UploadFileButton'

const props: Props = {
    onFileLoaded: jest.fn(),
	classes: idObj,
}

describe('UploadFileButton', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<UploadFileButton {...props} />).dive()
		expect(wrapper).toMatchSnapshot()
	})
})
