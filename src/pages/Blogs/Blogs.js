import React from 'react';

const Blogs = () => {
    return (
        <div className='flex justify-center items-center m-20'>
            <div>
                <h2 className='text-xl'>How will you improve the performance of a React Application?</h2>
                <br />
                <p>
                    Here the features and tricks that will help you optimize react apps performance. <br />
                    1. useMemo() : This is a React hook that is used to cache functions in React, CPU-expensive functions. <br />
                    2. React PureComponent: React PureComponent is a base component class that checks the fields of state and props to know whether the component should be updated.<br />
                    3. Caching functions: Functions can be called in the React component JSX in the render method. If the functions get expensive, ie it takes long to execute it will hang the rest of the re-render code to finish thereby hampering the user's experience.<br />
                    4. Conditional rendering of the components: Commonly, we write down components that get rendered when clicked or any other event e.g. Modals or Dropdowns. We identified that a lot of these components are rendered when they are not needed. These were big components with many child components and API calls associated with them. We avoided rendering these components until they are needed.<br />
                    5. Lazy loading: React.lazy is a new feature added to React when Reactv16.6 was released, it offered an easy and straight-forward approach to lazy-loading and code-splitting our React components.<br />
                    6. Remove all Inline Functions: An inline function is a function that is defined and passed down inside the render method of a React component. Move all inline functions outside the render() such that it does not get redefined on every render cycle.<br />
                </p>
                <br />

                <h2 className='text-xl'>What are the different ways to manage a state in a React application?</h2>

                The Four Kinds of React State to Manage <br />

                1. Local state <br />
                2. Global state<br />
                3. Server state<br />
                4. URL state<br />

                <p>Local (UI) state: Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.
                    Global (UI) state: Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                    Server state: Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                    URL state: Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                </p>
                <br />
                <h2 className='text-xl'>How does prototypical inheritance work?</h2>
                <br />
                <p>JavaScript is an Object Oriented programming language based on prototypes. JavaScript now supports "prototypal inheritance," which means that objects and methods can be shared, extended, and copied after the ES6 modifications. We frequently desire to extend something in programming. For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We'd like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it. Prototypal inheritance is a language feature that helps in that.<br />

                    <br />
                    ▶ In JavaScript, all objects have a hidden [[Prototype]] property that's either another object or null.<br />
                    ▶ We can use obj.__proto__ to access it <br />
                    ▶ The object referenced by [[Prototype]] is called a “prototype”.<br />
                    ▶ If we want to read a property of obj or call a method, and it doesn't exist, then JavaScript tries to find it in the prototype.<br />
                    ▶ The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.</p><br />




                <br />
                <h2 className='text-xl'>Why should we not update the state directly?</h2>

                <br />

                <p>One should never update the state directly because of the following reasons:

                    〉 If we update it directly, calling the setState() afterward may just replace the update you made. <br />
                    〉 When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. <br />
                    〉 You will lose control of the state across all components.</p>

                <br />

                <h2 className='text-xl'>What is a unit test? Why should write unit tests?</h2>

                <br />
                <p>Unit Test:

                    Unit testing is a type of testing that examines a single software unit in isolation. This entails checking a function's or component's output for a given input. This could imply testing that the component renders successfully for the supplied props for React components.

                    <br />
                    Why should write: There are multiple reasons why unit tests can be helpful. Some of them being:


                    1. Prevent regressions <br />
                    2. Exercise your code<br />
                    3. Faster feedback while developing<br />

                    If you write your tests as you build a feature, or even before, it gives you a better idea of what it needs to do. You end up writing code that is easy to test, has few dependencies, and is easy to understand.<br />

                    The only purpose of unit tests is the way you go about writing your code — it has prevented us from shipping bugs to production on several occasions. Unit tests help you with all the points I mentioned above. They lay the foundation of every solid testing suite for a good reason.</p>


            </div>
        </div>
    );
};

export default Blogs;