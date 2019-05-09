import React, { Component } from 'react'
import './style.scss';
import Slider from '../../components/slider';

export default class Study extends Component {
  render() {
    return (
      <div>
        <StudyLine></StudyLine>
        <div className="study-recent-course">
          <CourseItem></CourseItem>
        </div>
        <div className="study-recent-course">
          <CourseItem></CourseItem>
        </div>
        <PersonalCenter></PersonalCenter>
      </div>
    )
  }
}


function StudyLine() {
  return (
    <div className="study-line-container">
      <div className="study-line-top">
        <div className="study-line-userinfo">
          <img src="//img4.mukewang.com/5bf3a1550001737302720272-200-200.jpg" alt="用户头像"/>
          <div className="study-line-username">牛批闪闪的用户</div>
          <i className="iconfont icon-arrow"></i>
        </div>
        <div className="study-line-sign">签到</div>
      </div>
      <div className="study-line-month">

      </div>
      <div className="study-line-week">
        <div className="study-line-day">一</div>
        <div className="study-line-day">二</div>
        <div className="study-line-day">三</div>
        <div className="study-line-day active">四</div>
        <div className="study-line-day">五</div>
        <div className="study-line-day">六</div>
        <div className="study-line-day">日</div>
      </div>
      <StudyDetail></StudyDetail>
    </div>
  );
} 

function StudyDetail() {
  return (
    <div className="study-detail">
      <div className="study-detail-item">
        <div className="value">0分钟</div>
        <div className="title">今日学习</div>
      </div>
      <div className="study-detail-item">
        <div className="value">0分钟</div>
        <div className="title">今日学习</div>
      </div>
      <div className="study-detail-item">
        <div className="value">0分钟</div>
        <div className="title">今日学习</div>
      </div>
    </div>
  );
}

function CourseItem() {
  return (
    <React.Fragment>
      <h3 >最近学习<i className="iconfont icon-arrow"></i></h3>
      <Slider>
        <div className="study-course-item">
          <div className="study-course-item-top">
            <img src="//img1.mukewang.com/szimg/5cd14db4093694ef06000338.jpg"/>
            <span className="study-course-item-process">已学0%</span>
          </div>
          <h4 className="study-course-item-name">
            JavaScript深入浅出
          </h4>
        </div>
        <div className="study-course-item">
          <div className="study-course-item-top">
            <img src="//img1.mukewang.com/szimg/5cd14db4093694ef06000338.jpg"/>
            <span className="study-course-item-process">已学0%</span>
          </div>
          <h4 className="study-course-item-name">
            JavaScript深入浅出
          </h4>
        </div>
        <div className="study-course-item">
          <div className="study-course-item-top">
            <img src="//img1.mukewang.com/szimg/5cd14db4093694ef06000338.jpg"/>
            <span className="study-course-item-process">已学0%</span>
          </div>
          <h4 className="study-course-item-name">
            JavaScript深入浅出
          </h4>
        </div>
        <div className="study-course-item">
          <div className="study-course-item-top">
            <img src="//img1.mukewang.com/szimg/5cd14db4093694ef06000338.jpg"/>
            <span className="study-course-item-process">已学0%</span>
          </div>
          <h4 className="study-course-item-name">
            JavaScript深入浅出
          </h4>
        </div>
        <div className="study-course-item">
          <div className="study-course-item-top">
            <img src="//img1.mukewang.com/szimg/5cd14db4093694ef06000338.jpg"/>
            <span className="study-course-item-process">已学0%</span>
          </div>
          <h4 className="study-course-item-name">
            JavaScript深入浅出
          </h4>
        </div>
      </Slider>
    </React.Fragment>
  );
}


function PersonalCenter() {
  return (
    <div className="personal-center-container">
      <h3 className="personal-center-title">个人中心</h3>
      <ul className="personal-center-list">
        <li className="personal-center-list-item">
          <img src="https://www.imooc.com/m/img/user/follow.svg" alt="我的收藏" className="personal-center-list-item-logo"/>
          <p className="personal-center-list-item-text">我的收藏</p>
        </li>
        <li className="personal-center-list-item">
          <img src="https://www.imooc.com/m/img/user/follow.svg" alt="我的实战" className="personal-center-list-item-logo"/>
          <p className="personal-center-list-item-text">我的实战</p>
        </li>
        <li className="personal-center-list-item">
          <img src="https://www.imooc.com/m/img/user/follow.svg" alt="就业班" className="personal-center-list-item-logo"/>
          <p className="personal-center-list-item-text">就业班</p>
        </li>
        <li className="personal-center-list-item">
          <img src="https://www.imooc.com/m/img/user/follow.svg" alt="我的专栏" className="personal-center-list-item-logo"/>
          <p className="personal-center-list-item-text">我的专栏</p>
        </li>
        <li className="personal-center-list-item">
          <img src="https://www.imooc.com/m/img/user/follow.svg" alt="我的笔记" className="personal-center-list-item-logo"/>
          <p className="personal-center-list-item-text">我的笔记</p>
        </li>
        <li className="personal-center-list-item">
          <img src="https://www.imooc.com/m/img/user/follow.svg" alt="我的问答" className="personal-center-list-item-logo"/>
          <p className="personal-center-list-item-text">我的问答</p>
        </li>
        <li className="personal-center-list-item">
          <img src="https://www.imooc.com/m/img/user/follow.svg" alt="我的手记" className="personal-center-list-item-logo"/>
          <p className="personal-center-list-item-text">我的手记</p>
        </li>
        <li className="personal-center-list-item">
          <img src="https://www.imooc.com/m/img/user/follow.svg" alt="我的课表" className="personal-center-list-item-logo"/>
          <p className="personal-center-list-item-text">我的课表</p>
        </li>
      </ul>
    </div>
  );
}