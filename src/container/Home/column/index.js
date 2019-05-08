import React, { Component } from 'react'
import './style.scss';
export default class Column extends Component {
  render() {
    return (
      <div>
        <ColumnItem></ColumnItem>
        <ColumnItem></ColumnItem>
        <ColumnItem></ColumnItem>
        <ColumnItem></ColumnItem>
      </div>
    )
  }
}


function ColumnItem(props) {
  return (
    <div className="column-item">
      <div className="column-item-top">
        <div className="column-item-info">
          <h3 className="column-item-title">用技术人的眼光看世界。程序员技术指北</h3>
          <div className="column-item-info-author">liuyubobobo · 算法大神</div>
          <div className="column-item-info-detail">
            52节 · 限时优惠 ￥69.90 <span className="column-item-origin-price">￥99.00</span>
          </div>
        </div>
      </div>
      <div className="column-item-bottom">
        <div className="column-item-bottom-slogan">bobo老师出品必属精品</div>
        <div className="column-item-read">287人订阅 · <span>试读</span></div>
      </div>
    </div>
  )
}