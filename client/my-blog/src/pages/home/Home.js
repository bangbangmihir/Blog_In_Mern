import "./home.css";
import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect ,useState  } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";



export default function Home() {
    const [posts, setposts] = useState([]);
    const {search} = useLocation();

    


    useEffect(()=>{
        const fetchPosts = async () =>{
          const res = await axios.get("/posts" + search)
          setposts(res.data)


        }
        fetchPosts();
    },[search]);


    return (
        <>
        <Header/>
        <div className="home">
        
        <Post posts={posts}/>
        <Sidebar/>

        </div>
        </>
    )
}
