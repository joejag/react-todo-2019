import "@testing-library/jest-dom/extend-expect"

import App from "./App"
import React from "react"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

it("starts with two items already todo", () => {
  const { getByText } = render(<App />)

  expect(getByText("clean the house")).toBeInTheDocument()
  expect(getByText("buy milk")).toBeInTheDocument()
})

it("allows you to add a new todo item", async () => {
  const { getByLabelText, getByText, findByText } = render(<App />)

  userEvent.type(getByLabelText("Add new item"), "new item")
  userEvent.click(getByText("+"))

  expect(await findByText("new item")).toBeInTheDocument()
})

it("allows you to clear all of the todo items", () => {
  const { getByLabelText, queryByText } = render(<App />)

  userEvent.click(getByLabelText("Delete clean the house"))
  userEvent.click(getByLabelText("Delete buy milk"))

  expect(queryByText("clean the house")).not.toBeInTheDocument()
  expect(queryByText("buy milk")).not.toBeInTheDocument()
})

it("can clear all items, add two new ones and delete the first", async () => {
  const { findByText, getByLabelText, getByText, queryByText } = render(<App />)

  userEvent.click(getByLabelText("Delete clean the house"))
  userEvent.click(getByLabelText("Delete buy milk"))
  userEvent.type(getByLabelText("Add new item"), "new item one")
  userEvent.click(getByText("+"))
  await findByText("new item one")
  userEvent.type(getByLabelText("Add new item"), "new item two")
  userEvent.click(getByText("+"))
  await findByText("new item two")
  userEvent.click(getByLabelText("Delete new item one"))

  expect(queryByText("new item one")).not.toBeInTheDocument()
  expect(getByText("new item two")).toBeInTheDocument()
})

it("works with async calls", () => {
  // Add a Promise.resolve().then(() => {} around the code in ToDo.createNewToDoItem()
  // This will break two previous tests, fix them.
})

it("show a message if all todo items are completed", () => {
  const { getByLabelText, getByText } = render(<App />)

  userEvent.click(getByLabelText("Delete clean the house"))
  userEvent.click(getByLabelText("Delete buy milk"))

  expect(getByText("All done!")).toBeInTheDocument()
})
