import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Display.css'

export default function Display(props) {
  const { state } = props.location
  const [fetchedData, setFetchedData] = useState()

  // async function getData() {
  //   const data = await fetch('http://localhost:4000/posts')
  //     .then((res) => res.json())
  //     .then((resData) => {
  //       console.log(resData)
  //     })
  // }

  //   getData()

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  const getData = async () => {
    const response = await fetch(`https://axelrestapi.herokuapp.com/posts`)
    const data = await response.json()
    console.log('data', data)
    // eslint-disable-next-line
    const filteredData = data.filter((data) => data.pincode == state)
    // console.log('new filtered data', filteredData)
    //setFetchedData(data)
    setFetchedData(filteredData)
  }
  return (
    <>
      <div>
        <h1>
          Signal Detector <br />
        </h1>
        {console.log('ffffffff', fetchedData)}
      </div>

      {fetchedData ? (
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
              <span>Signal: {fetchedData[0].networks.jio.signal_strength}</span>
              <br />
              <span>Data:{fetchedData[0].networks.jio.data_speed}</span>
            </p>
            <p className="">
              Airtel{'->'}
              <span>
                Signal: {fetchedData[0].networks.airtel.signal_strength}
              </span>
              <br />
              <span>Data:{fetchedData[0].networks.airtel.data_speed}</span>
            </p>
            <p>
              VI{'->'}
              <span>Signal: {fetchedData[0].networks.vi.signal_strength}</span>
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
      ) : (
        <>
          <h6>
            No Search results for pincode " <span>{state}</span> "
          </h6>
          <div>
            <h1>No Data Found ! Search with different Pincode</h1>
            <Link to='/pincode' type='submit'>
              <button>
                <div className='button-style'>New Pincode</div>
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  )
}
