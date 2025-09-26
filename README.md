## 1\. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension that allows you to write **HTML-like code** directly within your JavaScript files.

It's used because it makes UI code **declarative** and readable, letting you describe the structure of your component in a familiar way while combining the power of JavaScript logic with markup.

-----

## 2\. What is the difference between State and Props?

| Concept | State | Props (Properties) |
| :--- | :--- | :--- |
| **Source** | **Internal data** managed *within* a component. | **External data** passed *from* a parent component. |
| **Mutabilty** | **Mutable** (can be changed) using a setter function (`useState`). | **Immutable** (read-only); *cannot* be changed by the child component. |
| **Purpose** | Managing data that **changes** (e.g., counter, form input). | Passing data and **configuration** down the component tree. |

-----

## 3\. What is the `useState` hook, and how does it work?

The **`useState` hook** is a function that lets you add and manage **state** in functional components.

It works by:

1.  Accepting an **initial state value** as an argument.
2.  Returning an array with two elements: the **current state value** and a **setter function** to update that value.
3.  Calling the setter function **triggers a re-render** of the component with the new state.

-----

## 4\. How can you share state between components in React?

The primary way to share state between sibling or distant components is by **Lifting State Up**:

1.  Move the state to the **closest common parent component**.
2.  The parent passes the state (for reading) and the setter function (for updating) down to the children as **props**.

For complex, application-wide state, you would use the **Context API** or a dedicated state management library like **Redux**.

-----

## 5\. How is event handling done in React?

Event handling in React is similar to standard HTML but uses **camelCase** for event names (e.g., `onClick`, not `onclick`).

You pass a **JavaScript function** as the handler to the element:

```jsx
<button onClick={handleClick}>Click</button> 
```

React uses a **SyntheticEvent** wrapper to ensure event behavior is consistent across all browsers.