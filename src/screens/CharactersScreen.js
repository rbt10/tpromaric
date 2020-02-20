import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './style.css'
import ReactPaginate from 'react-paginate'
import Character from '../components/character'

const CharactersScreen = () => {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(0)
  const [offset, setOffset] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    const handler = setTimeout(() => {
      get()
    }, 500)
    return () => {
      clearTimeout(handler)
    }
  }, [offset, name])

  const get = async () => {
    try {
      const filterName = name ? `&nameStartsWith=${name}` : ''
      const { data } = await Axios.get(
        `https://gateway.marvel.com:443/v1/public/characters?apikey=e74466c078cf03a51e11abdec65b254f&hash=6593b515c15ff8d46f53d37ef149c20c&ts=1581697076&offset=${offset}${filterName}`
      )
      setCharacters(data.data.results)
      setPage(Math.ceil(data.data.total / 20))
    } catch (err) {
      console.log(err)
    }
  }

  const handlePageClick = data => {
    console.log('data', data)
    const selected = data.selected
    const o = Math.ceil(selected * 20)
    setOffset(o)
  }

  const search = event => {
    const { value } = event.target
    setName(value)
  }

  return (
    <div>
      <form className='form-search'>
        <input
          onChange={search}
          type='text'
          name='search'
          placeholder='Search...'
        />
      </form>
      {characters.length > 0 ? (
        <div className='characters'>
          {characters.map(perso => (
            <Character key={perso.id} character={perso}></Character>
          ))}
        </div>
      ) : (
        <></>
      )}
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={page}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  )
}

export default CharactersScreen
