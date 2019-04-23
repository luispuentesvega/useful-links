import React from 'react'
import { shallow } from 'enzyme'
import Notification from './Notification'

describe('<Notification/>', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(
            <Notification>
                <p>If you want to have your own links</p>
            </Notification>,
        )
    })

    it('should display one <p>', () => {
        expect(wrapper.find('p')).toHaveLength(1)
    })

    it('should has a notificacion class', () => {
        expect(wrapper.find('.notification')).toHaveLength(1)
    })
})
