
import './App.css';
import Logo from './logo';
import Link from './links';
import Butt from './button';

function App() {
  return (
    <div className='nav'>
      <div className='childnav'><Logo /></div>
      <div className='childnav col'> <Link name="Services"/> <Link name="Projects"/> <Link name="About"/></div>
      <div className='childnav'><Butt /></div>
    </div>
  );
}

export default App;
