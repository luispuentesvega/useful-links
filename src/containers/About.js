import React, { Component } from 'react'

const developers = [
    {
        name: 'PracticeG',
        url: 'https://github.com/PracticeG',
    },
    {
        name: 'Luis',
        url: 'http://luispuentes.me',
    },
]

const containerStyle = {
    fontSize: '2rem',
    textAlign: 'center',
    padding: '0 2rem',
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
                <div>
                    Developed by : <br />
                    {developers.map(developer => {
                        return (
                            <div key={developer.name + 1}>
                                <a target="_blank" href={developer.url}>
                                    {developer.name}
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default About
