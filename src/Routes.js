import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Contact from './Pages/Contact'
// import Signup from './Pages/Signup'
// import PostTrick from './Pages/PostTrick'

const Routes = () => {
    return (
        <>
        <Redirect exact from="/" to="/projects" render={props => <Projects {...props}/>}/>
        <Route exact path="/projects" render={props => <Projects {...props}/>}/> 
        <Route exact path="/contact" render={props => <Contact {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
        {/* <Route exact path="/spots/:spotId" render={props => <Spot {...props} />} />
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/signup" render={props => <Signup {...props} />} />
        <Route exact path="/spots/:spotId/:new" render={props => <PostTrick {...props} />} /> */}
        {/* <Route exact from="/" render={props => <Home {...props} />}/>
        <Route exact path="/elements" render={props => <Elements {...props} />} />
        <Route exact path="/feed" render={props => <Feed {...props} />} />
        <Route exact path="/search" render={props => <Search {...props} />} />
        <Route exact path="/profile" render={props => <Profile {...props} />} />
        <Route exact path="/messages" render={props => <Messages {...props} />} /> */}
        </>
    )
}
export default Routes