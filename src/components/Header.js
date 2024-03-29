import React from 'react'
import PropTypes from 'prop-types'
import JasonBeneducci from '../components/JasonBeneducci.jpg'
import '../assets/css/custom.css'


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        {/* <div className="logo"> */}
            <img className="logo"src={JasonBeneducci} alt=""></img>
        {/* </div> */}
        <div className="content">
            <div className="inner">
                <h1>Jason Beneducci</h1>
                <p className="personal-slogan">I Build Computer Software</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><button className="route-button" onClick={() => {props.onOpenArticle('intro')}}>Intro</button></li>
                <li><button className="route-button" onClick={() => { props.onOpenArticle('contact') }}>Training</button></li>
                <li><button className="route-button" onClick={() => {props.onOpenArticle('about')}}>Projects</button></li>
                <li><button className="route-button" onClick={() => {props.onOpenArticle('work')}}>Work</button></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
