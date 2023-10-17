import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

// This is considered the root comoponent and is the first that's rendered, further components are nested inside the root
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch> {/* Switch component makes sure only 1 route component shows in the browser at one time */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id"> {/* This route includes a route parameter using a ':' with the keyword after it */}
              <BlogDetails />
            </Route>
            <Route path="*"> {/* This will catch any other route */}
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>        
  );
}

export default App;
// Always export so we can use it in other files

/* Below is old code used to demonstrate dynamic values
const title = 'Welcome to the new blog'; // Creating a variable to use for the header
const likes = 50; // React will convert data types to strings before outputting to browser
const link = "https://www.google.com"
// const person = {name: 'yoshi', age: 30}; booleans and objects do not work with react


The code below this line would be inside of <div className="content">
<h1>{title}</h1>
<p>Liked {likes} times</p>

<p>{10}</p>
<p>{"hello, ninjas"}</p>
<p>{[1, 2, 3, 4, 5]}</p>
<p>{ Math.random() * 10}</p>

<a href={link}>Google Site</a> */