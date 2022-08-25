import React from 'react';
import Header from '../Header';
import './style.scss';

const BaseLayout = ({children}) => {
  return (
    <div className="layout">
      <Header/>
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default BaseLayout
