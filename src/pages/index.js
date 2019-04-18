import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const getSomeData = (param) => fetch(`http://example.com/?id=${param}`)
.then(function(response) {
  console.log(param);
  console.log('some response', response);
  return response.json();
})
.then(function(myJson) {
  console.log(JSON.stringify(myJson));
  return JSON.stringify(myJson);
});

const clickHandler = args => {
  console.log(args);
  return;
}



class IndexPage extends React.Component {
  state = {
    data: null,
  }

  clickHandler = () => {
    console.log(this.param.value);

    const reply = getSomeData(this.param.value);
    this.setState({data: reply});
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div>
          <label htmlFor="param">
            <span>Param name</span>
            <input id="param" ref={(param) => { this.param = param }}></input>
          </label>
        </div>



        <button onClick={this.clickHandler}>Go</button>
        <p>

          {this.state.data}
        </p>
      </Layout>
    );
  }
}

export default IndexPage
