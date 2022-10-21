// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeInput = event => {
    const value = event.target.value.length
    this.setState({count: value})
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-container">
        <div className="content-container">
          <div className="calculation-box">
            <div>
              <h1 className="heading">Calculate the Letters you enter</h1>
              <div className="description">
                <label htmlFor="inp" className="label">
                  Enter the phrase
                </label>
                <input
                  id="inp"
                  type="text"
                  placeholder="Enter the phrase"
                  onChange={this.onChangeInput}
                />
              </div>
              <p className="button" type="button">
                No.of letters: {count}
              </p>
            </div>
          </div>
          <div className="img-container">
            <img
              className="icon"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
