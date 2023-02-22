import Counter from './components/Counter';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  return (
    <Fragment>
      {isAuthenticated && <Auth />}
      <Counter />
  );
}

export default App;
