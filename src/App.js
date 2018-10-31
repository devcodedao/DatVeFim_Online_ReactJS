import React, { Component, Fragment } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import routes from "./routes";
import HeaderActions from './containers/HeaderActions/HeaderActions'
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Fragment>
          {/* Header */}
          {/* <Header /> */}
          <HeaderActions />
          {/* Main-content */}
          {this.showContentMenus(routes)}
          {/* Footer */}
          <Footer />
        </Fragment>
      </HashRouter>
    );
  }
  showContentMenus = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;
