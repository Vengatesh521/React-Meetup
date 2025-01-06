import {Switch, Redirect, Route} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

const topicsList = [
  {id: 'ARTS_AND_CULTURE', displayText: 'Arts and Culture'},
  {id: 'CAREER_AND_BUSINESS', displayText: 'Career and Business'},
  {id: 'EDUCATION_AND_LEARNING', displayText: 'Education and Learning'},
  {id: 'FASHION_AND_BEAUTY', displayText: 'Fashion and Beauty'},
  {id: 'GAMES', displayText: 'Games'},
]

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      exact
      path="/register"
      render={props => <Register {...props} topicsList={topicsList} />}
    />
    <Route exact path="/bad-path" component={NotFound} />
    <Redirect to="/bad-path" />
  </Switch>
)

export default App
