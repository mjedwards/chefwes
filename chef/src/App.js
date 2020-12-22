import './App.css';
import { Route } from "react-router-dom";
import FoodMenu from './menu/FoodMenu'
import FoodPhotos from './photos/FoodPhotos'
import Nav from './Navigation'





function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/' component={FoodMenu} />
      <Route exact path='/photos' component={FoodPhotos} />
    </div>
  );
}

export default App;
