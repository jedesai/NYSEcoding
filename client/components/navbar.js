import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <h1>Nav</h1>
    <nav>
      <Link to="/listAllCompanies">All Companies</Link>
      <Link to="/fileupload">File Upload</Link>
    </nav>
    <hr />
  </div>
)

export default Navbar
