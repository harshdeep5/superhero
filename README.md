# React Super heroes

## An app to search for superheroes and their stats

### Useful resources

1 Superhero API - https://www.superheroapi.com
2 Nodejs - https://nodejs.org/en/download
3 create-react-app -https://www.npmjs.com/package/create-react-app

#------About react
#node modules is a folder conatining third party packages and dependencies
#package.json conatins dependencies required to run the react project also contain the scripts
#package-lock.json contains the version of packages we have in node modules
#useState is a react function which stores data that we need to change over time
and in it we use setState (can be any name, address to change the data)
#React Hooks are a type of function that allows the users to hook into react state and life-cycle features from function components. React provides built-in hooks like useState, useEffect, use Callback, useContext, and useMemo and we can also create your own custom hooks.
function ExampleWithManyStates() {
// Declare multiple state variables!
const [age, setAge] = useState(42);
const [fruit, setFruit] = useState('banana');
const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
// ...
}

#Props only pass the data to a component

<!-- #function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

const myElement = <Car brand="Ford" />; -->

#props
Let's assume that the Tool component will be reusable across different components to describe different designers and their favourite tools.

While React makes it easy for us to import a component's logic without rewriting the code, this particular component already has its data hard coded. This means that we have to either rewrite that logic for every other component, or – you guessed right – use props to alter the data for different components.

props allow us reuse a component's logic dynamically.
To use props, you have to pass in props as an argument in your function. This is similar to passing arguments into your regular JavaScript functions. Here's an example:

function Tool(props) {
const name = props.name;
const tool = props.tool;
return (

<div>
<h1>My name is {name}.</h1>
<p>My favorite design tool is {tool}.</p>
</div>
);
}

export default Tool

You must be wondering where the data will be passed to exactly. To do this, you pass in the data like attributes. It looks like this:

import Tool from "./Tool"

function App() {
return (
<div className="App">
<Tool name="Ihechikara" tool="Figma"/>
</div>
)
}

export default App

props with destructuring

function Tool({name, tool}) {

    return (
      <div>
        <h1>My name is {name}.</h1>
        <p>My favorite design tool is {tool}.</p>
      </div>
    );

}

export default Tool

How to set default values for props
If you do not want your props data to be empty when you create them, you can pass in a default value. Here's how to do that:

function Tool({name, tool}) {

    return (
      <div>
        <h1>My name is {name}.</h1>
        <p>My favorite design tool is {tool}.</p>
      </div>
    );

}

Tool.defaultProps = {
name: "Designer",
tool: "Adobe XD"
}
export default Tool
Just at the end of the code before the component was exported, we declared default values for our props. To do that, we started with the component's name and a dot/period connecting it with defaultProps which is built in when you create a React app.

Now, wherever we import this component, those values will be the initial values instead of being blank. When you pass in data to the child component like we did in previous sections, it overrides the default values.

#useState useCallback useEffect useMemo
