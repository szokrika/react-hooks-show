import React from 'react'

export default function Team({ team = [], remove }) {
  return (
    <ul>
      {team.map(member => (
        <li key={`${member.id}-${member.name}`}>
          {member.name}{' '}
          <button
            onClick={() =>
              remove({
                type: 'Remove-Member',
                payload: member.id
              })
            }
          >
            remove
          </button>
        </li>
      ))}
    </ul>
  )
}
