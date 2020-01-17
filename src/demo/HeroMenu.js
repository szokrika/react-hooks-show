import React, { Component } from 'react'
import Select from 'react-select'

import { getHeroes } from '../api/api'

export default class HeroMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      heroes: [],
      original: [],
      selected: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.getData = this.getData.bind(this)
  }
  componentDidMount() {
    this.getData(this.props.filters)
  }

  componentWillReceiveProps(nextProps) {
    this.getData(nextProps.filters)
  }

  async getData(filters) {
    const heroes = await getHeroes(filters)
    const options = heroes.map(h => ({ value: h.id, label: h.name }))
    this.setState({ heroes: options, original: heroes })
  }

  handleChange(selected) {
    this.setState({ selected })
    this.props.select(selected)
  }

  render() {
    const { heroes, selected } = this.state

    return (
      <Select
        options={heroes}
        defaultValue={heroes[0]}
        value={selected}
        onChange={this.handleChange}
        styles={{
          singleValue: base => ({
            ...base,
            color: '#000'
          }),
          control: base => ({
            ...base,
            color: '#000'
          }),
          menu: base => ({
            ...base,
            color: '#000'
          })
        }}
      />
    )
  }
}
