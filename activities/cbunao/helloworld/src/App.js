import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Timer from './Timer.js'
import Form from './Form.js'
import Search from './Search.js';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
// const Message = () => <p>Hello World, I am Chienih Louise Bunao</p> // component with no properties.
const Message = (props) => <p>Hello World,I am {props.name}</p>
// function App() {
//   return (
//     <div>
//       <Router>
//       <Header />
//       <Timer />
//       <Form />
//       <Switch>
//         <Route exact path="/">
//             <Main/>
//         </Route>
//         <Route path="/tutorial">
//             <Tutorial/>
//         </Route>
//         <Route path="/blog">
//             <Blog/>
//         </Route>
//         <Route path="/community">
//             <Community/>
//         </Route>
//       </Switch>
//       </Router>
//     </div>
//   );
// }
// function Main(){
//   return (
//       <div>
//     <h2>Home</h2>
//   </div>
//   );
// }
// function Tutorial(){
//   return (
//       <div>
//         <h2>Tutorial</h2>
//       </div>
//   );
// }
// function Blog(){
//   return (
//       <div>
//     <h2>Home</h2>
//   </div>
//   );
// }
// function Community(){
//   return (
//       <div>
//     <h2>Home</h2>
//   </div>
//   );
// }
const App = () => (
  <BrowserRouter>
  <header className="myHeader">
    <div className="div1">
          <Route path="/" component={Home} />
    </div>
  </header>
  <Route path="/tutorial" component={Tutorial} />
  <Route path="/blog" component={Blog} />
  <Route path="/community" component={Community} />
  </BrowserRouter>
);

const Home = () => (
  <div className="div2">
    <Link to="/" className="home" ><img src={logo} alt="no display" height="20" /><span className="homeName">MySite</span></Link>
    <nav className="menuList">
      <Link to="/" className="menuItem">Docs</Link>
      <Link to="/tutorial" className="menuItem">Tutorial</Link>
      <Link to="/blog" className="menuItem">Blog</Link>
      <Link to="/community" className="menuItem">Community</Link>
    </nav>
    <Search />
  </div>
);
const Tutorial = () => (
  <div>
    <Timer/>
  </div>
);
const Blog = () => (
  <div>
    <Timer/>
    <Form/>
  </div>
);
const Community = () => (
  <div>
    
  </div>
);
export default App;
