
import './App.css';
import Appbar from './components/AppBar';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import { Routes  } from 'react-router-dom';
import ListCourse from './components/ListCourse';
import ListLesson from './components/ListLesson';
import Home from './components/Home';
import SeeMore from './components/SeeMore'
import Course from './components/Course'
import Exercise from './components/Exercise'
import Login from './containers/login/Login';
import Signup from './containers/signup/Signup';
import Forgot from './containers/forgot/Forgot';
import Profile from './containers/profile/Profile';
import Edit from './containers/edit/Edit';
import LoginAdmin from './components/admin/LoginAdmin';
import HomeAdmin from "./components/admin/HomeAdmin";
import CourseManagement from "./components/admin/CourseManagement";
import SeeMoreAdmin from './components/admin/SeeMoreAdmin';
import LessonManagement from './components/admin/LessonManagement';
import AddCourse from './components/admin/AddCourse';


// import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/listcourse" element={<ListCourse/>}/>
              <Route exact path="/Course" element={<Course/>}/>
              <Route exact path="/SeeMore" element={<SeeMore/>}/>
              <Route exact path="/Exercise" element={<Exercise/>}/>
              <Route exact path="/listlesson" element={<ListLesson/>}/>
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login/forgot" element={<Forgot/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/profile/edit" element={<Edit/>} />

            {/*  admin*/}
              <Route path="/admin/login" element={<LoginAdmin/>} />
              <Route path="/admin/home" element={<HomeAdmin/>} />
              <Route path="/coursemanagement" element={<CourseManagement/>} />
              <Route path="/admin/SeeMore" element={<SeeMoreAdmin/>} />
              <Route path="/lessonmanagement" element={<LessonManagement/>} />
              <Route path="/admin/addcourse" element={<AddCourse/>} />

            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
