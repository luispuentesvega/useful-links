import Button from './Button'
import { shallow } from 'enzyme'

describe('<Button/>', () => {
    it('should render without crashing', () => {
        const mockClick = jest.fn()
        const wrapper = shallow(
            <Button buttonName="save" onClick={mockClick} />,
        )
        expect(wrapper.find('button').length).toBe(1)
        wrapper.find('button').simulate('click')
        expect(mockClick.mock.calls.length).toEqual(1)
    })
})
