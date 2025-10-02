import React from 'react';
import './header.css';
import image from '../../assets/images/image.png';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import Notification from '@mui/icons-material/NotificationsNone';
import PortraitIcon from '@mui/icons-material/Portrait';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';



const Header = () => {
  return (
    <div className='header-outer-container'>
      <div className='header-container'>
        
        <div className='header-left'>
          <ul>
            <li>
              <img src={image} alt="netflix logo" width="100" />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        
        <div className='header-right'>
          <ul>
            <li> <FindInPageIcon/></li>
            <li> <Notification/></li>
            <li> <PortraitIcon/></li>
            <li> <ArrowDropDownCircleIcon/></li>
        
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Header;
