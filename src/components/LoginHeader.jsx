import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';







const LoginHeader = () =>{
    return (
        <header className="bg-light" style={{  top: '0',position:'fixed', width: '100%', zIndex: 'auto', left:'0' }}>
        
        <div className="container-fluid" style={{ backgroundColor: '#5BBCFF', padding: '10px' }} >
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
            </a>
    
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" className="nav-link px-2  " style={{ color: '#FFFFFF', fontWeight: '700'}}>logo</a></li>
              <li id="logoName" className="nav-link px-2 text-white" >
                FINANCE MANAGER</li>
            </ul>
    
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control form-control-dark " placeholder="Search..." aria-label="Search"/>
            </form>
    
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Login</button>
              <button type="button" className="btn btn-outline-light me-2">Sign-up</button>
              
            </div>
            
          </div>
          
        </div>
        
      </header>

    )
}
export default LoginHeader;

