import React from 'react';

import '../global.css';

import Header from '../components/header';

import Main from '../components/main';

import Footer from '../components/footer';

import Copyright from '../components/copyright';

function App({ children }) {

  return (

    <>

        <Header />
          
        <Main>
              
            {children}
              
        </Main>
          
        <Footer />
        
        <Copyright />

    </>
    
  );

}

export default App;