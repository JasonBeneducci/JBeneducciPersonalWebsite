import PropTypes from 'prop-types'
import React from 'react'
import bali from '../images/bali.jpg'
import cornell from '../images/cornell.png'
import prosight from '../images/prosight.png'
import giants from '../images/giants.png'
import nz from '../images/new-zealand.jpg'
import pic03 from '../images/pic03.jpg'
import '../assets/css/custom.css'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="route-title">Introduction</h2>
          <span className="image main">
            <img src={bali} alt="Taken in Bali on a sunrise hike" />
          </span>
          <p className="paragraph">My name is Jason Beneducci and I am a Software Engineer interested in continuing to push the bounds of possibility. 
            In May of 2019, I graduated from the University of Michigan in Ann Arbor where I studied Economics and Entrepreneurship. While applying to jobs, I found it impossible to fine excitement from the type of roles I was applying to. As a result, I made the decision to pursue something I was much more deeply interested in.
            I enrolled in Flatiron School to get an education in Software Engineering and have never looked back.
          </p>
          <p className="paragraph">
            When I am not spending time exploring a new language or working on personal projects, I am probably playing golf, scuba diving, or watching a football game.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="route-title">Work</h2>
          <div className="images-container">
            <img src={giants} onClick={() => this.props.onOpenArticle('nyg')} className="work-logo" alt="" />
            <img src={cornell} onClick={() => this.props.onOpenArticle('cornell')} className="work-logo" alt="" />
            <img src={prosight} onClick={() => this.props.onOpenArticle('prosight')} className="work-logo" alt="" />
          </div>
          {/* <p>
            New York Giants .
          </p>
          <p>
            Cornell Paragraph goes here.
          </p>
          <p>
            ProSight Paragraph goes here.
          </p> */}
          {close}
        </article>

        <article
          id="nyg"
          className={`${this.props.article === 'nyg' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="route-title">New York Giants</h2>
          <div className="images-container">
            <img src={giants} className="work-logo" alt="" />
          </div>
          <p>
            New York Giants.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={nz} alt="" />
          </span>
          <p>
            Paragraph regarding about goes here.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://medium.com/@jasonbeneducci"
                className="icon fa-medium"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/jason.beneducci" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JasonBeneducci"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
