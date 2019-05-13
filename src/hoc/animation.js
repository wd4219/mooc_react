import { TransitionGroup, CSSTransition } from "react-transition-group";
import React, { Component } from 'react'
import './animate.css';
function wrapAnimation(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <CSSTransition
          in={this.props.match !== null}
          classNames={{
            enter: 'animated',
            enterActive: 'slideInRight',
            exit: 'animated',
            exitActive: 'slideOutRight'
          }}
          timeout={500}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <WrappedComponent {...this.props} />
        </CSSTransition>
      )
    }
  }
}

export default wrapAnimation;