import { Component } from "react"
import Feedback from "../Feedback/Feedback"
import Statistics from "../Statistics/Statistics"

import "./App/App.css"
import "./Feedback/Feedback.css"
import "./Statistics/Statistics.css"

class App extends Component {
render () {
  return ( 
  <div className="container">
    <Feedback/>
    <Statistics/>
  </div>)
}};

export default App