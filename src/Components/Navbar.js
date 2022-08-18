import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  const navigateTo = (page) => {
    navigate(`/${page}`)
  }

  return (
    <nav class="navbar navbar-expand-lg nav-style" data-aos-once="true" data-aos="fade-down" style={{ position: "sticky" }}>
      <div class="container-fluid ">
        <a class="btn navbar-brand px-lg-2 profile-name" href="/">EBENEZHAR</a>
        <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse me-3 navbar-collapse nav-head" id="navbarSupportedContent">
          <ul class="navbar-nav d-flex justify-content-center mb-lg-0 " >
            <li class="nav-item ">
              <a class="nav-link nav-text" href="#" onClick={() => navigateTo('')}>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-text" href="#" onClick={() => navigateTo('Skills')}>Skills</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link nav-text" href="#" onClick={() => navigateTo('Works')}>Works</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link nav-text" href="#" onClick={() => navigateTo('Resume')}>Resume</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link nav-text" href="#" onClick={() => navigateTo('contact')}>Contact</a>
            </li>            
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar