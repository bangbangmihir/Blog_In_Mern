import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./singlepost.css";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const PF = "http://localhost:5000/images/"
    const { user } = useContext(Context);
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setupdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost();
    }, [path])

    const handleDelete = async () => {
        try {

            await axios.delete("/posts/" + path, {
                data: {

                    username: user.username
                }
            });
            window.location.replace("/")
        } catch (err) {

        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.username, title, desc,
            })
            setupdateMode(false)

        } catch (err) {

        }
    }

    return (
        <div className="singlepost">
            <div className="singlepostwrapper">
                {post.photo && (

                    <img className="singlpostimage" src={PF + post.photo}
                        style={{ width: "100%", height: "300px", borderRadius: "5px", objectFit: "cover" }}
                        alt="" />
                )}
                {
                    updateMode ? < input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e) => setTitle(e.target.value)} /> : (

                        <h1 className="singleposttitle">{title}
                            {
                                post.username === user?.username && (
                                    <div className="singlePageEdit">
                                        <i className="singleposticon fas fa-edit" onClick={() => setupdateMode(true)}></i>
                                        <i className="singleposticon fas fa-trash-alt" onClick={handleDelete} ></i>

                                    </div>

                                )
                            }
                        </h1>
                    )
                }
                <div className="singlepostinfo">
                    <span className="singlepostauthor">Author:
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link></span>
                    <span className="singlepostdate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {
                    updateMode ? <textarea className="singlepostdescInput" value={desc} onChange={(e) => setDesc(e.target.value)} /> : (
                        <p className="singlepostdesc">
                            {desc}
                        </p>

                    )}
                {
                    updateMode && (

                        <button className="singlePostButton" onClick={handleUpdate}>Update</button>
                    )
                }
            </div>

        </div>
    )
}
