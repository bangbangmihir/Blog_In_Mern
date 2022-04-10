import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import './sidebar.css'

export default function Sidebar() {
    const [cats, setcats] = useState([]);

    useEffect(() => {
        const getcats = async () => {
            const res = await axios.get("/categories");
            setcats(res.data);
        };
        getcats();
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItems">
                <span className="sidebarTitle">ABOUT ME</span>
                <div className="sidebarImg">
                    <img src="https://source.unsplash.com/collection/190727/250x350" alt=""></img>
                </div>
                <p className="desc">it is the description of sidebar </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {   
                        cats.map((c)=>(
                        <Link to={`/?cat=${c.name}`} className="link">


                        <li className="sidebarListitems">{c.name}</li>
                        </Link>
                        ))
                    }
                        

                    

                </ul>

            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarsocial">
                    <i className=" sidebarIcons fas fa-blog"></i>
                    <i className=" sidebarIcons fab fa-twitter"></i>
                    <i className=" sidebarIcons fab fa-instagram-square"></i>
                    <i className=" sidebarIcons fab fa-facebook-f"></i>
                </div>
            </div>

        </div>
    )
}
