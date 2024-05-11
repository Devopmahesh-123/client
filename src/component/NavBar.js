import React from 'react'
import { Link} from "react-router-dom";
import user from '../img/user.jpg'

const Navbar = ({handleShow,sideButton,profile}) => {

  return (
         <nav className="navbar navbar-expand sticky-top px-4 py-0"  style={{backgroundColor:'#fff',borderBottom:'1px solid #80808030'}}>
                <Link to="index.html" className="navbar-brand d-flex d-lg-none me-4">
                    <h2 className="text-primary mb-0"><i className="fa fa-user-edit"></i></h2>
                </Link>
                <Link to="#" className="sidebar-toggler flex-shrink-0" onClick={(event)=>sideButton(event)}>
                    <i className="fa fa-bars"></i>
                </Link>
                <form className="d-none d-md-flex ms-4">
                    <input className="form-control inputBorder searchcls inputField" type="search" placeholder="Search" />
                </form>
                <div className="navbar-nav align-items-center ms-auto">
                    <div className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa fa-envelope me-lg-2"></i>
                            <span className="d-none d-lg-inline-flex">Message</span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end rounded-0 rounded-bottom m-0">
                            <Link to="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle sp2" src={user} alt=""/>
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0 msgtext">Jhon send you Link message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </Link>
                            <hr className="dropdown-divider"/>
                            <Link to="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle sp3" src={user} alt=""/>
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0 msgtext">Jhon send you Link message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </Link>
                            <hr className="dropdown-divider"/>
                            <Link to="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle sp4" src={user} alt=""/>
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0 msgtext">Jhon send you Link message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </Link>
                            <hr className="dropdown-divider"/>
                            <Link to="#" className="dropdown-item text-center">See all message</Link>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa fa-bell me-lg-2"></i>
                            <span className="d-none d-lg-inline-flex">Notificatin</span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end rounded-0 rounded-bottom m-0">
                            <Link to="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0 msgtext">Profile updated</h6>
                                <small>15 minutes ago</small>
                            </Link>
                            <hr className="dropdown-divider"/>
                            <Link to="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0 msgtext">New user added</h6>
                                <small>15 minutes ago</small>
                            </Link>
                            <hr className="dropdown-divider"/>
                            <Link to="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0 msgtext">Password changed</h6>
                                <small>15 minutes ago</small>
                            </Link>
                            <hr className="dropdown-divider"/>
                            <Link to="#" className="dropdown-item text-center">See all notifications</Link>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img className="rounded-circle me-lg-2 sp5" src={profile} alt=""/>
                            <span className="d-none d-lg-inline-flex">John Doe</span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end rounded-0 rounded-bottom m-0">
                            <Link to="Profile" className="dropdown-item">My Profile</Link>
                            <Link to="#" className="dropdown-item" onClick={(event)=>handleShow(event)}>Change Password</Link>
                            <Link to="/" className="dropdown-item">Log Out</Link>
                        </div>
                    </div>
                </div>
        </nav>
  )
}

export default Navbar