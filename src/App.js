import "./App.css"
import Header from "./components/Common/header/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./components/AboutUs/About"
import CourseHome from "./components/Courses/AllCourses"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/Blog/Blog"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Common/footer/Footer"
import Home from "./components/Home/Home"
function App() {
  return (
    <>
      <Router>
        <Header />
    <Routes>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
