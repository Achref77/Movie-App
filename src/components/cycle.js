// import React, { Component } from 'react'


// class Rating extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         rating: 0
//       }
//       console.log('constructor is called')
//     }
//     render() {
//       console.log('render is called')
//       return <input
//         type="number"
//         value={this.state.rating}
//         onChange={(event) => this.setState({ rating: event.target.value})} />
//     }
//     componentDidMount() {
//       console.log('componentDidMount is called')
//     }
//     componentDidUpdate() {
//       console.log('componentDidUpdate is called')
//     }
//   }
//   const hasContent = Component => {
//     return props => {
//       if (props.data.length !== 0) return <Component {...props} />;
//       return <p>No data found :)</p>;
//     };
//   };
//   const Content = ({ data }) => <ul>{data.map(elem => <li>{elem} </li>)}</ul>;
// const WrappedContent = hasContent(Content);
// const sampleData = [1, 2];
// const sampleEmptyData = [];
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <WrappedContent data={sampleData} />
//         <WrappedContent data={sampleEmptyData} />
//       </div>
//     )
//   }
// }

