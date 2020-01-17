import React, { useState, useEffect, useReducer } from 'react'
import Nav from './Nav'
import SuperHero from './SuperHero'
import HeroMenu from './HeroMenu'
import Filters from './Filters'
import Team from './Team'
import { getHeroById } from '../api/api'
import './Demo.scss'

export default function Demo() {
  const [hero, setHero] = useState({ label: 'Superhero', value: 0 })
  const [state, dispatch] = useReducer(
    (store, action) => {
      switch (action.type) {
        case 'Add-Gender':
          return {
            ...store,
            gender: [...new Set([...store.gender, action.payload])]
          }
        case 'Remove-Gender':
          return {
            ...store,
            gender: store.gender.filter(g => g !== action.payload)
          }
        case 'Add-Race':
          return {
            ...store,
            race: [...new Set([...store.race, action.payload])]
          }
        case 'Remove-Race':
          return {
            ...store,
            race: store.race.filter(r => r !== action.payload)
          }
        default:
          return store
      }
    },
    { gender: ['Female'], race: ['Human'] }
  )
  const [team, setTeam] = useReducer((store, action) => {
    switch (action.type) {
      case 'Add-Member':
        // TODO: localstorage
        return [...new Set([...store, action.payload])]
      case 'Remove-Member':
        // TODO: localstorage
        return store.filter(m => m.id !== action.payload)
      default:
        return store
    }
  }, []) //TODO: init from localstorage

  const [details, setDetails] = useState(null)
  useEffect(() => {
    const get = async id => {
      const h = await getHeroById(hero.value)
      setDetails(h)
    }
    get()
  }, [hero.value])

  return (
    <div className="demo">
      <header>
        <Nav />
      </header>
      <aside>
        <h2>Filters </h2>
        <Filters
          title={'Gender'}
          filters={['Male', 'Female']}
          selected={state.gender}
          selectFilter={dispatch}
        />
        <Filters
          title={'Race'}
          filters={[
            'Asgardian',
            'Human',
            'Mutant',
            'Human-Kree',
            // 'Human-Vulcan',
            // 'Rodian',
            'Cyborg',
            'Demon'
          ]}
          selected={state.race}
          selectFilter={dispatch}
        />
      </aside>
      <main>
        <h1>{hero.label}</h1>
        <HeroMenu select={setHero} filters={state} />
        <SuperHero hero={details} select={setTeam} />
      </main>
      <section>
        <h2>My SuperTeam</h2>
        <Team team={team} remove={setTeam} />
      </section>
      <footer>
        <h2>footer</h2>
      </footer>
    </div>
  )
}
