// A component is just a function which returns a jsx template which is exported at eof
// typing 'sfc' creates a stateless funcitonal component
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>

            </div>
        </nav>
    );
}
 
export default Navbar;