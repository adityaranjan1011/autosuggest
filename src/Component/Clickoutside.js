// import React from "react";
// import PropTypes from "prop-types";
// // import ReactDOM from 'react-dom'
// // import Autosuggestion from "./autosuggestion";

// class ClickOutside extends React.Component {
//   constructor(props) {
//     super(props);
//     this.containerRef = React.createRef();
//   }
//   onclick = () => {
//     let temp = this.containerRef.current;
//     console.log("111111");
//     debugger;
//     this.containerRef.current.abc();
//   };

//   componentDidMount() {
//     document.body.addEventListener("click", this.handleClick);
//   }

//   componentWillUnmount() {
//     document.body.removeEventListener("click", this.handleClick);
//   }

//   handleClick = e => {
//     let temp = this.containerRef.current;
//     debugger;
//     // this.containerRef.current.abc();
//     if (!this.containerRef.current.contains(e.target)) {
//       // this.setState({
//       //   isOpen:false
//       // })
//     }
//     // if(!ReactDOM.findDOMNode(this).contains(e.target)) {
//     //   // the click was outside your component, so handle closing here

//     // }

//     console.log("container ref", this.containerRef.current);

//     console.log("is node", !this.containerRef.current.contains(e.target));
//   };

//   render() {
//     return (
//       <div onClick={this.onClick} className="pawan">
//         <div ref={this.containerRef}>{this.props.children}</div>
//       </div>
//       // <div>
//       //   <Autosuggestion ref={this.containerRef} onclick={this.onclick}/>
//       // </div>
//     );
//   }
// }

// ClickOutside.propTypes = {
//   children: PropTypes.element.isRequired
// };

// export default ClickOutside;


import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class OutsideAlerter extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      console.log("setwrapper ",);
      this.event.setWrapperRef.abc();
    }
  }

  render() {
    return <div className="adi" ref={this.setWrapperRef}>{this.props.children}</div>;
  }
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
};