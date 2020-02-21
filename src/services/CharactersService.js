import Axios from 'axios'

const hash = '6593b515c15ff8d46f53d37ef149c20c'
const apikey = 'e74466c078cf03a51e11abdec65b254f'
const ts = '1581697076'

export async function getCharacter(id) {
  try {
    const { data } = await Axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${id}`,
      {
        params: {
          hash,
          apikey,
          ts
        }
      }
    )
    return data.data.results[0]
  } catch (e) {
    console.log(e)
  }
}

export async function get(nameStartsWith) {
  try {
    const { data } = await Axios.get(
      `https://gateway.marvel.com:443/v1/public/characters${nameStartsWith}`,
      {
        params: {
          hash,
          apikey,
          ts
        }
      }
    )
    return data.data
  } catch (e) {
    console.log(e)
  }
}
