import { useEffect } from 'react'
import './information.css'
import Android1 from '../../assets/android1.jpg'
import Android2 from '../../assets/android2.jpg'
import Android3 from '../../assets/android3.jpg'
import Android4 from '../../assets/android4.jpg'
import ios1 from '../../assets/ios1.jpg'
import ios2 from '../../assets/ios2.jpg'
import ios3 from '../../assets/ios3.jpg'
export default function Information() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='bodyofinfo'>
      <div>
        <h4 style={{ fontSize: 'xx-large' }}>Information based on research</h4>
      </div>
      <div>
        <p className='ptag'>
          We all often face slow internet and call drop issues on our phone
          despite having full coverage. So what's the actual issue ?
        </p>
      </div>
      <div>
        <br />
      </div>
      <div>
        <p className='ptag'>
          Well, Signal bars on your phone aren’t the most accurate
          representation of your network strength. In reality, every smartphone
          company employs different scales for bars- that’s the reason why you
          see a variation in the bar count on your friend’s phone running the
          same operator as you.
        </p>
      </div>
      <h4 className='ptag'>
        So, how to check the true network signal quality?
      </h4>
      <div>
        <h4 style={{ textDecoration: 'underline' }}>On Android:</h4>
      </div>
      <div>
        <h4>
          To check the network signal quality on Android, follow the below steps
          in your phone's setting app.
        </h4>
      </div>
      <div>
        <div className='android_group'>
          <div>
            <p className='ptag'>Step 1:</p>
            <img className='android-images' src={Android1} alt='jiologo' />
          </div>
          <div>
            <p className='ptag'>Step 2:</p>
            <img className='android-images' src={Android2} alt='airtellogo' />
          </div>
          <div>
            <p className='ptag'>Step 3:</p>
            <img className='android-images' src={Android3} alt='vilogo' />
          </div>
          <div>
            <p className='ptag'>Step 4:</p>
            <img className='android-images' src={Android4} alt='bsnllogo' />
          </div>
        </div>
        <div>
          <p className='ptag'>
            1{')'} On your Android device, open Settings and scroll down to the
            bottom.
            <br />2{')'} Click on About Phone and select Status.
            <br />3{')'} On the following screen, tap Network, and you’ll be
            able to see signal strength for the SIM card operators on your
            device. It’ll comprise of two numbers- dBm and ASU. For starters,
            dBm {'('}decibels per milliwatts{')'} indicates your phone’s signal
            strength, and the value usually ranges from -50 to -110 dBm. The
            higher the absolute negative number, the lower will be the signal.
            In other words, the closer that number is to 0, the stronger the
            signal. For example, -70 dBm is stronger than -90 dBm.
          </p>
        </div>
        <div>
          <p className='ptag'>
            Generally, a signal of greater than -60 dBm is considered excellent
            for clear calls and a speedy internet connection. It is followed by
            the -60 to -75 dBm scale, which shows good signal levels.
          </p>
          <p className='ptag'>
            -76 to -90 dBm is considered suitable for reasonable call quality
            and data speeds. Whereas, anything post -90 to -100 dBm falls in the
            territory of weak signal strength. ASU is the Arbitrary Strength
            Unit and denotes the rate at which your phone is updating its
            location from the tower signals. It can also be used to calculate
            the real signal.
          </p>
          <p className='ptag'>
            The range of strength measured in dBm. For more detailed information
            on your network connection, you can use apps like Open Signal, LTE
            Discovery, and Network Signal Info on your Android.
          </p>
        </div>
      </div>
      <div>
        <h4 style={{ textDecoration: 'underline' }}>On IOS:</h4>
      </div>
      <div>
        <h4>
          On iPhone, you can use iOS’s hidden Field Test menu to check your
          phone’s network signal strength, using the steps below.
        </h4>
      </div>
      <div>
        <div className='android_group'>
          <div>
            <p className='ptag'>Step 1:</p>
            <img className='android-images' src={ios1} alt='jiologo' />
          </div>
          <div>
            <p className='ptag'>Step 2:</p>
            <img className='android-images' src={ios2} alt='airtellogo' />
          </div>
          <div>
            <p className='ptag'>Step 3:</p>
            <img className='android-images' src={ios3} alt='vilogo' />
          </div>
        </div>
        <div>
          <p className='ptag'>
            1{')'} On your iPhone, open the Phone app and dial *3001#12345#*.
            Make sure that WiFi is turned off.
            <br />2{')'} Once you dial the above code, the Field Test menu will
            appear on the screen.
            <br />3{')'} Now, select LTE and tap ‘Serving Cell Meas.’ <br /> 4
            {')'} Here, rsrp0 denotes the signal strength from your primary
            tower, i.e., the closest one to your location. Whereas, rsrp1 shows
            the signal strength from the next nearest unit.
          </p>
        </div>
        <div>
          <p className='ptag'>
            RSRP indicates the average power received from the reference signal.
            Again, the closer the number is to zero, the stronger the signal. As
            mentioned earlier, a signal greater than -60 dBm is excellent,
            whereas the range around -80 dBm is considered good enough. Values
            lower than -100 dBm depict weak signals
          </p>
          <p className='ptag'>
            In the same menu, you’ll also find RSRQ, which reflects the quality
            of the received signal. It typically ranges from 19.5 dB to -3 dB
            with a smaller number indicating better quality.
          </p>
        </div>
        <div>
          <p className='ptag'> <b>
            
             Getting all things together
            </b>
             </p>
            
          </div>
          <div>
          <p className='ptag'>
            We would like to know what’s the signal strength at your location?
            Is it good, average, or bad? Also, feel free to reach us for any
            doubts or queries.
          </p>
        </div>
      </div>
    </div>
  )
}
