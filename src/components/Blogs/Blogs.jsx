import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <div className="mt-5">
        <h1>Programming Hero- Question Answers</h1>

        <details>
          <summary>How does useState work?</summary>
          <div className="fs-6 ">
            useState is a Hook that allows you to add state to your functional
            components.functional components didn't have a built-in way to
            manage state, and they were limited to just rendering UI based on
            props.When you call the update function, React will enqueue a
            re-render of the component, with the new state value. The next time
            the component renders, the new state value will be used. It takes an
            optional argument as the initial state value and returns the current
            state and a function to update it.
          </div>
        </details>
        <details>
          <summary>Props vs state?</summary>
          <div className="fs-6">
            In React, props (short for "properties") are a way to pass data from
            a parent component to a child component.Props are external and
            controlled by whatever renders the component.Props in Reactjs are
            used for one-way and bidirectional way communication in Reactjs
            components. And state is an updatable structure that is used to
            contain data or information about the component and can change over
            time.It is used to store and manage dynamic data that can change
            over time due to user interactions, server responses, or other
            events.
          </div>
        </details>
        <details>
          <summary>Purpose of useEffect other than fetching data.</summary>
          <div className="fs-6">
            useEffect Hook is to eliminate the side-effects of using class-based
            components. Manipulating the DOM: useEffect can be used to
            manipulate the DOM directly. useEffect we are basically requesting
            react to execute the function that we pass in the useEffect function
            as an argument, everytime the component renders.
          </div>
        </details>
        <details>
          <summary>How Does React work?</summary>
          <div className="fs-6">
            React is the most popular front-end JavaScript library. React is a
            JavaScript library for creating interactive and fast user interfaces
            for web and mobile apps. It is a component-based open-source
            front-end library and React components rely heavily on JSX. The
            XML-style syntax makes it easy to describe what the user interface
            should look like.
          </div>
        </details>
      </div>
    </div>
  );
};

export default Blogs;
