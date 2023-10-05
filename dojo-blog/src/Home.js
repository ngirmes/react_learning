// When you need a reactive value (something that might change at some point)
// we use the useState hook to do that

import {useState} from 'react';

const Home = () => {

    const [blogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}

    ]);

    return(
        <div className='home'>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}    
        </div>
    );
}

export default Home;

/* The below code exemplifies the use of reactive values and state changing
If used, any and all other code must be commented out
const Home = () => {

    // let name = 'doodle';
    const [name, setName] = useState('doodle');
    const [num, setNum] = useState(Math.random())

    const handleClick = () => {
        setName('ur mom');
        setNum(Math.random());
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e);
    }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>Name: {name} Random Num: {num}</p>   
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
        </div>
    );
}
 
export default Home;
*/