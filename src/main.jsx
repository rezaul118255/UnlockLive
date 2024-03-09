import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Shared/Navbar/Navbar.jsx'
import Footer from './Shared/Footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container" >
      <div className="wrapper">
        <Navbar />
        <App />
        <Footer />
      </div>

    </div>

  </React.StrictMode>,
)
