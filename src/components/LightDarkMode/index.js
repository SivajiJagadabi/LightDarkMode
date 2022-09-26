// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {buttonText: 'Light Mode', bgContainer: 'bg-container', header: 'h1'}

  handClick = () => {
    const {buttonText, bgContainer, header} = this.state
    const button = buttonText === 'Light Mode' ? 'Dark Mode' : 'Light Mode'
    const container =
      bgContainer === 'bg-container' ? 'dark-mode' : 'bg-container'
    const head = header === 'h1' ? 'heading' : 'h1'

    this.setState({buttonText: button, bgContainer: container, header: head})
  }

  render() {
    const {buttonText, bgContainer, header} = this.state
    return (
      <div className="container">
        <div className={bgContainer}>
          <h1 className={header}>Click to Change Mode</h1>
          <button onClick={this.handClick} type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
