import PageFavoriteMusics from 'pages/PageFavoriteMusics'
import PageMusicCharts from 'pages/PageMusicCharts'
import PageMusicSearch from 'pages/PageMusicSearch'
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

      <Router>
        <Switch>
          <Route exact path="/" component={PageFavoriteMusics} />
          <Route exact path="/charts" component={PageMusicCharts} />
          <Route exact path="/search" component={PageMusicSearch} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
