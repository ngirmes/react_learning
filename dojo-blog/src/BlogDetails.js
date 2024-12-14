import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./usefetch";

const BlogDetails = () => {
    const { id } = useParams(); // Allows us to grab parameters from the route and '{id}' destrucutres them
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + id, {
        method: 'DELETE'
    })
    .then(() => {
        history.push('/')
    })
}

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;
