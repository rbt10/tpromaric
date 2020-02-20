import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './style.css'
import ReactPaginate from 'react-paginate'
import Character from '../components/character'
import Loader from '../components/loader'
import logo from '../assets/marvelLogo.svg'
import { motion } from 'framer-motion'

const CharactersScreen = props => {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(0)
  const [offset, setOffset] = useState(0)
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(true)

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)'
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: 'rgba(255, 255, 255, 1)'
    }
  }

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
    } finally {
      setLoading(false)
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
      <div className='searchbar'>
        <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='-215.19 -86.608 1000 402.473'
          className='item'
        >
          <motion.path
            d='M631.063,7.184v-61.603H459.644l-28.191,205.803L403.557-54.418H341.74l6.925,54.915
            c-7.14-14.068-32.449-54.915-88.146-54.915c-0.367-0.024-61.901,0-61.901,0l-0.237,299.974L153.324-54.418l-80.959-0.047
            L25.753,256.349L25.777-54.42h-77.483l-27.933,174.585l-27.208-174.583h-77.508v337.906h61.036V120.618l27.764,162.866h32.449
            l27.374-162.866v162.866H81.935l7.14-51.995h47.374l7.116,51.995l115.521,0.071h0.094v-0.071h0.072h0.072V173.799l14.162-2.063
            l29.319,111.819h0.072h59.61h0.07l-0.024-0.071h0.106h0.072l-38.475-131.057c19.498-14.422,41.513-51.047,35.654-86.084V66.32
            c0.07,0.474,36.316,217.38,36.316,217.38l71.065-0.216L515.83-22.8v306.285h115.236v-60.773h-54.7v-77.496h54.7V83.518h-54.7
            V7.184H631.063z M96.265,177.905l16.758-144.461l17.4,144.461H96.265z M273.684,111.201c-4.697,2.278-9.595,3.417-14.363,3.417
            V5.927c0.083,0,0.179-0.022,0.297-0.022c4.78-0.024,40.419,1.446,40.419,53.774C300.037,87.052,287.916,104.299,273.684,111.201
             M754.044,222.665v60.772H641.63V-54.465h60.526v277.13H754.044z'
            variants={icon}
            initial='hidden'
            animate='visible'
            transition={{
              default: { loop: Infinity, duration: 7, ease: 'easeInOut' },
              fill: { loop: Infinity, duration: 7, ease: [1, 0, 0.8, 1] }
            }}
          />
        </motion.svg>
        {/* <img src={logo} /> */}
        <form className='form-search'>
          <input
            onChange={search}
            type='text'
            name='search'
            placeholder='Search...'
          />
        </form>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {characters.length > 0 ? (
            <div className='characters'>
              {characters.map(perso => (
                <Character
                  key={perso.id}
                  character={perso}
                  history={props.history}
                ></Character>
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
        </>
      )}
    </div>
  )
}

export default CharactersScreen
