import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    
    const handleSubmit = (e) => {
        e.preventDefault() // Prevents the page from refreshing by default when the form is submitted
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json" }, // Headers property is to define the content type
            body: JSON.stringify(blog) // Body refers to the actual data we're sending with the request, JSON.stringify turns the JSON object into a string
        })
        .then(() => {
            console.log('blog added')
            setIsPending(false);
            history.push('/') // Will redirect back to the home page after submitting a new blog
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}> 
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={ body }
                    onChange={(e) => setBody(e.target.value)} 
                />
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button> } {/* Button will be active when there is no pending POST request */}
                { isPending && <button disabled>Adding Blog...</button>} {/* Button will be disabled when there is a pending POST request */}
            </form>
        </div>
     );
}
 
export default Create;