import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}

    ]);

const [name, setName] = useState('mario');

const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs);
}

useEffect(() => {
    console.log('use effect ran')
    console.log(name);
}, [name]);

    return( // blogs={blogs} is an example of a prop
        <div className='home'>
            <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs!" handleDelete={handleDelete}/>
            <button onClick={() => setName('luigi')}>change name</button>
        </div>
    );
}

export default Home;
