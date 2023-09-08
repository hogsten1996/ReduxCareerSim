import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetAllPostsQuery } from "../store/apiSlice";
import { Link } from 'react-router-dom';

const SinglePost = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetAllPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred</div>;

  const post = data.data.posts.find(post => post._id === id);
  
  return (
    <div className='postContainer2'>
      <div className='post'>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <p>{post.price}</p>
        <p>{post.location}</p>
        <Link to={'/'}>Back</Link>
      </div>
    </div>
  );
};

export default SinglePost;


