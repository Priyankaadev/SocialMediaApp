import { useEffect, useState } from "react";
import PostCard from "../PostCard";
import axios from "axios";

let array = [

]

function PostCardList() {
   const [posts, setPosts] = useState( [])
    useEffect(() => {
       //we will download the content from dummyapi.io
              axios.get( "https://dummyapi.io/data/v1/post",
        {headers: {'app-id': import.meta.env.VITE_APP_ID}})
        .then( response =>{
       const responseObject = response.data;
       setPosts( [...responseObject.data])
        })
    }, []); //it renders or execute the callback for the first time when the comp is rendering 
    // after that it will reexecute the callback when the dependencies updates

    return (
                ( posts.length ==0) ? 
                "loading..."
                : posts.map((post) => <PostCard
                content={post.text}
                image={post.image}
                key={post.id}
                authorFirstName={post.owner.firstName}
            />)
         )
}

export default PostCardList;