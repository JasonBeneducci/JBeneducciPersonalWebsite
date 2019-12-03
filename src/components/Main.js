import PropTypes from 'prop-types'
import React from 'react'
import Bali from './Bali.jpg'
import cornell from './cornell.png'
import prosight from './prosight.png'
import giants from './giants.png'
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
            <img src={Bali} alt="Taken in Bali on a sunrise hike" />
          </span>
          <center><p className="paragraph">My name is Jason Beneducci and I am a Software Engineer interested in contributing to forward thinking projects that push the bounds of possibility.</p></center>
          <center><p className="paragraph">In May of 2019, I graduated from the University of Michigan in Ann Arbor where I studied Economics and Entrepreneurship. 
          While applying to jobs, I found it impossible to find excitement in the type of roles I was applying to, so I decided to make a change. I have always been obseesed with finding a way to contribute to the forward progress of our world.
          After independently learning Ruby, I fell in love with the unique, fulfilling challenges that coding provides and I chose to enroll in Flatiron School. 
          At Flatiron I developed my skills in Ruby, Ruby on Rails, Javascript, React-Redux, CSS, HTML, API Integration and how to add value to a team in a tech setting.
          </p></center>
          <center><p className="paragraph">
            I enjoy playing various sports including Hockey, Soccer, Basketball, Golf. Usually, once a year I take a scuba diving trip to just explore the underwater world that humans rarely get to see. 
            To date, I have been on both day and night dives, of depths ranging from 0 feet to 180 feet, in eight different countries and have had the priviledge to dive the Great Barrier Reef. 
            When I am not coding, playing a sport or scuba diving, I am a proud Michigan Wolverines athletics fan, which means I am either elated or devastated, never in between. 
          </p></center>
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
          <center><img src={giants} className="work-logo" alt="" /></center>
            <div className="paragraph-title">(2018) - Intern at the New York Football Giants.</div>
              <div className="paragraph">+ Assisted in the implementation of new mobile ticketing application</div>
              <div className="paragraph">+ Acted as a liaison between New York Giants Organization and fans to increase community engagement</div>
          <center><img src={cornell} className="work-logo" alt="" /></center>
            <div className="paragraph-title">(2017) - Analyst Intern at Cornell Capital</div>
              <div className="paragraph">+ Utilized Bloomberg Terminal to conduct valuation analysis</div>
              <div className="paragraph">+ Contributed a creative idea to penetrate new customer segment (college students)</div>
              <div className="paragraph">+ Streamlined two years of transactions records from Excel into a more efficient means of tracking finances</div>
          <center><img src={prosight} className="work-logo" alt="" /></center>
            <div className="paragraph-title">(2016) - Rotational Intern at ProSight Specialty</div>
              <div className="paragraph">+ Provided real-time analyst insight regarding potential transactions coming through on the Lloyd’s of London trading floor</div>
              <div className="paragraph">+ Headed finance project to reconcile profit commissions using an excel data sorting method which helped save the company more than a million dollars.</div>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="route-title">Projects</h2>
          <div className="paragraph-title">PayDirt Picks
            <a href="https://github.com/JasonBeneducci/PaydirtPicks" className="icon fa-github"> </a>
            <a href="https://www.youtube.com/watch?v=VFnowHg99tk&t=79s" className="icon fa-youtube"> </a>
          </div>
          <div className="centered-text">
            NFL Pick'em Application that allows users to compete for cash prizes by picking a weekly slate of NFL games.
          </div>
          <ul>
            <li>Javascript</li>
            <li>React-Redux</li>
            <li>Thunk Middleware</li>
            <li>CSS</li>
            <li>Ruby on Rails</li>
            <li>API Integration</li>
          </ul>

          <div className="paragraph-title">Hangman Game
            <a href="https://github.com/JasonBeneducci/Hangman-game" className="icon fa-github"> </a>
            <a href="https://youtu.be/Eg-NDxGsooA" className="icon fa-youtube"> </a>
          </div>
          <div className="centered-text">
            Hangman Game that enables users to keep their brain sharp in a few different categories of phrases
          </div>
          <ul>
            <li>Javascript</li>
            <li>Ruby on Rails</li>
            <li>Bcrypt Gem</li>
            <li>API Integration</li>
            <li>CSS</li>
          </ul>

          <div className="paragraph-title">Refrigernation
            <a href="https://github.com/JasonBeneducci/Refrigernation" className="icon fa-github"> </a>
            <a href="https://youtu.be/EbYYpQ0_W-w" className="icon fa-youtube"> </a>
          </div>
          <div className="centered-text">
            Virtual Refrigerator Application that allows users to spend less time worrying about the contents of their refrigerator and more time doing the things they enjoy most
          </div>
          <ul>
            <li>CSS</li>
            <li>Ruby on Rails</li>
            <li>API Integration</li>
            <li>ActiveRecord</li>
            <li>SQL</li>
          </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="route-title">Contact</h2>
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
                <span className="label">Medium</span>
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
