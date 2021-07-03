import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Display.scss'
import Jio from '../../assets/jio.png'
import Airtel from '../../assets/airtel.png'
import Vi from '../../assets/vi.png'
import Bsnl from '../../assets/bsnl.png'
import { BeatLoader } from 'react-spinners'
import {
  Poor,
  Good,
  Better,
  Best,
  Excellent,
} from '../SignalStrength/SignalStrength'

export default function Display(props) {
  const [visible, setVisible] = useState(false)
  const { state } = props.location
  const pincodeValue = state
  const [fetchedData, setFetchedData] = useState()
  const [length, setLength] = useState(false)
  const [bestSignalValue, setBestSignalValue] = useState(0)
  const [bestSignalName, setBestSignalName] = useState('')
  const [bestDataValue, setBestDataValue] = useState(0)
  const [bestDataName, setBestDataName] = useState('')
  let Signalvalue = 0
  let Signalname = ''
  let Datavalue = 0
  let Dataname = ''
  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 5000)
  }, [])
  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    const getnewFunc = () => {
      return bestDataName === Dataname ? (
        <div className='best_networks'>
          <div className='card_content'>
            <div className='card_logo'>
              {bestDataName === 'Jio' ? (
                <img className='image_network' src={Jio} alt='logo' />
              ) : bestDataName === 'Airtel' ? (
                <img className='image_network' src={Airtel} alt='logo' />
              ) : bestDataName === 'Vi' ? (
                <img className='image_network' src={Vi} alt='logo' />
              ) : (
                <img className='image_network' src={Bsnl} alt='logo' />
              )}
            </div>
            <div className='card_body'>{bestDataValue}</div>
          </div>
          <div className='card_content'>
            <div className='card_logo'>
              {bestSignalName === 'Jio' ? (
                <img className='image_network' src={Jio} alt='logo' />
              ) : bestSignalName === 'Airtel' ? (
                <img className='image_network' src={Airtel} alt='logo' />
              ) : bestSignalName === 'Vi' ? (
                <img className='image_network' src={Vi} alt='logo' />
              ) : (
                <img className='image_network' src={Bsnl} alt='logo' />
              )}
            </div>
            <div className='card_body'>{bestSignalValue}</div>
          </div>
        </div>
      ) : (
        <h5>Looking for Best Data and Signal Network Provider in your Area</h5>
      )
    }
    getnewFunc()
  }, [Dataname, bestDataName, bestDataValue, bestSignalName, bestSignalValue])

  const getData = async () => {
    const response = await fetch(
      `https://axelrestapi.herokuapp.com/posts/findbypincode/${state}`
    )
    const data = await response.json()
    // console.log('data', data)
    // console.log('length of data we got after GET Request', data.length)
    if (data.length === 0) {
      setLength(false)
    } else {
      setLength(true)
    }

    setFetchedData(data)
    if (setLength === true) {
      const signalarray = [
        { name: 'Jio', value: data[0].networks.jio.signal_strength },
        { name: 'Airtel', value: data[0].networks.airtel.signal_strength },
        { name: 'Vi', value: data[0].networks.vi.signal_strength },
        { name: 'Bsnl', value: data[0].networks.bsnl.signal_strength },
      ]
      for (let index = 0; index < signalarray.length; index++) {
        if (signalarray[index].value > bestSignalValue) {
          Signalvalue = signalarray[index].value
          Signalname = signalarray[index].name
        }
      }
      setBestSignalValue(Signalvalue)
      setBestSignalName(Signalname)
      console.log('1', bestSignalValue, bestSignalName)
      const dataarray = [
        { name: 'Jio', value: data[0].networks.jio.data_speed },
        { name: 'Airtel', value: data[0].networks.airtel.data_speed },
        { name: 'Vi', value: data[0].networks.vi.data_speed },
        { name: 'Bsnl', value: data[0].networks.bsnl.data_speed },
      ]
      for (let index = 0; index < dataarray.length; index++) {
        if (dataarray[index].value > bestDataValue) {
          Datavalue = dataarray[index].value
          Dataname = dataarray[index].name
        }
      }
      setBestDataValue(Datavalue)
      setBestDataName(Dataname)

      console.log('2', bestDataValue, bestDataName)
    }
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
          <div delay={4000}>
            <h6>
              Search results for pincode " <span>{state}</span> "
            </h6>
            <div className='card'>
              <div className='main_content'>
                <h4 className='heading'>
                  Pincode:{' '}
                  <span className='pincode_font'>{fetchedData[0].pincode}</span>
                </h4>
                <h4 className='heading address'>
                  Address:{' '}
                  <span className='address_font'>{fetchedData[0].address}</span>
                </h4>
              </div>
              <div className='card_group'>
                <div className='card_content'>
                  <div className='card_logo'>
                    <img className='image_network' src={Jio} alt='jiologo' />
                  </div>
                  <div className='card_body'>
                    <div>
                      <h4>
                        Signal:{' '}
                        {/* <span>
                          {fetchedData[0].networks.jio.signal_strength}
                          </span> */}
                        {fetchedData[0].networks.jio.signal_strength === 20 ? (
                          <Poor />
                        ) : fetchedData[0].networks.jio.signal_strength ===
                          40 ? (
                          <Good />
                        ) : fetchedData[0].networks.jio.signal_strength ===
                          60 ? (
                          <Better />
                        ) : fetchedData[0].networks.jio.signal_strength ===
                          80 ? (
                          <Best />
                        ) : (
                          <Excellent />
                        )}
                      </h4>

                      {/* <br /> */}
                      <h4>
                        Data: {fetchedData[0]?.networks.jio.data_speed}Mbps
                      </h4>
                    </div>
                  </div>
                </div>
                <div className='card_content'>
                  <div className='card_logo'>
                    <img
                      className='image_network'
                      src={Airtel}
                      alt='airtellogo'
                    />
                  </div>
                  <div className='card_body'>
                    <div>
                      <h4>
                        Signal:
                        {/* <span>
                          {fetchedData[0].networks.airtel.signal_strength}
                          </span> */}
                        {fetchedData[0].networks.airtel.signal_strength ===
                        20 ? (
                          <Poor />
                        ) : fetchedData[0].networks.airtel.signal_strength ===
                          40 ? (
                          <Good />
                        ) : fetchedData[0].networks.airtel.signal_strength ===
                          60 ? (
                          <Better />
                        ) : fetchedData[0].networks.airtel.signal_strength ===
                          80 ? (
                          <Best />
                        ) : (
                          <Excellent />
                        )}
                      </h4>
                      {/* <br /> */}
                      <h4>
                        Data: {fetchedData[0].networks.airtel.data_speed}
                        Mbps
                      </h4>
                    </div>
                  </div>
                </div>
                <div className='card_content'>
                  <div className='card_logo'>
                    <img className='image_network' src={Vi} alt='vilogo' />
                  </div>
                  <div className='card_body'>
                    <div>
                      <h4>
                        Signal:{' '}
                        {/* <span>
                          {fetchedData[0].networks.vi.signal_strength}
                          </span> */}
                        {fetchedData[0].networks.vi.signal_strength === 20 ? (
                          <Poor />
                        ) : fetchedData[0].networks.vi.signal_strength ===
                          40 ? (
                          <Good />
                        ) : fetchedData[0].networks.vi.signal_strength ===
                          60 ? (
                          <Better />
                        ) : fetchedData[0].networks.vi.signal_strength ===
                          80 ? (
                          <Best />
                        ) : (
                          <Excellent />
                        )}
                      </h4>
                      {/* <br /> */}
                      <h4>Data: {fetchedData[0].networks.vi.data_speed}Mbps</h4>
                    </div>
                  </div>
                </div>
                <div className='card_content'>
                  <div className='card_logo'>
                    <img className='image_network' src={Bsnl} alt='bsnllogo' />
                  </div>
                  <div className='card_body'>
                    <div>
                      <h4>
                        Signal:{' '}
                        {/* <span>
                          {fetchedData[0].networks.bsnl.signal_strength}
                          </span> */}
                        {fetchedData[0].networks.bsnl.signal_strength === 20 ? (
                          <Poor />
                        ) : fetchedData[0].networks.bsnl.signal_strength ===
                          40 ? (
                          <Good />
                        ) : fetchedData[0].networks.bsnl.signal_strength ===
                          60 ? (
                          <Better />
                        ) : fetchedData[0].networks.bsnl.signal_strength ===
                          80 ? (
                          <Best />
                        ) : (
                          <Excellent />
                        )}
                      </h4>
                      {/* <br /> */}
                      <h4>
                        Data: {fetchedData[0].networks.bsnl.data_speed}
                        Mbps
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div>{getnewFunc()}</div> */}
            <Link to='/search' type='submit'>
              <button style={{ width: '50%' }}>
                <div>New Pincode</div>
              </button>
            </Link>
          </div>
        ) : null
      ) : visible ? (
        <>
          <div className='error' delay={5000}>
            <h6 className='width-full'>
              No Search results for pincode " <span>{state}</span> "
            </h6>
            <div className='width-full'>
              <h4>
                Sorry!We were unable to found any Network Providers Data in your
                Area. Try searching with different Pincode
              </h4>
              <Link to='/search' type='submit'>
                <button style={{ width: '80%' }}>
                  <div>New Pincode</div>
                </button>
              </Link>{' '}
              <br />
              OR <br />{' '}
              <div>
                {console.log(pincodeValue)}
                <Link
                  to={{
                    pathname: '/feedbackform',
                    state: pincodeValue,
                  }}
                >
                  Help us by providing network provider details manually
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <BeatLoader loading />
      )}
    </>
  )
}
