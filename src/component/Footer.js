import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
            <div className="container-fluid pt-4 px-4 bodyColor" style={{borderTop:"1px solid #80808030"}}>
                <div className="rounded-top p-4">
                    <div className="row text-center">
                        <div className="col-12">
                            &copy; <Link to="#">ABC Company</Link>, All Right Reserved. 
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Footer;