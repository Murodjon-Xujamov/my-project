import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../../routes";

const TheContent = () => {
  return (
    <main className="c-main p-0 main_content">
      <Suspense fallback="">
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <div>
                      <route.component {...props} />
                    </div>
                  )}
                />
              )
            );
          })}
          <Redirect from="/" to="/home" />
        </Switch>
      </Suspense>
    </main>
  );
};

export default TheContent;
