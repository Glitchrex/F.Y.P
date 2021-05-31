import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Display.css'

export default function Display(props) {
  const { state } = props.location
  const [fetchedData, setFetchedData] = useState()
  const [length, setLength] = useState(false)
  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  const getData = async () => {
    const response = await fetch(
      `http://localhost:4000/posts/findbypincode/${state}`
    )
    const data = await response.json()
    console.log('data', data)
    console.log('length of data we got after GET Request', data.length)
    if (data.length === 0) {
      setLength(false)
    } else {
      setLength(true)
    }

    setFetchedData(data)
  }
  return (
    <>
      <div>
        <h1>
          Signal Detector <br />
        </h1>
      </div>

      {length ? (
        fetchedData ? (
          <>
            <h6>
              Search results for pincode " <span>{state}</span> "
            </h6>
            <div className='card'>
              <div>
                <h1>{fetchedData[0].pincode}</h1>
              </div>
              <p className='address'>{fetchedData[0].address}</p>
              <p>
                Jio{'->'}
                <span>
                  Signal: {fetchedData[0].networks.jio.signal_strength}
                </span>
                <br />
                <span>Data:{fetchedData[0].networks.jio.data_speed}</span>
              </p>
              <p className=''>
                Airtel{'->'}
                <span>
                  Signal: {fetchedData[0].networks.airtel.signal_strength}
                </span>
                <br />
                <span>Data:{fetchedData[0].networks.airtel.data_speed}</span>
              </p>
              <p>
                VI{'->'}
                <span>
                  Signal: {fetchedData[0].networks.vi.signal_strength}
                </span>
                <br />
                <span>Data:{fetchedData[0].networks.vi.data_speed}</span>
              </p>
              <p>
                BSNL{'->'}
                <span>
                  Signal: {fetchedData[0].networks.bsnl.signal_strength}
                </span>
                <br />
                <span>Data:{fetchedData[0].networks.bsnl.data_speed}</span>
              </p>
            </div>
            <Link to='/pincode' type='submit'>
              <button>
                <div className='button-style'>New Pincode</div>
              </button>
            </Link>
          </>
        ) : null
      ) : (
        <>
          <div className='error'>
            <h6 className='width-full'>
              No Search results for pincode " <span>{state}</span> "
            </h6>
            <div className='width-full'>
              <h1>No Data Found ! Search with different Pincode</h1>
              <Link to='/pincode' type='submit'>
                <button>
                  <div className='button-style'>New Pincode</div>
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}
