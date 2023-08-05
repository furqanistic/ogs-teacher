import React from 'react'
import Home from './pages/Home'
import Attendance from './pages/Attendance'
import MarkAttendance from './components/attendance/MarkAttendance'
import Calender from './pages/Calender'
import ClassList from './pages/ClassList'
import TimeTable from './pages/TimeTable'
import Exam from './pages/Exam'
import ExamResult from './pages/ExamResult'
import HomeWork from './pages/Homework'
import News from './pages/News'
import Settings from './pages/Settings'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StudentAttendanceInfo from './components/attendance/student/StudentAttendanceInfo'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='attendance' element={<Attendance />} />
            <Route path='attendance/upload' element={<MarkAttendance />} />
            <Route
              path='attendance/student'
              element={<StudentAttendanceInfo />}
            />
            <Route path='calender' element={<Calender />} />
            <Route path='classlist' element={<ClassList />} />
            <Route path='timetable' element={<TimeTable />} />
            <Route path='exam' element={<Exam />} />
            <Route path='examresult' element={<ExamResult />} />
            <Route path='homework' element={<HomeWork />} />
            <Route path='news' element={<News />} />
            <Route path='settings' element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
