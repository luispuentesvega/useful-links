import React from 'react'
import { connect } from 'react-redux'

import * as action from '../store/links/actions'
import Button from './../components/UI/Buttons/Button'
import Input from './../components/UI/Inputs/Input'
import Select from './../components/UI/Selects/Select'

class Form extends React.Component {
    state = { linkTitle: '', linkUrl: '', languageName: '' }

    onChangeLinkInput = e => {
        this.setState({ linkUrl: e.target.value })
    }

    onChangeTitleInput = e => {
        this.setState({ linkTitle: e.target.value })
    }

    onChangeSelect = e => {
        this.setState({ languageName: e.target.value })
    }

    onFormSubmit = e => {
        e.preventDefault()
        this.props.addLinkToLanguageRedux(
            this.state.languageName,
            this.state.linkTitle,
            this.state.linkUrl
        )
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>Useful Links</h1>
                <Select
                    options={this.props.languages}
                    onChange={this.onChangeSelect}
                />
                <Input
                    type="text"
                    placeholder="Link"
                    value={this.state.link}
                    onChange={this.onChangeLinkInput}
                />
                <Input
                    type="text"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.onChangeTitleInput}
                />
                <Button buttonName="Add" type="submit" />
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        languages: state.links.map(languageObj => {
            return languageObj.languageName
        }),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addLinkToLanguageRedux: (languageName, linkTitle, linkUrl) =>
            dispatch(action.addLink(languageName, linkTitle, linkUrl)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)
