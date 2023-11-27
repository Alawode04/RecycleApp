import React from 'react'

const NavigationBar = () => {
  return (
    <div>
        <header data-bs-theme="dark">
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-warning">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add-post">Add-Post</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
            
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
    </div>
  )
}

export default NavigationBar