- [ ] Why would you use class component over function components (removing hooks from the question)?

If states or lifecycle hooks are needed in your component then a class based approach is best. This is because functional components are stateless and lifecycle hooks are also only available from React.Component which class components extends. 

- [ ] Name three lifecycle methods and their purposes.

componentDidMount - runs when the component is mounted and is first created. If you want to do something once at the start of a component's life you put it inside this method.

componentDidUpdate - runs every time our component state is updated and we re-render it.

componentWillUnmount - used for any clean up when the component is removed from the screen

- [ ] What is the purpose of a custom hook?

Custom hooks allow you to apply non-visual behavior and stateful logic throughout components as you are able to reuse the same hook multiple times.

- [ ] Why is it important to test our apps?

Testing reduces the risk of bugs and other errors derailing or delaying the project as larger parts of the code are integrated with each other. It also prevents errors from ending up into the production code or end product.