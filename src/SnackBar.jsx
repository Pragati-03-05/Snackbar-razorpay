import React, { useEffect } from 'react';

function SnackBar(props) {
  useEffect(() => {
    setTimeout(() => {
      props.close(props.count);
    }, props.timer);
  }, []);
  return (
    <div className={`bar ${props.variant}`}>
      {props.text}
      <button onClick={() => props.close()}>*</button>
    </div>
  );
}
export default SnackBar;
