import React, { Component } from 'react'

class Headline extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { header, desc } = this.props;

    if(!header) {
      return null;
    }

    return (
      <div data-test="HeadLineComponent">
        <h1 data-test="header">{header}</h1>
        <p data-test="desc">{desc}</p>
      </div>
    );
  }
}

export default Headline;