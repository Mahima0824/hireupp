import React, { useState, useEffect } from 'react'
import Layout from './Layout/Layout'
import Routespath from './Routespaths/Routespath'
import { JobProvider } from './context/JobContext'
import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from './context/ThemeContext'


const App = () => {



  return (
  <>
     
        <ThemeProvider>
          <AuthProvider>
            <JobProvider>
              <Layout>
                <Routespath />
              </Layout>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </JobProvider>
          </AuthProvider>
        </ThemeProvider>
    
    </>
  );
};

export default App;
