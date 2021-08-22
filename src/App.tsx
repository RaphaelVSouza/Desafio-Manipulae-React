import Container from 'components/Container'
import PageMusicCharts from 'pages/PageMusicCharts'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import ResetStyles from 'styles/reset'
import theme from 'styles/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyles />
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={PageMusicCharts} />
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  )
}
