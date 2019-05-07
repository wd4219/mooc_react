import React, { Component } from 'react'
import CourseItem from '../../../components/course_item';
import './style.scss';
export default class EliteTeacher extends Component {
  render() {
    return (
      <div className="home-elite-teacher">
        <h2 className="home-elite-teacher-title">精英讲师</h2>
        <div className="home-elite-teacher-list">
          <div className="home-elite-teacher-list-item">
            <img src="http://img4.mukewang.com/58ef8de70001964301810181-100-100.jpg" alt="老师头像" className="home-elite-teacher-list-item-avatar"/>
            <div className="home-elite-teacher-list-item-name">老卫</div>
            <div className="home-elite-teacher-list-item-career">全栈工程师</div>
          </div>
          <div className="home-elite-teacher-list-item">
            <img src="http://img4.mukewang.com/58ef8de70001964301810181-100-100.jpg" alt="老师头像" className="home-elite-teacher-list-item-avatar"/>
            <div className="home-elite-teacher-list-item-name">老卫</div>
            <div className="home-elite-teacher-list-item-career">全栈工程师</div>
          </div>
          <div className="home-elite-teacher-list-item">
            <img src="http://img4.mukewang.com/58ef8de70001964301810181-100-100.jpg" alt="老师头像" className="home-elite-teacher-list-item-avatar"/>
            <div className="home-elite-teacher-list-item-name">老卫</div>
            <div className="home-elite-teacher-list-item-career">全栈工程师</div>
          </div>
          <div className="home-elite-teacher-list-item">
            <img src="http://img4.mukewang.com/58ef8de70001964301810181-100-100.jpg" alt="老师头像" className="home-elite-teacher-list-item-avatar"/>
            <div className="home-elite-teacher-list-item-name">老卫</div>
            <div className="home-elite-teacher-list-item-career">全栈工程师</div>
          </div>
        </div>
        <div className="home-elite-teacher-course-list">
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
        </div>
      </div>
    )
  }
}
