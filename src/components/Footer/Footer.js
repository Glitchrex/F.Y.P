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
import ExploreIcon from '@material-ui/icons/Explore'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
export const Footer = () => {
  return (
    <>
      <hr />
      <footer id='contact'>
        <div className='footer'>
          <div className='footer_content'>
            <h4>Accessing Signal and giving location of device</h4>
            
            <p>
              The main idea behind our project is to help everyone to stay
              connected by providing them 
              details of all the available Service providers in their area for
              calling and internet connectivity.

            </p>
            <p>
              For the time being we have limited data, but you can also contribute by providing us info. It would be a great help if you contribute.
            </p>
          </div>

          <div className='footer_content'>
            <h4 className='footer_ch'>About us</h4>

            <ul className='footer_cb'>
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
              <li>
                <p>
                  <a href='#!'>AMBASSADORS</a>
                </p>
              </li>
              <li>
                <p>
                  <a href='#!'>INFLUENCER</a>
                </p>
              </li>
            </ul>
          </div>

          <div className='footer_content'>
            <h4 className='footer_ch'>Contact us</h4>
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
                    <span style={{ marginLeft: '9px' }}>
                      <a href='mailto: fyp@gmail.com'>fyp@gmail.com</a>
                    </span>
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
                    <span style={{ marginLeft: '7px' }}>
                      <a href='tel:+91 1234567890'>+91 1234567890</a>
                    </span>
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
                      {' '}
                      <a
                        href='https://www.google.com/maps/place/Karnataka/@15.0062597,74.0733686,7z/data=!3m1!4b1!4m5!3m4!1s0x3ba35a4c37bf488f:0x41f1d28cd1757cd5!8m2!3d15.3172775!4d75.7138884'
                        target='_blank'
                        rel='noreferrer'
                      >
                        {' '}
                        Karnataka, India
                      </a>
                    </span>
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
                    <LocationOnIcon style={{ color: '#35A953' }} />
                    <span style={{ marginLeft: '7px' }}>
                      <a href='/' rel='noopener noreferrer'>
                        Support us
                      </a>
                    </span>
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
                    <ExploreIcon style={{ color: '#FABD04' }} />
                    <span style={{ marginLeft: '7px' }}>
                      <a href='/' rel='noopener noreferrer'>
                        Destinations
                      </a>
                    </span>
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
                    <ContactSupportIcon style={{ color: '#658DAF' }} />
                    <span style={{ marginLeft: '7px' }}>
                      <a href='/' rel='noopener noreferrer'>
                        Sponsorships
                      </a>
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className='footer_content'>
            <h4 className='footer_ch'>Social Media</h4>
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
                <li>
                  <p
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <LinkedInIcon style={{ color: '#0B67C2' }} />
                    <span style={{ marginLeft: '7px' }}>Linkedin</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div
          style={{ marginBottom: '20px' }}
          className='footer-copyright  text-center py-3'
        >
          © 2021 Copyright:
          <a href='https://github.com/cleverabhi'> Final Year Project</a>
        </div>
      </footer>
    </>
  )
}
