import React from 'react'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className='footer-outer-container'>
      <div className='footer-inner-container'>
        <div className='footer-icon'> 
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        <div className='footer-data'>
          <div>
            <ul>
              <li>Audio description</li>
              <li>Investor relations</li>
              <li>Legal notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help</li>
              <li>Jobs</li>
              <li>Cookie preferences</li>
            </ul>
          </div>
          <div> 
            <ul>
              <li>Gift cards</li>
              <li>Terms of use</li>
              <li>Corporate information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media center</li>
              <li>Privacy</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>

        <div className='service-code'>
          <p>Service code</p> 
        </div>

        <div className='copyright'>
          <p>© 1997-2024 Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
