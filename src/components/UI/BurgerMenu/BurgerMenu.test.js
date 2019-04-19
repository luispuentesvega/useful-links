import BurgerMenu from './BurgerMenu'
import { shallow } from 'enzyme'

describe('<BurgerMenu/>', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<BurgerMenu />)
        expect(wrapper.hasClass('menu_icon')).toBeTruthy()

        const children = wrapper.find('.menu_icon').children()
        expect(children.length).toEqual(3)
    })
})
