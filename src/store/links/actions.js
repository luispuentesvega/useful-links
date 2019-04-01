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

export const addTopic = (topicName) => {
    return {
        type: 'ADD_TOPIC',
        data: {
            topicName
        }
    }
}

