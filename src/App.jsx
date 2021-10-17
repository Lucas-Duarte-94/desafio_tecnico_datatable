import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AppRoutes from "./routes"
import {DataContextProvider} from './contexts/data.jsx'

const App = () => {
  return (
    <Router>
      <DataContextProvider>
        <Switch>

          {AppRoutes.map((route, key) => {
          const { component, path } = route;
          const Component = component;

          return (
            <Route
              exact={true}
              path={path}
              key={key}
              render={Component}
            />
          )
        })}
        </Switch>
      </DataContextProvider>
    </Router>
  )
}

export default App;
