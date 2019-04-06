import React from 'react'

const BurgerMenu = props => {
    const classes = ['menu_icon']

    if (props.show) {
        classes.push('change')
    }

    return (
        <div className={classes.join(' ')} onClick={props.click}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
        </div>
    )
}

export default BurgerMenu
