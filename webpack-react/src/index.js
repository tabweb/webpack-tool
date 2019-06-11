// document.getElementById("app").innerHTML = "Webpack works";

/*使用es6的箭头函数*/
// var func = str => {
//   document.getElementById("app").innerHTML = str;
// };
// func("我现在在使用Babel!");

import React from "react";
import ReactDom from "react-dom";
import Hello from "./component/hello";
import getRouter from "./router/index";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import store from "./redux/store";

/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
  module.hot.accept("./router/index", () => {
    const getRouter = require("./router/index").default;
    renderWithHotReload(getRouter());
  });
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>{RootElement}</Provider>
    </AppContainer>,
    document.getElementById("app")
  );
}

// module.hot.accept(),如下。当模块更新的时候，通知index.js
// if (module.hot) {
//   module.hot.accept();
// }

// ReactDom.render(RootRouter(), document.getElementById("app"));
