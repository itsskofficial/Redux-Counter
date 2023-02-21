import { useDispatch, useSelector } from 'react-redux';
import { Component } from 'react/cjs/react.production.min';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({type:'increment'})
  }

  const decrementhandler = () => {
    dispatch({type:'decrement'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementhandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

class Counter extends Component{
  incrementHandler() {
    this.increment()
  }

  decrementHandler() {
    this.decrement()
  }

  toggleCounterHandler() { }
  
  render(){
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{counter}</div>
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={decrementhandler}>Decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
