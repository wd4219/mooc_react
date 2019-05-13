import React, { Component } from 'react'
import './style.scss';
import { BrowserRouter as Router, Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer-list">
        <Link to="/" className="footer-list-item">
          <i className="iconfont icon-index"></i>
          首页
        </Link>
        <Link to="/note" className="footer-list-item">
          <i className="iconfont icon-note"></i>
          手记
        </Link>
        <Link to="/study" className="footer-list-item">
          <i className="iconfont icon-my-study"></i>
          我的学习
        </Link>
        <Link to="/account" className="footer-list-item">
          <i className="iconfont icon-mine"></i>
          账号
        </Link>
      </div>
    )
  }
}
