import "@testing-library/jest-dom/extend-expect"

import App from "./App"
import React from "react"
import { render } from "@testing-library/react"

it("has a sample test", () => {
  const { getByText } = render(<App />)
  expect(getByText("React To Do")).toBeInTheDocument()
})

// TODO: Complete these tests

it("starts with two items already todo", () => {})
it("allows you to add a new todo item", () => {})
it("allows you to remove a todo item", () => {})
it("allows you to clear all of the todo items", () => {})
it("can clear all items, add two new ones and delete the first", () => {
  // this one has a bug. We are using the test to reveal it
})
it("works with async calls", () => {
  // We are going to pretend that adding a item is done asynchornously (like hitting an API).
  // Open ToDo.js and find the createNewToDoItem() function
  // Update that method so all the code lives inside a Promise.
  // const createNewToDoItem = () => {
  //   Promise.resolve().then(() => {
  //     ...existing code...
  //   })
  // }
  // This will break two previous tests. Fix them.
})
it("show a message if all todo items are completed", () => {
  // this is a new feature. See if you can test drive it
})
