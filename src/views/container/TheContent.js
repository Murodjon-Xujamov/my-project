import React, { Suspense, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../../routes";
import "../../assets/scss/_navbar.scss";

const TheContent = () => {
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [fixedNavbarResponse, setFixedNavbarResponse] = useState(false);

  const changeScrollNavbar = () => {
    if (window.scrollY >= 202) {
      setFixedNavbar(true);
    } else {
      setFixedNavbar(false);
    }
  };

  window.addEventListener("scroll", changeScrollNavbar);
  const changeScrollNavbarResponse = () => {
    if (window.scrollY >= 50) {
      setFixedNavbarResponse(true);
    } else {
      setFixedNavbarResponse(false);
    }
  };
  window.addEventListener("scroll", changeScrollNavbarResponse);
  return (
    <main
      className={`main_content_g ${
        fixedNavbarResponse ? "main_content_response" : ""
      } ${fixedNavbar ? "main_content" : ""}`}
    >
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
