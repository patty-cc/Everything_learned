import React from "react";

class PiggyBank extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      total: 0
    }
    this.addToSavings = this.addToSavings.bind(this)
    this.subtractFromSavings = this.subtractFromSavings.bind(this)
  }

  addToSavings(e) {
    this.setState({ total: this.state.total + 1})
  }

  subtractFromSavings(e) {
    this.setState({ total: this.state.total - 1})
  }

  componentWillMount() {
    console.log("component WILL MOUNT")
    var button = document.querySelector('button')
    console.log("Button: " , button)
  }

  componentDidMount() {
    console.log("component DID MOUNT")
    var button = document.querySelector('button')
    console.log("Button: " , button)
  }

  componentWillUpdate(nextProps, nextState){
    console.log("Component WILL UPDATE")
    console.log("NextProps:", nextProps)
    console.log("NextState:", nextState)
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Component DID UPDATE")
    console.log("PrevProps:", prevProps)
    console.log("PrevState:", prevState)
  }

  render() {
    // console.log(this)
    return <div className="bank-box">
            {this.props.title}
            <p>£{this.state.total}</p>
            <button onClick={this.addToSavings}>Add</button>
            <button onClick={this.subtractFromSavings}>Subtract</button>
          </div>
  }
}

export default PiggyBank;
