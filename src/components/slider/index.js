import React, {Component} from 'react';
import './style.scss';
import PropTypes from 'prop-types';
export default class Slider extends Component {

  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  static propTypes = {
    padding: PropTypes.string, //每个元素之间的间距
    firstLeftPadding: PropTypes.string, //第一个元素的左间距
    lastRightPadding: PropTypes.string, //最后一个元素的右间距
    paddingBottom: PropTypes.string, //容器的底部padding
    scrollBar: PropTypes.bool, //是否显示滚动条
    scrollBarColor: PropTypes.string, //滚动条滑块颜色
    scrollBarBackground: PropTypes.string, //滚动条滑轨颜色
    scrollBarButtonWidth: PropTypes.string
  }

  static defaultProps = {
    padding: '16px',
    scrollBar: false,
    paddingBottom: '0',
    scrollBarButtonWidth: '0'
  }

  

  componentDidMount() {
    if(this.props.scrollBar) {
      console.log(this.sliderRef.current);
      this.sliderRef.current.className += ' show-scrollbar';
      document.documentElement.style.setProperty('--scrollBarColor',this.props.scrollBarColor);
      document.documentElement.style.setProperty('--scrollBarBackground',this.props.scrollBarBackground);
      document.documentElement.style.setProperty('--scrollBarButtonWidth',this.props.scrollBarButtonWidth);
    }
    console.log(this.props.firstLeftPadding);
  }


  render() {
    return  (
      <div className="slider-container">
        <div className="slider-list-content"  ref={this.sliderRef} style={{paddingBottom: this.props.paddingBottom}}>
          {
            this.props.children.map((item,index)=>{
              return (
                <div className="slider-list-item" style={{paddingLeft:index === 0 && this.props.firstLeftPadding ? this.props.firstLeftPadding : this.props.padding,paddingRight: index === this.props.children.length - 1 ? this.props.lastRightPadding ? this.props.lastRightPadding : this.props.padding : '0' }} key={index}>
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