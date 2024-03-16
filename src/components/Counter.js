import React from 'react';
import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter, decrementCounter, increaseBy10Counter, toggleCounter } from '../featuress/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const { counter, step = 1, isVisible } = useSelector((store) => store.counter);

  const handleIncrement = () => {
    dispatch(incrementCounter(step));
  };

  const handleDecrement = () => {
    dispatch(decrementCounter(step));
  };

  const handleIncreaseBy10 = () => {
    dispatch(increaseBy10Counter());
  };

  const handleToggle = () => {
    dispatch(toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isVisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncreaseBy10}>Increase by 10</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={handleToggle}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
