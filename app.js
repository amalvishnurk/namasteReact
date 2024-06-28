
import React from "react";
import ReactDOM from "react-dom/client"

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
// const parent = React.createElement('div', { id: "parent" }, [
//     React.createElement('div', { id: "child" },
//         // If we want to pass more siblings - use array of children
//         [React.createElement("h1", { id: "headingChild" }, "I am h1 tag"), React.createElement("h2", { id: "headingChild" }, "I am h1 tag")]
//     ),
//     React.createElement('div', {id:"child"},
//         // If we want to pass more siblings - use array of children
//         [React.createElement("h1", {id:"headingChild"},"I am h1 tag"),React.createElement("h2", {id:"headingChild"},"I am h1 tag")]
//     )
// ]

// )
// const root = ReactDOM.createRoot(document.getElementById('root'))


// console.log(parent);
// root.render(parent)


// episode 3
const heading = React.createElement("h1", { id: "heading" }, "Namaste React")
console.log(heading);

// using jsx
const jsxHeading = <h1 >Namaste React - JSX heading</h1>
console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxHeading)

// react functional component
// syntax 1
// const HeadingComponent = () => {
//     return (
//     <h1>Namaste react functional component</h1>
// )
// }

// syntax 2

const Title = () => (
    <h1>Namaste React </h1>
)

// adding react element inside other react element
const titleElement = (
    <div>
        <h1>React element</h1>
        {jsxHeading}
    </div>

)

const HeaderComponent = () => {
    return (
        <>
            <div id="header">

                <div id="logo">
                    Logo
                </div>
                <div id="search">
                    Icon
                    <input type="text" placeholder="search"></input>
                </div>
                <div id="icon">
                    Icon
                </div>
            </div>
        </>
    )
}

const number = 1000
const HeadingComponent = () => (
    <div>
        <HeaderComponent />
        {<Title />}
        <Title />
        {<Title></Title>}
        <Title></Title>
        {number}
        {titleElement}
        <h1>Namaste react functional component</h1>
    </div>
)
root.render(<HeadingComponent />)