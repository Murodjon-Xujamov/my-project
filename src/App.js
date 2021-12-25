import React from "react";
import TheLayout from "./views/container/TheLayout";
import { HashRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <HashRouter>
        <React.Suspense fallback="">
          <Switch>
            <Route
              path="/"
              name="Home"
              render={(props) => <TheLayout {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              // render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              // render={(props) => <Page500 {...props} />}
            />
          </Switch>
        </React.Suspense>
      </HashRouter>
    </>
  );
};

export default App;
