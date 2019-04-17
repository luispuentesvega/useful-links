import InputError from './InputError'
import { shallow } from 'enzyme'

describe('<InputError/>', () => {
    it('should render without crashing', () => {
        const defaultProps = {
            isValidating: true,
            type: 'text',
            value: '',
        }

        const wrapper = shallow(
            <InputError {...defaultProps}>
                <span>Opss..</span>
            </InputError>,
        )

        expect(wrapper.find('span').length).toBe(1)
    })
})
