# Redux Todos 

Stolen directly from the [redux repo](https://github.com/reduxjs/redux/tree/9c9a4d2a1c62c9dbddcbb05488f8bd77d24c81de/examples/todos)

This repo already has redux - you'll use it as a baseline, and integrate all of the nice `redux toolkit` features into it.

## Setup 

* Fork and clone this repo
* `cd` to cloned directory
* `npm install`
* `npm start` to start the server

## Instructions

Integrate redux toolkit features into this project. Feel free to change as many things as you want, but keep all the functionality intact - you should still be able to add, complete, and filter the todos.

Try to answer these questions while doing it:

* Where is the store located? How would you rewrite it?
* Can you rewrite the actions with `createAction()`? Or is there a better way?
* There is a strange syntax that you may have never seen before on some the component exports. This is the `connect` syntax, it can be replaced with `useDispatch` and `useSelector` hooks. The associated `mapStateToProps` and `mapDispatchToProps` can also be thrown out.
* There are propTypes on some of the components - you can leave them alone or delete them, up to you.
* How does `combineReducers` get replaced with RTK features?

## Submission

When finished, commit and push your work and make a pull request against this repo.

## Resources

* [Redux toolkit docs](https://redux-toolkit.js.org/usage/usage-guide)