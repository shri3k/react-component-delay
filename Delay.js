import React, { PropTypes, Component } from 'react';

class Delay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }

  componentDidMount(){
    const { time } = this.props;
    let start = null;
    const step = (timestamp) => {
      if (!start) {
        start = timestamp;
      }
      const delta = timestamp - start;
      if (delta < start) {
        window.requestAnimationFrame(step);
      } else {
        this.setState({
          display: true
        });
      }
    };
    window.requestAnimationFrame(step);
  }

  render(){
    const { children } = this.props;
    const { display } = this.state;
    return display ? <div> { children } </div>: <span/>;
  }
}

export default Delay;
