import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {
  Container,
  NavBar,
  Logo,
  ContentWrapper,
  Heading,
  InputField,
  SelectField,
  RegisterButton,
  ErrorMessage,
  FormWrapper,
} from './styledComponents'

const Register = ({topicsList}) => {
  const history = useHistory()
  const [name, setName] = useState('')
  const [topic, setTopic] = useState(topicsList[0]?.id || '')
  const [errorMsg, setErrorMsg] = useState('')

  const handleInputChange = event => {
    const {id, value} = event.target
    if (id === 'name') {
      setName(value)
    } else if (id === 'topic') {
      setTopic(value)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (name.trim() === '' || topic.trim() === '') {
      setErrorMsg('Please enter your name and select a topic')
    } else {
      setErrorMsg('')
      // Find the topic's displayText
      const selectedTopic =
        topicsList.find(eachTopic => eachTopic.id === topic)?.displayText || ''
      // Navigate with the name and topic value
      history.replace('/', {name, topic: selectedTopic})
    }
  }

  return (
    <Container>
      <NavBar>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
      </NavBar>
      <img
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
        alt="website register"
      />
      <ContentWrapper>
        <FormWrapper onSubmit={handleSubmit}>
          <Heading>Let us join</Heading>
          <label htmlFor="name">NAME</label>
          <InputField
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={handleInputChange}
          />
          <label htmlFor="topic">TOPICS</label>
          <SelectField id="topic" value={topic} onChange={handleInputChange}>
            {topicsList.map(eachTopic => (
              <option value={eachTopic.id} key={eachTopic.id}>
                {eachTopic.displayText}
              </option>
            ))}
          </SelectField>
          <RegisterButton type="submit">Register Now</RegisterButton>
          {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </FormWrapper>
      </ContentWrapper>
    </Container>
  )
}

export default Register
