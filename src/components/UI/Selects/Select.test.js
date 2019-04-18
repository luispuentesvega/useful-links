import Select from './Select'
import { shallow } from 'enzyme'

describe('<Select/>', () => {
    it('should render without crashing', function() {
        const options = [{ id: 1, name: 'PHP' }]
        const wrapper = shallow(
            <Select default="0" name="topics" options={options} />,
        )
        expect(wrapper.find({ name: 'topics' }).length).toBe(1)
      expect(wrapper.find('option').length).toBe(2)
    })
})
