// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  Container,
  Heading,
  Para,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = ({reactHooksDescription}) => {
  const [showFullText, setShowFullText] = useState(false)

  const toggleText = () => {
    setShowFullText(prevState => !showFullText)
  }

  const slicedText = reactHooksDescription.slice(0, 170)

  return (
    <AppContainer>
      <Container>
        <Heading>React Hooks</Heading>
        <Para>Hooks are a new addition to React</Para>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>
          {showFullText ? reactHooksDescription : slicedText}
        </Description>
        <Button onClick={toggleText}>
          {showFullText ? 'Read Less' : 'Read More'}
        </Button>
      </Container>
    </AppContainer>
  )
}

export default ReadMore
