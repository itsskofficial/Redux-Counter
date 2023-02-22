import Counter from './components/Counter';
import Auth from './components/Auth';
import User
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  return (
    <Fragment>
      {isAuthenticated ? <Auth /> : <UserProfile/>}
      <Counter />
  );
}

export default App;
