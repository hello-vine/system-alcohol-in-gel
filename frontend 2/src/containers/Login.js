import React from 'react';

import '../global.css';

import Main from '../components/main';

import Copyright from '../components/copyright';

function ContainerLogin({ children }) {

  return (

    <>
          
        <Main>
              
            {children}
              
        </Main>
          
        <Copyright />

    </>
    
  );

}

export default ContainerLogin;