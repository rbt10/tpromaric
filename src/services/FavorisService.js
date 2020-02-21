const FAVORIS = 'favoris'

export const getFavorisFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(FAVORIS)) || []
}

export const addFavorisToLocalStorage = id => {
  const tab = getFavorisFromLocalStorage()

  if (!tab.includes(id)) {
    tab.push(id)
  }

  localStorage.setItem(FAVORIS, JSON.stringify(tab))
}

export const removeFavorisFromLocalStorage = id => {
  let tab = getFavorisFromLocalStorage()

  if (tab.includes(id)) {
    tab = tab.filter(item => item !== id)
  }

  localStorage.setItem(FAVORIS, JSON.stringify(tab))
}
