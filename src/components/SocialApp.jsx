import MainContainer from "./MainContainer/MainContainer"
import Navbar from "./Navbar/Navbar"
import Input from "./Input/Input";
import { useEffect, useState } from "react";
import PostCardContext from "../providers/PostsProvider";
import axios from "axios";


function SocialApp() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get("https://dummyapi.io/data/v1/post", {
            headers: {'app-id' : import.meta.env.VITE_APP_ID}
        })
        .then(response=>{
            const responseObject = response.data;
            console.log(responseObject);
            setPosts([...responseObject.data])
        })
    }, []);

    return (

        <div>
            <PostCardContext.Provider value={{posts, setPosts}}>
                <Navbar />
                <Input />
                <MainContainer postsList={posts}/>
            </PostCardContext.Provider>

        </div>

    )
}

export default SocialApp;