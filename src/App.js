import './style.css';
import SnackBar from './SnackBar';
import React, { useState } from 'react';

export default function App() {
  const [open, setOpen] = useState([]);
  const [count, setCount] = useState(0);
  const openSnack = () => {
    setCount((prev) => prev + 1);
    setOpen([
      <SnackBar
        close={close}
        timer={10000}
        variant="error"
        text={`this is a success bar ${count}`}
        count={count}
      />,
      ...open,
    ]);
  };
  const close = (id) => {
    open.shift();
    setOpen([...open]);
  };
  console.log('AAAAAAAAAAAA', open);
  return (
    <div className="App">
      <button onClick={() => openSnack()}>show snack-bar</button>
      <div>{open}</div>
    </div>
  );
}
//create a snackbar it should autohide after
//given amount of time . at a time 3
//snackbar can be appear on stack manner .
//placement will be top-center . three parts will be
//there success g, warning yand error  r.
//text on the snackbar and a close button instantly on the click .
//let arr=[]
//[1]
//[1,2]
//[1,2,3]
//[2,3]
//[2,3,4]
//[3,4]
//[4]
//[]
