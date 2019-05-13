import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './style.scss';

export default class CourseItem extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    margin: PropTypes.string.isRequired,
    handerClick: PropTypes.func
  }

  static defaultProps = {
    data: {},
    margin: '20px'
  }

  render() {
    return (
      <div className="course-item" style={{marginBottom: this.props.margin}} onClick={this.props.handerClick}>
        <img className="course-item__logo" alt="课程图片" src="https://img2.mukewang.com/szimg/5cbf00c608f52a3b06000338.jpg"></img>
        <div className="course-item__info">
          <h3 className="course-item__title">前端下一代开发语言TypeScript 从基础到axios实战</h3>
          <div className="course-item__courseinfo">
            高级<span className="course-item__looknumber"><i className="iconfont icon-looknumber"></i>500</span>
          </div>
          <div className="course-item__price">￥328<span className="origin-price">￥388</span><span className="tag">限时优惠</span></div>
        </div>
      </div>
    )
  }
}
