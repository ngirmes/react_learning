import { useState, useEffect } from 'react'
import BlogList from './BlogList'
import useFetch from './usefetch';

const Home = () => {
    // 'data: blogs' is retrieving the data but allowing us to call it 'blogs' in this context
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return( // blogs={blogs} is an example of a prop
        <div className='home'>
            {error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={ blogs } title="All blogs!"/>}
            {/*<BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs!"*/}
            {/*<button onClick={() => setName('luigi')}>change name</button>*/}
        </div>
    );
}

export default Home
