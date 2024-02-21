import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UserList/UserList'


export default function MainContainer(postsList) {
  return (
    <Box container sx={{ width: '100%', mt: '2rem' }}>
      <Grid container alignItems={"start"} justifyContent={"center"} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid >

       <UserList />

        </Grid>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}  md={8}>
          {/* Posts */}
       <PostCardList posts={postsList}/>
        </Grid>
      </Grid>
    </Box>
  );
}