import React from 'react'

export default class Counter extends React.Component {
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   //sync
  //   this.setState((prevState, nextProps) => ({
  //     counter: nextProps.counter + 1
  //   }))
  // }
  constructor(props) {
    super(props)
    this.state = {
      counter: props.count,
      toggle: false
    }
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  // componentWillReceiveProps(nextProps) {
  //   //sync
  //   this.setState((state, nextProps) => ({
  //     counter: nextProps.counter + 1
  //   }))
  // }

  handleIncrement() {
    // async
    this.setState({
      counter: this.state.counter + 1
    })
  }

  handleToggle() {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    const { toggle } = this.state
    return (
      <div>
        <div>Class counter {this.state.counter}</div>
        <p>Prop value: {this.props.count}</p>
        <hr />
        <button className="btn" type="button" onClick={this.handleIncrement}>
          +
        </button>
        <button onClick={this.handleToggle}>{toggle ? 'on' : 'off'}</button>
      </div>
    )
  }
}
