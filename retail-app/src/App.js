import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import ShopPage from './components/ShopPage';
// import UserList from './components/UserList';
import './styles.css'; 



const App = () => (
  <Router>
    <Routes>
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/" element={<SignInForm />} />
      {/* <Route path="/users" element={<UserList />} /> */}
    </Routes>
  </Router>
);

export default App;