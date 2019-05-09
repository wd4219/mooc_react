import React, { Component } from 'react'
import './style.scss';

export default class Account extends Component {
  render() {
    return (
      <div>
        <UserInfo></UserInfo>
        <div style={{paddingLeft: '16px',background:'#fff'}}>
          <OperateItem>
            <span style={{color: 'red',fontSize: '12px'}}>好奖随心选</span>
          </OperateItem>
          <OperateItem></OperateItem>
          <OperateItem></OperateItem>
          <OperateItem></OperateItem>
          <OperateItem></OperateItem>
          <OperateItem></OperateItem>
          <OperateItem></OperateItem>
        </div>
        
      </div>
    )
  }
}


function UserInfo() {
  return(
    <div className="account-userinfo-container">
      <div className="account-userinfo-top">
        <img src="//img4.mukewang.com/5bf3a1550001737302720272-200-200.jpg" alt="用户头像"/>
        <div className="account-userinfo-detail">
          <div className="account-userinfo-username">牛皮闪闪的用户</div>
          <p>学习时长：<span>210小时</span>经验<span>17688</span></p>
        </div>
      </div>
      <div className="account-userinfo-bottom">
        <div>关注<span>12</span></div>
        <div>粉丝<span>0</span></div>
        <div>积分<span>1</span></div>
      </div>
    </div>
  );
}

function OperateItem(props) {
  return(
    <div className="account-operate-item">
      <h3 className="account-operate-item-title">积分抽奖</h3>
      <div>
        {props.children}
        <i className="iconfont icon-arrow"></i>
      </div>
    </div>
  );
}