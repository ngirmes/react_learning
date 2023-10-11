import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [name, setName] = useState('mario');

    useEffect(() => {
        setTimeout( () => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            })
        }, 1000)
    }, []);

    return( // blogs={blogs} is an example of a prop
        <div className='home'>
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={ blogs } title="All blogs!"/>}
            {/*<BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs!"*/}
            <button onClick={() => setName('luigi')}>change name</button>
        </div>
    );
}

export default Home;
