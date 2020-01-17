import React, { Component } from 'react'

export default class SuperHero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.select = this.select.bind(this)
  }
  select() {
    this.props.select({
      type: 'Add-Member',
      payload: this.props.hero
    })
  }

  render() {
    const { hero } = this.props
    if (!hero) return null
    return (
      <div className="hero">
        <header>
          <h1>{hero.name}</h1>
          <button onClick={this.select}>Add to team</button>
        </header>
        <div>
          <img src={hero.images.sm} alt={hero.name} />
          <p>{hero.work.occupation}</p>

          <hr />

          <dl>
            <dt>Full Name</dt>
            <dd>{hero.biography.fullName}</dd>
            <dt>Alterego</dt>
            <dd>{hero.biography.alterEgos}</dd>
            <dt>Place of Birth</dt>
            <dd>{hero.biography.placeOfBirth}</dd>
            <dt>Publisher</dt>
            <dd>{hero.biography.publisher}</dd>
          </dl>
          {/* <pre>{JSON.stringify(hero.biography, null, 2)}</pre> */}
        </div>
      </div>
    )
  }
}
