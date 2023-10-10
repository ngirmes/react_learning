// Using props down below as the BlogList component is receiving data from the Home component
// The function below could also receive props, and we could access data using ex: props.title


//In JSX, curly braces are used to embed javascript within the markup
const BlogList = ({blogs, title, handleDelete}) => {



    return (  
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}            
        </div>
    );
}
  
export default BlogList;