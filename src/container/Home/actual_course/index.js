import React, { Component } from 'react'
import Swiper from '../../../components/swiper';
import Slider from '../../../components/slider';
import './style.scss';
import CourseItem from '../../../components/course_item';
export default class ActualCourse extends Component {
  render() {
    return (
      <div>
        <div className="actual-course-swiper" style={{height: 120,background:'#fff',padding:'10px 0'}}>
          <Swiper>
            <img src="//img.mukewang.com/5cd12eb509504e1909000300.jpg" alt="轮播图"  style={{borderRadius:4}}/>
            <img src="//img1.mukewang.com/szimg/5ccf9b0b09637afa00000000.jpg" alt="轮播图" style={{borderRadius:4}}/>
            <img src="//img4.mukewang.com/szimg/5cbfc29e09b196eb09000300.jpg" alt="轮播图" style={{borderRadius:4}}/>
            <img src="//img2.mukewang.com/szimg/5cb698b409ccec3a18000600.jpg " alt="轮播图" style={{borderRadius:4}}/>
          </Swiper>
        </div>
        <div className="actual-course-slider">
          <Slider paddingBottom={'12px'} scrollBar={true} scrollBarColor={'orange'} scrollBarBackground={'yellow'} scrollBarButtonWidth={'8px'}>
            <div className="actual-course-category-item">
              <h5 className="actual-course-category-item-title">前端开发</h5>
              <div className="actual-course-category-item-number">54门课</div>
            </div>
            <div className="actual-course-category-item">
              <h5 className="actual-course-category-item-title">前端开发</h5>
              <div className="actual-course-category-item-number">54门课</div>
            </div>
            <div className="actual-course-category-item">
              <h5 className="actual-course-category-item-title">前端开发</h5>
              <div className="actual-course-category-item-number">54门课</div>
            </div>
            <div className="actual-course-category-item">
              <h5 className="actual-course-category-item-title">前端开发</h5>
              <div className="actual-course-category-item-number">54门课</div>
            </div>
            <div className="actual-course-category-item">
              <h5 className="actual-course-category-item-title">前端开发</h5>
              <div className="actual-course-category-item-number">54门课</div>
            </div>
            <div className="actual-course-category-item">
              <h5 className="actual-course-category-item-title">前端开发</h5>
              <div className="actual-course-category-item-number">54门课</div>
            </div>
          </Slider>
        </div>
        <div className="actual-course-list" style={{padding: '20px 16px'}}>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
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
