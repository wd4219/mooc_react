import React from 'react';
import Home from './container/Home';
import Course from './container/Home/course/';
import ActualCourse from './container/Home/actual_course';
import JobCourse from './container/Home/job';
import Column from './container/Home/column';
function App() {
  return (
    <div className="App" style={{background:'#f5f5f5'}}>
      {/* <Home></Home> */}
      {/* <Course></Course> */}
      {/* <ActualCourse></ActualCourse> */}
      {/* <JobCourse></JobCourse> */}
      <Column></Column>
    </div>
  );
}

export default App;
