const FAVORIS = 'favoris'

export const getFavorisFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(FAVORIS)) || []
}

export const addFavorisToLocalStorage = character => {
  const tab = getFavorisFromLocalStorage()

  if (tab.find(t => t.id === character.id)) {
    tab.push(character)
  }

  localStorage.setItem(FAVORIS, JSON.stringify(tab))
}

export const removeFavorisFromLocalStorage = id => {
  let tab = getFavorisFromLocalStorage()

  if (tab.find(t => t.id === id)) {
    tab = tab.filter(item => item.id !== id)
  }

  localStorage.setItem(FAVORIS, JSON.stringify(tab))
}
