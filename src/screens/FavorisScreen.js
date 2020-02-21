import React, { useState, useEffect } from 'react'
import Loader from '../components/loader'

const FavorisScreen = () => {
  const [favoris, setFavoris] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFavoris()
  }, [])

  const getFavoris = async () => {
    const favorisFromLocalStorage = JSON.parse(localStorage.getItem('favoris'))

    setFavoris(favorisFromLocalStorage)

    setLoading(false)
  }

  if (loading) {
    return <Loader />
  }

  if (favoris.length === 0) {
    return <div>Aucun favoris.</div>
  }

  return <div></div>
}

export default FavorisScreen
