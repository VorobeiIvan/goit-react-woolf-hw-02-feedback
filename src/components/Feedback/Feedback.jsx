import {Component}  from "react"


class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

render (){
    return (
<div>
  <p className="text">Pleace leave feedback</p>
  <ul className="list">
    <li className="item">
      <button className="button">Good</button>
    </li>
    <li className="item">
      <button className="button">Neutral</button>
    </li>  
    <li className="item">
      <button className="button">Bad</button>
    </li>
  </ul>
</div>
)}}

export  default Feedback