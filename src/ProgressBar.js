import React from 'react';

function ProgressBar({completion}) {
  const percentage = completion * 100;
  return (<div className="mv2 flex flex-column">
    <label htmlFor="progress" className="bn"></label>
    <progress value={completion} id="progress" className="bn">{percentage}%
    </progress>
  </div>)
}

export default ProgressBar;
