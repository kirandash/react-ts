## 1. React With TS

### 1.4 Generate TS based projects with CRA

- Generate react project with TS support:
  `npx create-react-app <appname> --template typescript`

### 1.5 File extensions and starting up React

- File contains react component or any other jsx: .tsx
- No JSX? use .ts

## 2 Types around Props and State

### 2.1 Changes with TS

- Applying types to component props
- Applying types to state in a component
- Types with event handlers
- Several other assorted areas

### 2.2 The big difference with Props

- Parent ---> Child (Interface to define what props Child expects to receive)
- Two big checks by TS
  - Are we providing correct props to child
  - Are we using the correctly named + typed props in Child?

### 2.3 Explicit component type annotations
- Passing props to React have some issues
- All React components can optionally provide these properties:
    - propTypes, displayName, defaultProps, contextTypes
    - TS doesn't know that we are making a react component. So it will think that Child will not have these properties
- Make use of `React.FC<ChildProps>` to explicitly deine component with TS

### 2.4 Annotations with Children
- `React.FC` allows us to use `children` props of react component
- can not use with just basic ts

### 2.5 State with TS

### 2.6 Type Interface with State
- TS auto defines the type for state variables based on initial state data
- Ex: `useState('')` will set variable type as string
- Ex: `useState([])` will set variable type as an array
- To explicitly define: 
    `useState<string[]>([])`: array of strings

### 2.7 Type unions in state
- assigning multiple possible types for a data
- user piece of state
    - undefined (when component is first rendered and when the search did not find a user)
    - {name: string, age: number}: when a user is found
- Ex: `const [user, setUser] = useState<{ name: string, age: number } | undefined>()`

## 3 Types around Events and Refs
### 3.1 Inline event handlers - src/events/EventComponent.tsx
- inline on change event doesn't have type check for event but if we separate it into another fn event has a type check and throws error

### 3.2 Typing standalone event handlers - src/events/EventComponent.tsx
- Inline event handlers has inference type assignment by TS. Since TS knows inline event handlers syntax
- Type inference doesn't apply for event handlers defined before hand. only applied if event handler is defined inline in JSX
- `onChange = (event: React.ChangeEvent<HTMLInputElement>)`
    - Similare events: hover event, drag event etc

### 3.3 Handling Drag Events Too! - src/events/EventComponent.tsx
- `onDragStart = (event: React.DragEvent<HTMLDivElement>)`
- use VSCode tips suggestions to detect event type
- Many other events viz: FocusEvent, PointerEvent

### 3.4. TypeScript with Class Components - src/classes/UserSearch.tsx
- handle props
- handle state

### 3.5. Applying Types to Refs - src/refs/UserSearch.tsx
- `const inputRef = useRef<HTMLInputElement | null>(null)` - null value just in case no ref is used in component

### 3.6 More on Refs - src/refs/UserSearch.tsx
- on render: focus input element

## 4 TS with Redux
### 4.1 App Overview and setup
- `npm i --save-exact @types/react-redux@7.1.15 axios@0.21.1 react-redux@7.2.2 redux@4.0.5 redux-thunk@2.3.0`

### 4.2 Redux Design
- API: https://api.npms.io/v2/search?q=react
- we are fetching packages from npm
- 'package' is a reserved keyword in TS (like 'for' 'import' etc)
- We are going to call npm packages 'repositories'
- Structure: 
    - reducer
        - repositories
            - data
            - loading
            - error
    - action creator (searchRepositories(name))
        - actions:
            - searchRepositories
            - searchRepositoriesSuccess
            - searchRepositoriesError
        - action types:
            - search_repositories
            - search_repositories_success
            - search_repositories_error
- Folder structure
    - components
        - App.tsx, RepositoriesList.tsx
    - redux stuff
        - index.ts - single access point for all redux communications (imports from all redux items and re exports)
        - reducers, action creators, middlewares

### 4.3 Reducer Setup - src/state/reducers/repositoriesReducer.ts
- create repositoriesReducer

### 4.5. Annotating the Return Type
- `reducer = (state: RepositoriesState, action: any): RepositoriesState`
- so that returned data type is checked properly

### 4.6. Typing an Action
- create Action Interface

## 14 Techniques for Error handling
### 14.1 Error handling
- By default React catches run time errors
- But we haven't handled:
    - delayed errors Ex: setTimeout
    - Bundle invalid code or code with invalid syntax
- We are only showing message in console, but need to handle errors in UI for user

### 14.2 Extracting reusable error logic  - preview.tsx
- 3 types of errors can happen during bundle or execution
    - bundle error (due to invalid code)
    - runtime error (synchronous error during execution)
    - delayed error (try catch doesn't detect delayed errors)

### 14.3 Handling async errors - preview.tsx
- Async erros can not be checked with try catch
- can check by adding a event listener on window level for error
    - it gets triggered only when an error is thrown
    - used to handle uncaught errors or async errors
    - error is not sent but the entire event object is received in event listener. Which contains the error oject
- try catch block does not throw an error but catches it
- Note: by default uncaught errors are logged in console. to prevent, use event.preventDefault()

### 14.4 Capturing bundle errors - src/bundler/index.ts
- add try catch block in index.ts
- set code or error based on returned data in components/code-cell.tsx

### 14.5 Printing Captured Erros - preview.tsx
- pass error to Preview component from code-cell.tsx
