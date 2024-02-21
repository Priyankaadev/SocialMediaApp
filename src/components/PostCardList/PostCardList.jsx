import { useContext } from "react";
import PostCard from "../PostCard";
import PostCardContext from '../../providers/PostsProvider'

function PostCardList() {
   // const [posts, setPosts] = useState([])
   const {posts, setPosts} = useContext(PostCardContext)

   return (
      (posts.length == 0) ?
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