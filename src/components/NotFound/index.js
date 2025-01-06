import {
  Container,
  ContentWrapper,
  Heading,
  Paragraph,
  MeetupImage,
} from './styledComponents'

const NotFound = () => (
  <Container>
    <ContentWrapper>
      <Heading>Page Not Found</Heading>
      <Paragraph>
        We are sorry, the page you requested could not be found
      </Paragraph>
      <MeetupImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
        alt="not found"
      />
    </ContentWrapper>
  </Container>
)

export default NotFound
