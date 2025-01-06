import {Component} from 'react'

class Register extends Component {
  state = {
    name: '',
    topic: '',
    errorMsg: '',
  }

  handleInputChange = event => {
    const {id, value} = event.target
    this.setState({[id]: value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const {name, topic} = this.state
    const {history} = this.props // Access history from props

    if (name.trim() === '' || topic.trim() === '') {
      this.setState({errorMsg: 'Please fill out all fields.'})
    } else {
      this.setState({errorMsg: ''})
      // Push to Home with state containing name and topic
      history.push('/', {name, topic})
    }
  }

  render() {
    const {name, topic, errorMsg} = this.state
    const {topicsList} = this.props

    return (
      <div>
        <nav>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
        </nav>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          <form onSubmit={this.handleSubmit}>
            <h1>Let us join</h1>
            <label htmlFor="name">NAME</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={this.handleInputChange}
            />
            <label htmlFor="topic">TOPICS</label>
            <select id="topic" value={topic} onChange={this.handleInputChange}>
              <option value="">Select Topic</option>
              {topicsList.map(eachTopic => (
                <option value={eachTopic.displayText} key={eachTopic.id}>
                  {eachTopic.displayText}
                </option>
              ))}
            </select>
            <button type="submit">Register Now</button>
            {errorMsg && <p>{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Register
