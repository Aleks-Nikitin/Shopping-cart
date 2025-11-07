import { Outlet } from 'react-router';
import Nav from '../Nav/Nav.jsx';
import classes from './App.module.css'
import './root.css'
function App() {

  return (
    <div className={classes.container}>
      <div className={classes.navBar}>
        <Nav></Nav>
        </div>
      <div className={classes.content}>
        <Outlet>
        </Outlet>
        </div>
    </div>
  )
}

export default App
