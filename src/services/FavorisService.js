export const getFavorisFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('favoris') || [])
}

export const addFavorisToLocalStorage = id => {
  const tab = getFavorisFromLocalStorage()

  if (!tab.includes(id)) {
    tab.push(id)
  }

  localStorage.setItem('favoris', JSON.stringify(tab))
}
