import React from 'react';

import {SubHeading} from '../../components'
import {images} from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app-header' id='home'>

    <div className="app-wrapper-info">
      <SubHeading title ="Chase the new flavour"/>
      <h1>The Key To Fine Dining</h1>
    </div>

  </div>
);

export default Header;
