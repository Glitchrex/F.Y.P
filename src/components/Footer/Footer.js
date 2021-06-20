import React from 'react'
import './Footer.css'
//import { IconButton } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import TelegramIcon from '@material-ui/icons/Telegram'
import LocationOnIcon from '@material-ui/icons/LocationOn'
export const Footer = () => {
  return (
    <>
      <hr />
      <footer className='page-footer font-small mdb-color lighten-3 pt-4'>
        <div className='container text-center text-md-left'>
          <div className='row'>
            <div className='col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1'>
              <p>Accessing Signal and giving location of device</p>
              <p>
                The main idea behind our project is to help everyone to stay
                connected by accessing their location in order to provide
                accurate details of all the available Service providers in their
                area for calling and internet connectivity.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1'>
              <h5 className='font-weight-bold text-uppercase mb-4'>About</h5>

              <ul className='list-unstyled'>
                <li>
                  <p>
                    <a href='#!'>PROJECTS</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href='#!'>ABOUT US</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href='#!'>BLOG</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href='#!'>AWARDS</a>
                  </p>
                </li>
              </ul>
            </div>

            <div
              id='addresscolumn'
              className='col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1'
            >
              <div>
                <h5 className='font-weight-bold text-uppercase mb-4'>
                  Address
                </h5>
              </div>
              <div>
                <ul className='list-unstyled'>
                  <li>
                    <p
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                      }}
                    >
                      <EmailIcon style={{ color: '#5DA8DC' }} />
                      <span style={{ marginLeft: '9px' }}>fyp@gmail.com</span>
                    </p>
                  </li>
                  <li>
                    <p
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                      }}
                    >
                      <PhoneIcon style={{ color: '#15D01E' }} />
                      <span style={{ marginLeft: '7px' }}>+91 1234567890</span>
                    </p>
                  </li>
                  <li>
                    <p
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                      }}
                    >
                      <LocationOnIcon style={{ color: '#EF4B4F' }} />
                      <span style={{ marginLeft: '7px' }}>
                        Bengaluru, Karnataka
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div
              id='addresscolumn'
              className='col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1'
            >
              <div>
                <h5 className='font-weight-bold text-uppercase mb-4'>
                  Follow Us
                </h5>
              </div>
              <div>
                <ul className='list-unstyled'>
                  <li>
                    <p
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                      }}
                    >
                      <GitHubIcon style={{ color: 'black' }} />
                      <span style={{ marginLeft: '7px' }}>Github</span>
                    </p>
                  </li>
                  <li>
                    <p
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                      }}
                    >
                      <TelegramIcon style={{ color: '#26A7E4' }} />
                      <span style={{ marginLeft: '9px' }}>Telegram</span>
                    </p>
                  </li>
                  <li>
                    <p
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                      }}
                    >
                      <InstagramIcon style={{ color: '#EF4B4F' }} />
                      <span style={{ marginLeft: '7px' }}>Instagram</span>
                    </p>
                  </li>
                  <li>
                    <p
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                      }}
                    >
                      <FacebookIcon style={{ color: '#4867AA' }} />
                      <span style={{ marginLeft: '7px' }}>Facebook</span>
                    </p>
                  </li>
                  <li>
                    <p
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                      }}
                    >
                      <TwitterIcon style={{ color: '#5DA8DC' }} />
                      <span style={{ marginLeft: '7px' }}>Twitter</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ marginBottom: '20px' }}
          className='footer-copyright  text-center py-3'
        >
          © 2020 Copyright:
          <a href='https://github.com/cleverabhi'> Final Year Project</a>
        </div>
      </footer>
    </>
  )
}
