import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./topbar.css"

export default function Topbar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })

    }
    return (
        <div className="top">
            <div className="topLeft">
                <i className=" topIcons fas fa-blog"></i>
                <i className=" topIcons fab fa-twitter"></i>
                <i className=" topIcons fab fa-instagram-square"></i>
                <i className=" topIcons fab fa-facebook-f"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItems"><Link to="/" className="link">HOME</Link></li>
                    <li className="topListItems"><Link to="/about" className="link">ABOUT</Link></li>
                    <li className="topListItems"><Link to="/contact" className="link">CONTACT</Link></li>
                    <li className="topListItems"><Link to="/write" className="link">WRITE</Link></li>
                    <li className="topListItems" onClick={handleLogout}>{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link to="/settings">
                        <img className="topImage" src={PF + user.profilePic} alt="" />
                    </Link>
                ) : (
                    <>
                        <ul className="topList">
                            <li className="topListItems">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItems">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    </>
                )
                }
                <i className=" topSearchIcons fab fa-searchengin"></i>
            </div>

        </div>
    )
}
