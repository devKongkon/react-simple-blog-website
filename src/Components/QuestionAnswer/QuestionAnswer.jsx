import React from 'react';
import './QuestionAnswer.css'
const QuestionAnswer = () => {
    return (
        <div className='container'>
            <hr />
            <h2 className='question-heading'>Bonus Requirements Question Answer</h2>
            <hr />
            <h2 className='question'>Props vs State</h2>
            <p className='answer'>Props: Props (short for "properties") are passed down from a parent component to a child component. They are read-only and cannot be modified by the child component. Props are used to customize the behavior of a component based on the parent component's requirements..</p>
            <p className='answer'>State: State, on the other hand, is used to manage a component's internal state. It is mutable and can be modified by the component itself. When the state changes, React re-renders the component to reflect the new state.</p>
            <hr />
            <h2 className='question'>How does useState work?</h2>
            <p className='answer'>In React, the useState hook is used to add state to functional components. It's a function that returns an array with two values: the current state value and a function to update that state value.</p>
            <hr />
            <h2 className='question'>Purpose of useEffect other than fetching data.</h2>
            <p className='answer'>useEffect and fetching data are related, but not the same thing. useEffect is a hook in React that allows you to manage side effects in functional components. Fetching data is just one example of a side effect that useEffect can handle.

                Here are the differences and purposes of useEffect and fetching data:
                <p>1.useEffect: The useEffect hook is used to manage side effects in functional components. Side effects can include things like fetching data, updating the document title, adding and removing event listeners, managing animations, and more. useEffect allows you to run code in response to component updates, and to clean up that code when the component unmounts.</p>

                <p>2.Fetching data: Fetching data is a common side effect that you might use useEffect to handle. When you fetch data, you're making an asynchronous call to an external API or service to retrieve data. This data can then be used to update the state of your component and render the UI.</p>
            </p>
            <hr />
            <h2 className='question'>How Does React work</h2>
            <p className='answer'>
                React is a JavaScript library for building user interfaces. It works by allowing developers to build UI components using a declarative syntax and managing the state and updates of those components efficiently.

                Here's a high-level overview of how React works:

               <p>1. Declarative syntax: React allows developers to define the UI using a declarative syntax. This means that instead of manually manipulating the DOM, you define what the UI should look like at any given time, and React takes care of updating the DOM to match that state.</p>

               <p>2. Virtual DOM: React uses a virtual DOM, which is a lightweight representation of the actual DOM. When you update the state of a component, React creates a new virtual DOM tree, compares it to the previous virtual DOM tree, and calculates the minimum number of changes needed to update the actual DOM.</p>

              <p>3.  Efficient updates: By comparing virtual DOM trees and calculating the minimum number of changes needed to update the actual DOM, React is able to update the UI efficiently. This means that even if you have a complex UI with many components, React can update it quickly and without any flicker or other visual artifacts.</p>

                <p>4.Component-based architecture: React uses a component-based architecture, which means that the UI is built out of reusable components. Each component has its own state and can contain other components. This makes it easy to build complex UIs out of smaller, simpler components.</p>

                <p>5.Unidirectional data flow: React uses a unidirectional data flow, which means that data flows down from parent components to child components. Child components can't directly modify the state of their parent components, which makes it easier to reason about how data is flowing through the app.
            </p></p>
        </div>
    );
};

export default QuestionAnswer;