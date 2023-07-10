import React from 'react'
import user from "../../assets/images/user.png"
import './Header.css';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-border">
            <div className="container-fluid">
                <div>
                    <a className="navbar-brand" href="#">
                        <span>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8tEHDwcEbguXkJrXvVJcb85fN2CsCaoZshjUcqDwAWBhFwkwoIBcLBsn1fuEi5_kgHs&usqp=CAU' className='img-fluid logo' />
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse navbar-align" id="navbarSupportedContent">
                    <div className='navbar-leftmenu'>
                        <form className="d-flex" role="search">
                            <p><span><i className="bi bi-search"></i></span></p> {/* <i className="fa-thin fa-magnifying-glass"></i>*/}
                            <input className="form-control me-2 form-search" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <div className='navbar-leftmenu'>
                            <img src={user} className='img-fluid user-img' />
                            <div >
                                <p className='user-details'>Demo User
                                    <span>demo@demo.com</span>
                                </p>
                                {/* <p>rajareddy@tmobile.com</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header