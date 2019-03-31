// languageObj = {
//     languageName: 'php',
//     mappingTitleandLink: {
//         linkitle: linkUrl
//     }
// }
const defaultState = [
    {
        languageName: 'php',
        mappingTitleandLink: {
            'phpHomepage': 'www.php.co.th'
        }
    },
    {
        languageName: 'javascript',
        mappingTitleandLink: {
            'javascriptHomePage': 'www.javascript.co.th'
        }
    }
]

const LinkReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_LINK':
            return state.map(languageObj => {
                if (languageObj.languageName === action.data.languageName) {
                    return {
                        ...languageObj,
                        mappingTitleandLink: {
                            ...languageObj.mappingTitleandLink,
                            [action.data.linkTitle]: action.data.linkUrl
                        }
                    }
                }
                return languageObj
            })
        default:
            return state
    }
}

export default LinkReducer