import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [name, setName] = useState('mario')
    const[error, setError] = useState(null)

    // To retrieve data and catch network and data retrieval errors
    useEffect(() => {
        fetch('http://localhost:8000/blogs') //Returns a promise
            .then(response => {
                if(!response.ok){
                    throw Error('Error: could not fetch data for the resource') //Throws error if the response is not ok (!200)
                }
                return response.json(); //Parses the json into a javascript object and returns another promise
            })
            .then(data => {
                setBlogs(data); //Setting blog variable with retrieved data
                setIsPending(false) //Removes loading message
                setError(null) //Set to null to avoid unnecessary error message
            })
            .catch(err => {
                setIsPending(false) //Removes loading message
                setError(err.message) //Sets error message
            })
    }, [])

    return( // blogs={blogs} is an example of a prop
        <div className='home'>
            {error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={ blogs } title="All blogs!"/>}
            {/*<BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs!"*/}
            <button onClick={() => setName('luigi')}>change name</button>
        </div>
    );
}

export default Home
