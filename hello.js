function Adder({n1 , n2}) {  // React wants you to provide a object.
  const sum = n1 + n2;
  return (
    <h1>{sum}</h1>
  )
}


// ReactDOM.render(
//   React.createElement(Adder, {n1:4, n2:5}),
//     document.getElementById('app')
// );


ReactDOM.render(
  <Adder n1={2} n2={4}/>,
  document.getElementById('app'));
