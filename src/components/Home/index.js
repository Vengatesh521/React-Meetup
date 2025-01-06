import {useLocation, useHistory} from 'react-router-dom'

const Home = ({name, topic}) => {
  const location = useLocation()
  const history = useHistory()

  const {name: locationName, topic: locationTopic} = location.state || {}
  const displayName = locationName || name
  const displayTopic = locationTopic || topic

  return (
    <div>
      <nav>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
      </nav>
      <div>
        {displayName && displayTopic ? (
          <>
            <h1>Hello {displayName}</h1>
            <p>Welcome to {displayTopic}</p>
          </>
        ) : (
          <>
            <h1>Welcome to Meetup</h1>
            <p>Please register for the topic</p>
            <button
              onClick={() => {
                history.push('/register')
              }}
              type="button"
            >
              Register
            </button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Home
