import {useLocation, Link} from 'react-router-dom'
import {
  Container,
  NavBar,
  Logo,
  ContentWrapper,
  Heading,
  Paragraph,
  RegisterButton,
  MeetupImage,
} from './styledComponents'

const Home = () => {
  const location = useLocation()
  const {name, topic} = location.state || {}

  return (
    <Container>
      <NavBar>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
      </NavBar>
      <ContentWrapper>
        {name && topic ? (
          <>
            <Heading>Hello {name}</Heading>
            <Paragraph>Welcome to {topic}</Paragraph>
          </>
        ) : (
          <>
            <Heading>Welcome to Meetup</Heading>
            <Paragraph>Please register for the topic</Paragraph>
            <Link to="/register">
              <RegisterButton>Register</RegisterButton>
            </Link>
            <MeetupImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </>
        )}
      </ContentWrapper>
    </Container>
  )
}

export default Home
