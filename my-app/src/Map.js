import React from "react";
const products = [
    {
        title: 'SunSilk',
        id: 1,
        isWhite: false,
    },
    {
        title: 'Pepsodent',
        id: 2,
        isWhite: true,
    },
    {
        title: 'Rinso',
        id: 3,
        isWhite: true,
    },
]

const Map = () => {
    const listItems = products.Map((products) => (
        <li key={products.id} style= {{color: products.isWhite ? "pink" : "green"}}>
            {products.title} 
        </li>
    ));
    return (
        <ul>{listItems}</ul>
    )
  };
  
  export default Map;


//   import React from "react";

// const product = (
//     {
//         title : 'SunSilk',
//         id: 1,
//     },
//     {
//         title : 'Pepsodent',
//         id: 2,
//     },
//     {
//         title : 'Sabun',
//         id: 3,
//     },
// );

// const Map = () => {
//     const listItems = product.Map((product) => (
//         <li key={product.id}>{product.title}></li>
//     ));
//     console.log(listItems);
//     return (
//         <>
//         <ul>{listItems}</ul>
//         </>
//     )
//   }
  
//   export default Map;