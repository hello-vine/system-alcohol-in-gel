import React from 'react';

import '../global.css';

import SystemMenu from '../components/system';

import Main from '../components/main';

import Footer from '../components/footer';

import Copyright from '../components/copyright';

function containerSystem({ children }) {

  return (

    <>

        <SystemMenu />
          
        <Main>
              
            {children}
              
        </Main>
          
        <Footer />
        
        <Copyright />

    </>
    
  );

}

export default containerSystem;