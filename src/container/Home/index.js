import React, { Component } from 'react'
import './style.scss';
import Marquee from '../../components/marquee/Marquee.js';
import CourseItem from '../../components/course_item';
import Slider from '../../components/slider';
import EliteTeacher from './elite_teacher';
import Swiper from '../../components/swiper';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        {/* 头部模块 */}
        <header className="home-header">
          <div className="home-header__shopingcart iconfont icon-shopingcart"></div>
          <div className="home-header__searchbox">
            <Marquee duration={5000}>
              <p><i className="iconfont icon-search"></i>算法 · 面试 · 数据结构</p>
              <p><i className="iconfont icon-search"></i>vuejs · python · 人工智能</p>
              <p><i className="iconfont icon-search"></i>人工智能 · Go语言 · 小程序</p>
            </Marquee>
          </div>
          <div className="home-header__download iconfont icon-download"></div>
        </header>
        {/* 轮播图模块 */}
        <div className="home-index-swiper" style={{height: 120,background:'#fff',padding:'10px 0'}}>
          <Swiper>
            <img src="//img.mukewang.com/5cd12eb509504e1909000300.jpg" alt="轮播图"  style={{borderRadius:4}}/>
            <img src="//img1.mukewang.com/szimg/5ccf9b0b09637afa00000000.jpg" alt="轮播图" style={{borderRadius:4}}/>
            <img src="//img4.mukewang.com/szimg/5cbfc29e09b196eb09000300.jpg" alt="轮播图" style={{borderRadius:4}}/>
            <img src="//img2.mukewang.com/szimg/5cb698b409ccec3a18000600.jpg " alt="轮播图" style={{borderRadius:4}}/>
          </Swiper>
        </div>
        {/* 通知模块 */}
        <div className="home-notice">
          <i className="iconfont icon-notice"></i>
          <Marquee>
            <p>注册送价值68元接人礼券&gt;</p>
            <p>算法大神bobo老师专栏上架了&gt;</p>
          </Marquee>
        </div>
        {/* 实战模块 */}
        <div className="home-course-list">
          <h2 className="home-course-list__title">实战推荐</h2>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <div className="home-course-list__more">
            查看更多
          </div>
        </div>
        {/* 就业班模块 */}
        <div className="home-job">
          <h2 className="home-job__title">2019新版就业班</h2>
          <div className="home-job__course">
            <div className="home-job__course-item">
              <h4 className="home-job__course-item-title">
                Java攻城狮
              </h4>
              <div className="home-job__course-info">
                <div>
                  <p>全球3大语言排名之一</p>
                  <span className="tag">最新升级</span>
                </div>
                <img className="home-job__course-logo" alt="就业班课程图片" src="https://class.imooc.com/static/module/index/img/fe-new.png"/>
              </div>
            </div>
            <div className="home-job__course-item">
              <h4 className="home-job__course-item-title">
                Java攻城狮
              </h4>
              <div className="home-job__course-info">
                <div>
                  <p>全球3大语言排名之一</p>
                  <div className="tag">最新升级</div>
                </div>
                <img className="home-job__course-logo" alt="就业班课程图片" src="https://class.imooc.com/static/module/index/img/java-new.png"/>
              </div>
            </div>
            <div className="home-job__course-item">
              <h4 className="home-job__course-item-title">
                Java攻城狮
              </h4>
              <div className="home-job__course-info">
                <div>
                  <p>全球3大语言排名之一</p>
                  <div className="tag">最新升级</div>
                </div>
                <img className="home-job__course-logo" alt="就业班课程图片" src="https://class.imooc.com/static/module/index/img/android-new.png"/>
              </div>
            </div>
            <div className="home-job__course-item">
              <h4 className="home-job__course-item-title">
                Java攻城狮
              </h4>
              <div className="home-job__course-info">
                <div>
                  <p>全球3大语言排名之一</p>
                  <div className="tag">最新升级</div>
                </div>
                <img className="home-job__course-logo" alt="就业班课程图片" src="https://class.imooc.com/static/module/index/img/php-new.png"/>
              </div>
            </div>
          </div>
        </div>
        <div className="home-new-job">
          <h2 className="home-new-job__title">
            Python攻城狮就业班强势来袭
          </h2>
          <img src="https://class.imooc.com/static/module/index/img/java-new.png" alt="就业班课程图片"/>
        </div>
        {/* 专栏模块 */}
        <div className="home-column">
          <h2 className="home-column-title">慕课专栏</h2>
          <Slider>
            <div className="home-column-item">
              <img src="//img2.mukewang.com/5cd10384000145f305400720.jpg"/>
              <div className="home-column-item-info">
                <h4 className="home-column-item-title">用技术人的眼光看世界。程序员技术指北</h4>
                <p className="home-column-item-info-solgan">bobo老师出品必属精品</p>
                <div className="home-column-item-info-courseinfo">
                  <div className="author">52节 · liuyubobobo · 全栈工程师</div>
                  <div className="info-bar">
                    <div className="tag">限时优惠</div>
                    <div className="discount">￥69.90</div>
                    <div className="origin-price">￥99.00</div>
                    <div className="sub-num">110人订阅</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-column-item">
              <img src="//img2.mukewang.com/5cd10384000145f305400720.jpg"/>
              <div className="home-column-item-info">
                <h4 className="home-column-item-title">用技术人的眼光看世界。程序员技术指北</h4>
                <p className="home-column-item-info-solgan">bobo老师出品必属精品</p>
                <div className="home-column-item-info-courseinfo">
                  <div className="author">52节 · liuyubobobo · 全栈工程师</div>
                  <div className="info-bar">
                    <div className="tag">限时优惠</div>
                    <div className="discount">￥69.90</div>
                    <div className="origin-price">￥99.00</div>
                    <div className="sub-num">110人订阅</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-column-item">
              <img src="//img2.mukewang.com/5cd10384000145f305400720.jpg"/>
              <div className="home-column-item-info">
                <h4 className="home-column-item-title">用技术人的眼光看世界。程序员技术指北</h4>
                <p className="home-column-item-info-solgan">bobo老师出品必属精品</p>
                <div className="home-column-item-info-courseinfo">
                  <div className="author">52节 · liuyubobobo · 全栈工程师</div>
                  <div className="info-bar">
                    <div className="tag">限时优惠</div>
                    <div className="discount">￥69.90</div>
                    <div className="origin-price">￥99.00</div>
                    <div className="sub-num">110人订阅</div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          <div className="home-column-more">查看更多</div>
        </div>

        {/* 课程精选模块 */}
        <div className="home-course-list">
          <h2 className="home-course-list__title">课程精选</h2>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <div className="home-course-list__more">
            查看更多
          </div>
        </div>
        {/* 精英讲师模块 */}
        <EliteTeacher></EliteTeacher>
        {/* 猜你喜欢模块 */}
        <div className="home-course-list">
          <h2 className="home-course-list__title">猜你喜欢</h2>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
          <CourseItem></CourseItem>
        </div>
        {/* 我的关注 */}
        <div className="home-attention">
          <h2 className="home-attention-title">我的关注<span className="home-attention-change">调整我的关注方向&gt;&gt;</span></h2>
        </div>
      </div>
    )
  }
}
