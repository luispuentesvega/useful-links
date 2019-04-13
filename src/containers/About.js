import React, { Component } from 'react'

const developers = [
    {
        name: 'Luis',
        url: 'http://luispuentes.me',
    },
]

const containerStyle = {
    fontSize: '2rem',
    textAlign: 'center',
}

const titleStyle = {
    fontSize: '4rem',
    textAlign: 'center',
    display: 'block',
}

class About extends Component {
    render() {
        return (
            <div style={containerStyle}>
                <h2 style={titleStyle}>About</h2>
                <p>Web app for storing useful links separated by topic</p>
                <p>
                    If you want to have your own links, you should register or
                    login using Gmail
                </p>
                <p>
                    Developed by : <br />
                    {developers.map(developer => (
                        <a href={developer.url}>{developer.name}</a>
                    ))}
                </p>
            </div>
        )
    }
}

export default About
