### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

1 - react is a open-source front end JavaScript library used to build UI based components. 

- What is Babel?

 1 - Babel is a tool that is mainly used to help convert ECMAScript 2015+ code into backwards compatible version of JavaSript. technally allows older users to use to updated syntax.

- What is JSX?

1- is a syntax extension to JavaScript, allows you to have full power of JavaScript.

- How is a Component created in React?

1 - Simply as writing a JavaScript function, these functions should expect arbitrary inputs called props. these props can also be destructured.

- What are some difference between state and props?

1 - Props allows you to pass data between different components. but State is the data that is rendered within each component becuase each component will render different data. 

- What does "downward data flow" refer to in React?

1 -This is refered to as passing data or functions from the parents to the child components. 

- What is a controlled component?

1 - a controlled component is those in a form's data is handled by the component's state.

- What is an uncontrolled component?

1 - an uncontrolled component is where the form data is handeled by the DOM itself.

- What is the purpose of the `key` prop when rendering a list of components?

1 - The key in React uses to efficently manage and update elements within a list.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

1 - The order of items might change and if they do this can cause issues with the component state.

- Describe useEffect.  What use cases is it used for in React components?

1 - The useEffect allows us the perform side effects in your functions components.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

1 - The useRef hook allows you to reference a value that does not need to render. 

- When would you use a ref? When wouldn't you use one?

1 - ref would be good to use when you know the data you will be using will not change so, you would not want to use ref when at some point in your data might change.

- What is a custom hook in React? When would you want to write one?

1 - A good time to use a custome hook is when you know that the function can be reused in other files.
