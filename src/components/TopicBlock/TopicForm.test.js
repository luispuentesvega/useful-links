import TopicForm from './TopicForm'
import { shallow } from 'enzyme'
import Button from '../UI/Buttons/Button'
import Select from '../UI/Selects/Select'

describe('<TopicForm/>', () => {
    it('should render without crashing', function() {
        const mockSubmit = jest.fn()
        const mockChangeInput = jest.fn()
        const defaultProps = {
            isValidating: false,
            onSubmit: mockSubmit,
            onChangeNameInput: mockChangeInput,
            name: 'PHP',
            buttonName: 'SAVE',
        }
        const wrapper = shallow(<TopicForm {...defaultProps} />)

        expect(wrapper.find('.child').length).toEqual(1)
        expect(wrapper.find('form').length).toEqual(1)
        expect(wrapper.find(Button).length).toEqual(1)
        expect(wrapper.find({ value: 'PHP' }).length).toBe(1)
    })
})
