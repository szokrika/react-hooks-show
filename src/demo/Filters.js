import React, { useState } from 'react'

const Filter = ({ filter, setFilter, preselected }) => {
  const [selected, setSelected] = useState(preselected.includes(filter))
  return (
    <li
      className={selected ? 'on' : 'off'}
      onClick={() => {
        setSelected(!selected)
        setFilter(filter, !selected)
      }}
    >
      {filter}
    </li>
  )
}
export default function Filters({
  title,
  filters = [],
  selected = [],
  selectFilter
}) {
  const setFilter = (filter, selected) => {
    selectFilter({
      type: `${selected ? 'Add' : 'Remove'}-${title}`,
      payload: filter
    })
  }
  return (
    <div className="filters">
      {title && <h3>{title}</h3>}
      <ul>
        {filters.map(filter => (
          <Filter
            key={filter}
            filter={filter}
            preselected={selected}
            setFilter={setFilter}
          />
        ))}
      </ul>
    </div>
  )
}
