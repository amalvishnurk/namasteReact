
// <!-- Create basic hello world program using js -->
// const header= document.createElement('h1')
// header.innerHTML="Hello world from Javascript"
// const root= document.getElementById('root')

// root.appendChild(header)


// <!-- Create basic hello world program using react -->
// const heading = React.createElement(
//     "h1",
//     {
//         id: "heading",
//         // style: { color: "blue" }
//     },
//     "Hello world from React"
// )
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

// console.log(heading);
// ReactDOM.render(heading, document.getElementById('root'))


// create nested element in react
// const parent= React.createElement('div', {id:"parent"}, 
//     React.createElement('div', {id:"child"},
//         // If we want to pass more siblings - use array of children
//         [React.createElement("h1", {id:"headingChild"},"I am h1 tag"),React.createElement("h2", {id:"headingChild"},"I am h1 tag")]
//     )
// )
// const root = ReactDOM.createRoot(document.getElementById('root'))

// console.log(parent);
// root.render(parent)

// create more complicated nested elements in react
const parent = React.createElement('div', { id: "parent" }, [
    React.createElement('div', { id: "child" },
        // If we want to pass more siblings - use array of children
        [React.createElement("h1", { id: "headingChild" }, "I am h1 tag"), React.createElement("h2", { id: "headingChild" }, "I am h1 tag")]
    ),
    React.createElement('div', {id:"child"},
        // If we want to pass more siblings - use array of children
        [React.createElement("h1", {id:"headingChild"},"I am h1 tag"),React.createElement("h2", {id:"headingChild"},"I am h1 tag")]
    )
]

)
const root = ReactDOM.createRoot(document.getElementById('root'))

console.log(parent);
root.render(parent)