import ReactDOM from 'react-dom';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
const path = window.location.pathname;

if(path == "/"){
  root.render(<Home />);
}
else if(path == "/about"){
  root.render(<About />);
}
else if(path == "/contact"){
  root.render(<Contact />);
}
else {
  root.render("Not Found");
}
