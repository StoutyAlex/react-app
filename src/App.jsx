import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routes';

const App = () => (
  <Router>
    <div>
      <Switch>
        {routes.map((route, index) => <Route key={index} {...route} />)}
      </Switch>
    </div>
  </Router>
);

export default App;
