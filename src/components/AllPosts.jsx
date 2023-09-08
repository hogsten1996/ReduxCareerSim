import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetAllPostsQuery } from "../store/apiSlice";


function postMatches(post, text) {

  return (
    post.title.toLowerCase().includes(text.toLowerCase()) ||
    post.description.toLowerCase().includes(text.toLowerCase())
  );
}

const AllPosts = () => {
  const { data, isLoading, isError } = useGetAllPostsQuery();
  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error loading posts.</div>;
  }

  if (!data || !data.data.posts) {
    return <div>No posts found.</div>;
  }

  const filteredPosts = data.data.posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : data.data.posts;

  return (
    <div>
      <h1 className='topHead' style={{ textAlign: 'center' }}>The Marketplace</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ margin: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
      />
      <div className='postContainer'>
        {postsToDisplay.map((post, index) => (
          <div className='post' key={index}>
            <h3>{post.title}</h3>
            <p>{post.price}</p>
            <Link to={`/single/${post._id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;









