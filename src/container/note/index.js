import React, { Component } from 'react'
import './style.scss';
export default class Note extends Component {
  render() {
    return (
      <div>
        <div className="note-list" >
          <NoteItem></NoteItem>
          <NoteItem></NoteItem>
          <NoteItem></NoteItem>
          <NoteItem></NoteItem>
          <NoteItem></NoteItem>
          <NoteItem></NoteItem>
          <NoteItem></NoteItem>
          <NoteItem></NoteItem>
          <NoteItem></NoteItem>
          <NoteItem></NoteItem>
          <NoteItem></NoteItem>
          <NoteItem></NoteItem>
          <NoteItem></NoteItem>
          <NoteItem></NoteItem>
          <NoteItem></NoteItem>
          <NoteItem></NoteItem>
          <NoteItem></NoteItem>
          <NoteItem></NoteItem>
        </div>
        
      </div>
    )
  }
}


function NoteItem(props) {
  return (
    <div className="note-item">
      <div className="note-item-info">
        <h3 className="note-item-title">
          Golang为什么这么火Go并发Goroutine和Channels
        </h3>
        <div className="note-item-detail">
          <div className="note-item-tag">Go</div>
          <span className="note-item-read">646阅读</span>
        </div>
      </div>
      <img src="//img4.mukewang.com/5bf3a1550001737302720272-200-200.jpg" alt="手机图片" className="note-item-logo"/>
    </div>
  );
}