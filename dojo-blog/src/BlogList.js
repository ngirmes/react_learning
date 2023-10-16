import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title }) => {

    return (  
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={"/blogs/" + blog.id}> {/* This is an example of a template string meaning we can output variables inside it */}
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}            
        </div>
    );
}
   
export default BlogList;