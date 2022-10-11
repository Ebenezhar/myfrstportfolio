import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  const navigateTo = (page) => {
    navigate(`/${page}`)
  }

  return (
    <nav className="navbar navbar-expand-lg nav-style" data-aos-once="true" data-aos="fade-down" style={{ position: "sticky" }}>
      <div className="container-fluid ">
        <a className="btn navbar-brand px-md-2 profile-name " href="/">EBENEZHAR</a>
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse me-3 navbar-collapse nav-head" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex justify-content-center mb-lg-0 " >
            <li className="nav-item ">
              <a className="nav-link nav-text" href="#" onClick={() => navigateTo('')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-text" href="#" onClick={() => navigateTo('Skills')}>Skills</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link nav-text" href="#" onClick={() => navigateTo('Works')}>Works</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link nav-text" href="#" onClick={() => navigateTo('Resume')}>Resume</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link nav-text" href="#" onClick={() => navigateTo('contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar