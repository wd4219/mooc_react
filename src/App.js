import React from 'react';
import Home from './container/Home';
import Course from './container/Home/course/';
import ActualCourse from './container/Home/actual_course';
import JobCourse from './container/Home/job';
import Column from './container/Home/column';
import Note from './container/note';
import Study from './container/study';
import Account from './container/account';
import CourseDetail from './container/course_detail';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './animate.css';
import './App.scss';
function App() {
  return (
    <div className="App" style={{background:'#f5f5f5'}}>
      {/* <Home></Home> */}
      {/* <Course></Course> */}
      {/* <ActualCourse></ActualCourse> */}
      {/* <JobCourse></JobCourse> */}
      {/* <Column></Column> */}
      {/* <Note></Note> */}
      {/* <Study></Study> */}
      <Router>
        <Route render={({location})=>(
          <div style={{position:'absolute',left:0,bottom:0,top:0,right:0,overflow:'hidden'}}>
            <Route path="/" exact render={()=> <Redirect to="/home"/>}></Route>
            <TransitionGroup>
              <CSSTransition key={location.key}
                classNames={{
                  enter: 'animated',
                  enterActive: location.pathname == '/course/detail' ? 'slideInRight': 'normal',
                  exit: 'animated',
                  exitActive: location.pathname == '/course/detail' ? 'slideOutRight': 'normal'
                }}
                timeout={location.pathname === '/course/detail'? 500 : 0}
              >
                <Switch location={location}>
                  <Route path="/home" exact component={Home}></Route>
                  <Route path="/note" exact component={Note}></Route>
                  <Route path="/study" exact component={Study}></Route>
                  <Route path="/account" exact component={Account}></Route>
                  <Route path="/course/detail" exact component={CourseDetail}></Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )}></Route>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
