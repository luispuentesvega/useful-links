import Button from './Button'
import { shallow } from 'enzyme'

describe('<Button/>', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<Button buttonName="save" />)
        expect(wrapper.find('button').length).toBe(1)
    })
})
