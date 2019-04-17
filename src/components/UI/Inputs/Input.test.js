import Input from './Input'
import { shallow } from 'enzyme'

describe('<Input/>', () => {
    it('should render without crashing', () => {
        const defaulProps = {
            type: 'text',
            value: '',
            placeholder: 'name',
        }
        const wrapper = shallow(<Input {...defaulProps} />)
        expect(wrapper.find('input').length).toBe(1)
        expect(wrapper.find({ placeholder: 'name' }).length).toBe(1)
    })
})
