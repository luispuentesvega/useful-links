import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import LinkForm from './LinkForm'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Home Component', () => {
    test('renders', () => {
        const wrapper = shallow(<LinkForm />)

        expect(wrapper.exists()).toBe(true)
    })

    test('Must have 3 inputs', () => {
        const props = {
            buttonName: 'CREATE',
        }
        const wrapper = mount(<LinkForm {...props} />)
        console.log('HERE::', wrapper.debug())

        expect(wrapper.find("input")).toHaveLength(2)
    })

    test('Must have 1 select', () => {
        const wrapped = mount(<LinkForm/>)

        expect(wrapped.find('select')).toHaveLength(1)
    })



})
