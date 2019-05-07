import React, {Component} from 'react';
import './style.scss';
import PropTypes from 'prop-types';
export default class Slider extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    padding: PropTypes.string,
    snap: PropTypes.bool
  }

  static defaultProps = {
    padding: '16px',
    snap: false
  }

  render() {
    return  (
      <div className="slider-container">
        <div className="slider-list-content">
          {
            this.props.children.map((item,index)=>{
              return (
                <div className="slider-list-item" style={{paddingLeft: this.props.padding,paddingRight: index === this.props.children.length - 1 ? this.props.padding : '0' }} key={index}>
                  {item}
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}