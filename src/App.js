
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
import Forgot from './containers/forgot/Forgot';
import Profile from './containers/profile/Profile';
import LoginAdmin from './components/admin/LoginAdmin';
import HomeAdmin from "./components/admin/HomeAdmin";
import CourseManagement from "./components/admin/coursemanagement/CourseManagement";
import SeeMoreAdmin from './components/admin/coursemanagement/SeeMoreAdmin';
import LessonManagement from './components/admin/lessonmanagement/LessonManagement';
import AddCourse from './components/admin/coursemanagement/AddCourse';
import SignUp from "./containers/signup/Signup";
import EditProfile from "./containers/profile/EditProfile";
import EditCourse from "./components/admin/coursemanagement/EditCourse";
import NotificationManagement from "./components/admin/notificationmanagement/NotificationManagement";
import AccountManagement from "./components/admin/accountmanagement/accountmanagement";
import AdminEditProfile from "./components/admin/profile/EditProfile";
import AdminProfile from "./components/admin/profile/Profile";


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
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/forgot" element={<Forgot/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/profile/edit" element={<EditProfile/>} />

            {/*  admin*/}
              <Route path="/admin/profile" element={<AdminProfile/>} />
              <Route path="/admin/profile/edit" element={<AdminEditProfile/>} />
              <Route path="/admin/login" element={<LoginAdmin/>} />
              <Route path="/admin/home" element={<HomeAdmin/>} />

            {/*Course*/}
              <Route path="/coursemanagement" element={<CourseManagement/>} />
              <Route path="/admin/SeeMore" element={<SeeMoreAdmin/>} />
              <Route path="/admin/editcourse" element={<EditCourse/>} />
              <Route path="/admin/addcourse" element={<AddCourse/>} />
            {/*Lesson*/}
              <Route path="/lessonmanagement" element={<LessonManagement/>} />


            {/*Notification*/}
              <Route path="/notificationmanagement" element={<NotificationManagement/>} />

            {/*Account*/}
              <Route path="/accountmanagement" element={<AccountManagement/>} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
