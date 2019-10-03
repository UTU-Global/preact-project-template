import { h, JSX } from "preact";
import { useState } from "preact/hooks";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Home from "../routes/home";
import Profile from "../routes/profile";
import Header from "./header";

if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require("preact/debug");
}

export default (): JSX.Element => {
  const [currentUrl, setCurrentUrl] = useState('/');

  const handleRoute = (e: RouterOnChangeArgs) => {
    console.log(e.url, currentUrl);
    setCurrentUrl(e.url);
  };

  return (
    <div id="app">
      <Header />
      <Router onChange={handleRoute}>
        <Route path="/" component={Home} />
        <Route path="/profile/" component={Profile} user="me" />
        <Route path="/profile/:user" component={Profile} />
      </Router>
    </div>
  );
}
