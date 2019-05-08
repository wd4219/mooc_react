import React, { Component } from 'react'
import Slider from '../../../components/slider';
import CourseItem from '../../../components/course_item';
import './style.scss';
export default class Course extends Component {
  render() {
    return (
      <div>
        <div className="course-category-container">
          <Slider padding={'10px'} firstLeftPadding={'0px'} lastRightPadding={'50px'} paddingBottom={'15px'} scrollBar={true} scrollBarColor={'red'} scrollBarBackground={'green'}>
            <div className="course-category-item">
              全部
            </div>
            <div className="course-category-item">
              前端开发
            </div>
            <div className="course-category-item">
              后端开发
            </div>
            <div className="course-category-item">
              移动开发
            </div>
            <div className="course-category-item">
              算法&数学
            </div>
            <div className="course-category-item">
              前沿技术
            </div>
            <div className="course-category-item">
              云计算&大数据
            </div>
            <div className="course-category-item">
              运维&测试
            </div>
            <div className="course-category-item">
              数据库
            </div>
            <div className="course-category-item">
              移动开发
            </div>
            <div className="course-category-item">
              算法&数学
            </div>
            <div className="course-category-item">
              前沿技术
            </div>
            <div className="course-category-item">
              云计算&大数据
            </div>
            <div className="course-category-item">
              运维&测试
            </div>
            <div className="course-category-item">
              数据库
            </div>
          </Slider>
          <div className="course-category-filter"><i className="iconfont icon-filter"></i>筛选</div>
        </div>
        <div className="course-list">
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
        </div>
      </div>
    )
  }
}
