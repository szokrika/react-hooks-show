import React, { Component } from 'react'

export default class EffectClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      photo: null
    }
  }
  componentDidMount() {
    const id = this.props.id || 1
    this.setState({ loading: true })
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(r => r.json())
      .then(json => {
        this.setState({ loading: false, photo: json })
      })
  }

  render() {
    const { loading, photo } = this.state
    return (
      <div>
        <div>EffectClass</div>
        <hr />
        {loading && <div>Loading...</div>}
        {photo && <img alt={photo.title} src={photo.thumbnailUrl} />}
      </div>
    )
  }
}
