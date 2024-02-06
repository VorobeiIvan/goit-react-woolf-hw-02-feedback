import {Component}  from "react"

class Statistics extends Component {

render (){
    return (
<div>
  <h2 className="statistics-title">Statistics</h2>
  <ul className="statistics-list">
    <li className="statistics-item">
    Good: <span className="item-value">0</span>
    </li>
    <li className="statistics-item">
    Neutral: <span className="item-value">0</span>
    </li>
    <li className="statistics-item">
    Bad: <span className="item-value">0</span>
    </li>
    <li className="statistics-item">
    Total: <span className="item-value">0</span>
    </li>
    <li className="statistics-item">
    Positive feedback: <span className="item-value">0 %</span>
    </li>
  </ul>
</div>
)}}

export  default Statistics