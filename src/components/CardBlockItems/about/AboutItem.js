import React from 'react' 
import CardBlock from '../../UI/CardBlocks/CardBlock'

const AboutItem = (props) => {

    const title = "Developed By"
    const firstSource = "/img/github.png"
    const secondSource = "/img/linkedin.png"
    const contents = ["Programmer User 1", "Programmer User 2"]

    return (
        <CardBlock title={title} firstSource={firstSource} secondSource={secondSource} contents={contents} />
    )
}

export default AboutItem