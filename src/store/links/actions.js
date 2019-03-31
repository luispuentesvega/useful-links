export const addLink = (languageName, linkTitle, linkUrl) => {
    return {
        type: 'ADD_LINK',
        data: {
            languageName,
            linkTitle,
            linkUrl
        }
    }
}

