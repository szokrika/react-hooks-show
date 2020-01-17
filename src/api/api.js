export const login = (userName, time) => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({ name: userName, authenticated: true })
    }, time)
  })
}

export const getHeroes = async ({ gender, race } = {}) => {
  try {
    const response = await fetch(
      'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json'
    )
    const json = await response.json()
    // console.log('---------- json ----------->', json)
    return json.filter(
      h =>
        gender.includes(h.appearance.gender) && race.includes(h.appearance.race)
    )
  } catch (error) {
    return { error: 'wee' }
  }
}

export const getHeroById = async id => {
  if (id === 0) return null
  try {
    const response = await fetch(
      `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${id}.json`
    )
    const json = await response.json()
    return json
  } catch (error) {
    return { error: 'wee' }
  }
}
