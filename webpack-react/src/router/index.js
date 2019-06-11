import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Index from "page/index";
// import Counter from "page/counter";
//
// 按需加载所有页面只生成了一个build.js,当我们首屏加载的时候，就会很慢。因为他也下载了别的页面的js了哦
import Index from "bundle-loader?lazy&name=index!page/index";
import Counter from "bundle-loader?lazy&name=counter!page/counter";
import Bundle from "./Bundle";
// const Home = () => {
//   return <div>this is home 6464646</div>;
// };
const Loading = function() {
  return <div>Loading...</div>;
};

const createComponent = component => props => (
  <Bundle load={component}>
    {Component => (Component ? <Component {...props} /> : <Loading />)}
  </Bundle>
);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10
    };
  }
  add() {
    this.setState({ count: ++this.state.count });
  }
  render() {
    return (
      <div>
        <p>我改变了我的令居不改变132323313</p>
        <p>this is count {this.state.count}</p>
        <button onClick={this.add.bind(this)}>add</button>
      </div>
    );
  }
}

const Page = () => {
  return <div>this is page 局部刷洗</div>;
};

const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/page">Page</Link>
        </li>
        <Link to="/page1">@page1</Link>
        <li>
          <Link to="/counter">counter</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page" component={Page} />
        {/* <Route path="/page1" component={Index} />
        <Route path="/counter" component={Counter} /> */}
        <Route path="/page1" component={createComponent(Index)} />
        <Route path="/counter" component={createComponent(Counter)} />
      </Switch>
    </div>
  </Router>
);

export default getRouter;
