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
      <footer class='page-footer font-small mdb-color lighten-3 pt-4'>
        <div class='container text-center text-md-left'>
          <div class='row'>
            <div class='col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1'>
              {/* <h5 class='font-weight-bold text-uppercase mb-4'>
                Footer Content
              </h5> */}
              <p>Accessing Signal and giving location of device</p>
              <p>
                The main idea behind our project is to help everyone to stay
                connected by accessing their location in order to provide
                accurate details of all the available Service providers in their
                area for calling and internet connectivity.
              </p>
            </div>

            <div class='col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1'>
              <h5 class='font-weight-bold text-uppercase mb-4'>About</h5>

              <ul class='list-unstyled'>
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
              class='col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1'
            >
              <div>
                <h5 class='font-weight-bold text-uppercase mb-4'>Address</h5>
              </div>
              <div>
                <ul class='list-unstyled'>
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
              class='col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1'
            >
              <div>
                <h5 class='font-weight-bold text-uppercase mb-4'>Follow Us</h5>
              </div>
              <div>
                <ul class='list-unstyled'>
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
          class='footer-copyright  text-center py-3'
        >
          © 2020 Copyright:
          <a href='https://github.com/cleverabhi'> Final Year Project</a>
        </div>
      </footer>
      {/* <footer class="page-footer font-small stylish-color-dark pt-4">
  <div class="container text-center text-md-left">
    <div class="row">
      <hr class="clearfix w-100 d-md-none"/>

      <div class="col-md-2 mx-auto">

        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href='/' >Link 1</a>
          </li>
          <li>
            <a href='/' >Link 2</a>
          </li>
          <li>
            <a href='/' >Link 3</a>
          </li>
          <li>
            <a href='/' >Link 4</a>
          </li>
        </ul>

      </div>

      <hr class="clearfix w-100 d-md-none"/>

      <div class="col-md-2 mx-auto">

        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href='/' >Link 1</a>
          </li>
          <li>
            <a href='/' >Link 2</a>
          </li>
          <li>
            <a href='/' >Link 3</a>
          </li>
          <li>
            <a href='/' >Link 4</a>
          </li>
        </ul>

      </div>

      <hr class="clearfix w-100 d-md-none"/>

      <div class="col-md-2 mx-auto">

        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href='/' >Link 1</a>
          </li>
          <li>
            <a href='/' >Link 2</a>
          </li>
          <li>
            <a href='/' >Link 3</a>
          </li>
          <li>
            <a href='/' >Link 4</a>
          </li>
        </ul>

      </div>

    </div>

  </div>

  <hr/>
  <ul class="list-unstyled list-inline text-center py-2">
    <li class="list-inline-item">
      <h5 class="mb-1">Register for free</h5>
    </li>
    <li class="list-inline-item">
      <a href='/'  class="btn btn-danger btn-rounded">Sign up!</a>
    </li>
  </ul>

  <hr/>

  <ul class="list-unstyled list-inline text-center">
    <li class="list-inline-item">
      <a href='/' class="btn-floating btn-fb mx-1">
        <i class="fab fa-facebook-f"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a href='/' class="btn-floating btn-tw mx-1">
        <i class="fab fa-twitter"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a href='/' class="btn-floating btn-gplus mx-1">
        <i class="fab fa-google-plus-g"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a href='/' class="btn-floating btn-li mx-1">
        <i class="fab fa-linkedin-in"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a href='/' class="btn-floating btn-dribbble mx-1">
        <i class="fab fa-dribbble"> </i>
      </a>
    </li>
  </ul>
  <div style={{marginBottom:"20px"}} class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href='/' > Signal Detector</a>
  </div>
</footer> */}
    </>
  )
}
