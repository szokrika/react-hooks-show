import React, { useState, useEffect } from 'react'

export default function EffectHooks({ id = 1 }) {
  const [photo, setPhoto] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(r => r.json())
      .then(json => {
        setPhoto(json)
        setLoading(false)
      })
  }, [id])

  return (
    <div>
      <div>EffectHooks</div>
      <hr />
      {loading && <div>Loading...</div>}
      {photo && <img alt={photo.title} src={photo.thumbnailUrl} />}
    </div>
  )
}
