import React from 'react'
import PropTypes from 'prop-types'
import JasonBeneducci from './images/JasonBeneducci.jpg'
import '../assets/css/custom.css'


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img src={JasonBeneducci}></img>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Jason Beneducci</h1>
                <p className="personal-slogan">I Build Computer Software</p>
            </div>
        </div>
        <nav>
            <ul>
                <li className="listed-route"><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li className="listed-route"><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li className="listed-route"><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Projects</a></li>
                <li className="listed-route"><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
