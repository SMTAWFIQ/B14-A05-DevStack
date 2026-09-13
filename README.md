# DevStack

DevStack is a web app that helps developers to plan their development technologies. Users can browse technologies across categories like frontend, backend, database, languages, styling, DevOps and tools. Users can compare them by using rating, difficulty levels and short description. Then they can add the technology they want to the stack.

## Technologies used to build DevStack

1. React
2. TypeScript
3. Tailwind CSS
4. React Icons
5. React Toastify
6. JSON
7. Vite

## Features of DevStack

### Explore Technologies  
    Users can see a list of technologies from  different categories like frontend, backend, database, languages, styling, DevOps and tools. Each technology card shows an icon, name, description, rating and difficulty level.

### Your Stack 
    Users can click "Add to Stack" button on any technology to add it to their stack. the Your Stack sidebar shows all selected technologies. Users can remove one item or remove all items anytime.

### Toastify Message 
    Every time a user adds, removes technologies a toast message shows up to confirm the action. So that users always knows what happened 

## React (Questions & Answers)
1. What is JSX, and why is it used in React? <br>

   JSX (Javascript XML) is a special syntax. By using that syntax Javascript allows us to write HTML like markup directly in Javascript files.We use it in React because it makes it easier to see what the UI will look like, instead of writing plain JavaScript functions to create HTML elements. 

2. What is the difference between props and state?<br>

   Props are data that a parent component send to a child component.But child component can not send any props to the parent component.In my Project "technology" is a prop passed to "TechnologyCard".
   State is data that a component manages by itself and it can change over time like when a user clicks a button. In my project "IsOpen" in "Nav" is a state.

3.  What does the useState hook do, and where did you use it in this  
    project?<br>

    useState lets a component remember a value and update it. When the value changes the component re-renders automatically.In my project i use useState in "Nav" to track if the hamburger menu is open or closed and also in "ExploreTechnologies" to track which technologies the user has selected.

4. What does the useEffect hook do, and why did you need it to load    
   the JSON data?<br>

   The useEffect hook runs the code after the component renders.
   We need it to load the json data because fetching data is a side effect. usEffect lets us fetch the json data when the component loads.

5. Why does every time in a .map() list need a unique key prop?<br> 

   The key prop helps react identify each item in a list.Without a proper key ract can get confused and show the wrong item on the screen causing bugs.In my project i use technology.id as the key prop.

6. What is conditional rendering? Show one place you used it 
   (example: the empty stack message).<br>

   Conditional rendering means showing diferent UI based on the condition.In my project in "selectedTechnologies" component i check if "selectedTechnologies.length === 0". If its empty i show "No Technologies Selected Yet".  

7. How do you pass data from a parent component to a child component,
   and how does a child send something back to the parent? <br>

   A parent sends data to a child using props. To send data back from child to parent, the parent passes a function as a prop. then the child call the function.In my project "setSelectedTechnologies()" is passed from (parent) "ExploreTechnologies" to (child) "TechnologyCard" and when the user click on "Add to Stack"  "TechnologyCard" calls the "setSelectedTechnologies()" to update the (parent) "ExploreTechnologies" state.