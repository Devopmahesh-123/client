import React from 'react'
import { Link} from 'react-router-dom';

const SideBar = ({profile}) => {

  return (
        <nav className="navbar navbar-dark">
          <Link to="/dashboard" className="navbar-brand mx-4 mb-3">
            <h6 className="text-primary txt-size">
              <i className="fa fa-user-edit me-2"></i>ABC Company 
            </h6>
          </Link>
          <div className="d-flex align-items-center ms-4 mb-4 mt-3">
            <div className="position-relative">
              <img
                className="rounded-circle sp1"
                src={profile}
                alt=""
              />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
            </div>
            <div className="ms-3">
              <h6 className="mb-0" style={{color:'red'}}>Jhon Doe</h6>
              <span>Admin</span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <Link to="/dashboard" className="nav-item nav-link active" >
              <i className="fa fa-tachometer-alt me-2"></i>TodoList
            </Link>
          </div>
        </nav>
  )
}

export default SideBar