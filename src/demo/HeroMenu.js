import React, { useState, useEffect } from 'react'
import Select from 'react-select'

import { getHeroes } from '../api/api'

export default function HeroMenu({ filters, select: propSelect }) {
  const [heroes, setHeroes] = useState([])
  const [original, setOriginal] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    getData(filters)
  }, [filters])

  const getData = async filters => {
    const heroes = await getHeroes(filters)
    const options = heroes.map(h => ({ value: h.id, label: h.name }))
    setHeroes(options)
    setOriginal(heroes)
  }

  const handleChange = selected => {
    setSelected({ selected })
    propSelect(selected)
  }

  return (
    <Select
      options={heroes}
      defaultValue={heroes[0]}
      value={selected}
      onChange={handleChange}
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
