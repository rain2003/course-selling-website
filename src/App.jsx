/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Landing from "./components/Landing";
import CreateCourse from './components/CreateCourse';
import Register from './components/Register';
import ShowCourses from './components/ShowCourses';
import Appbar from './components/Appbar';
import Course from './components/Course';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)
function App() {
    return (
        <RecoilRoot>
            <Router>
                <Appbar/>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/course/:courseId" element={<Course/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/addcourses" element={<CreateCourse />} />
                    <Route path="/courses" element={<ShowCourses />} />
                </Routes>
            </Router>
        </RecoilRoot>
    );
}

export default App;