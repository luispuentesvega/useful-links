import Select from './Select'
import { shallow } from 'enzyme'

describe('<Select/>', () => {
    let wrapper
    beforeEach(() => {
        const options = [{ id: 1, name: 'PHP' }]
        wrapper = shallow(
            <Select default="0" name="topics" options={options} />,
        )
    })

    it('should render without crashing', function() {
        expect(wrapper.find({ name: 'topics' }).length).toBe(1)
    })

    it('should render 2 options', function() {
        expect(wrapper.find('option').length).toBe(2)
    })
})
