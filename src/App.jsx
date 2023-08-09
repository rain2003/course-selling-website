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
//  Hi @everyone , for this week's assignment you'll 
// have to create an e-commerce app with an admin dashboard and a user facing 
// dashboard using Turborepo in a single monorepo. 
// You'll have to add all the common zod types/TS types 
// in a common module which both backend and the 2 frontend apps will use. 
// You'll also have to keep all the 
// re-usable components (login screen/signup screen/item card for an ecommerce item) in the ui module. 
// The e-commerce website would be very similar to a 
// course selling website where people are selling physical items instead of courses


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