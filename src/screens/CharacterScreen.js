import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Axios from 'axios'
import { FaShare } from 'react-icons/fa'
import Loader from '../components/loader'

const CharacterScreen = ({ history }) => {
  const [character, setCharacter] = useState(undefined)
  const { id: idCharacter } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    get()
  }, [])

  const get = async () => {
    try {
      const { data } = await Axios.get(
        `https://gateway.marvel.com:443/v1/public/characters/${idCharacter}?apikey=e74466c078cf03a51e11abdec65b254f&hash=6593b515c15ff8d46f53d37ef149c20c&ts=1581697076`
      )
      setCharacter(data.data.results[0])
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const back = () => {
    history.goBack()
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {character ? (
            <div className='character-screen--main'>
              <div className='header'>
                <div onClick={back}>
                  <i className='fas fa-chevron-left'></i>
                  <strong>Back</strong>
                </div>
              </div>
              <div className='character-screen--image'>
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                />
              </div>
              <div className='character-screen--backgroundimage'></div>
              <div className='character-screen--infos'>
                <div className='character-screen--title'>
                  <div className='character-screen--names'>
                    <h1 className='character-screen--heroname'>
                      {character.name}
                    </h1>
                    <span className='character-screen--realname'>
                      realName?
                    </span>
                  </div>
                  <div className='character-screen--actions'>
                    <button>
                      <FaShare size='1.5em' />
                    </button>
                  </div>
                </div>
                <div className='character-screen--description'>
                  {character.description || 'No description available'}
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  )
}

export default CharacterScreen
