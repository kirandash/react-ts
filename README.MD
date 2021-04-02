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

### 4.7. Separate Interfaces for Actions
- mentioning payload type
- so difffernt interfaces for different actions

### 4.8. Applying Action Interfaces
- | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction

### 4.9. Adding an Action Type Enum

### 4.10. A Better Way to Organize Code
- state/actions/index.ts file - export action
- state/action-types/index.ts file - export enum
- Fix imports in reducer

### 4.11. Adding Action Creators

### 4.12. Adding Request Logic
- call API in action creator searchRepositories

### 4.13. Applying Typings to Dispatch - src/state/action-creators/index.ts
- add action type in dispatch method

### 4.14. Setting Up Exports
- combine reducers in reducers/index.ts file
- create store - state/store.ts file
    - wire up reducers and action
- export store and action creators from state/index.ts file (only accessible file)

### 4.15. Wiring Up to React
- Use Provider to wrap App component and pass store - App.tsx
- Add initialState to reducer

### 4.17. Reminder on Event Types - src/components/RepositoriesList.tsx
- `onSubmit = (event: React.FormEvent<HTMLFormElement>)`

### 4.18 Calling an Action Creator - src/components/RepositoriesList.tsx
- useDispatch and actionCreator

### 4.19. Binding Action Creators
- create custom hook: src/hooks/useActions.ts
- use in src/components/RepositoriesList.tsx
    - much cleaner than using the entire useDispatch hook in component

### 4.20. Selecting State - src/components/RepositoriesList.tsx
- useSelector
- `const { data, error, loading } = useSelector((state) => state.repositories)`
- similar to mapStateToProps fn
- Note: useSelector has no idea of state data type
    - To fix this: need additional typing

### 4.21 Awkward typings around React Redux
- reducers/index.ts
- TS is aware of type of reducers but not in state

### 4.22 Creating a Typed Selector
- src/hooks/useTypedSelector.ts
- useTypedSelector in src/components/RepositoriesList.tsx

### 4.23. Consuming Store State
- src/components/RepositoriesList.tsx

### 4.24 Summary
- Big issues with React+Redux and TS
    - Import b/w files can turn messy
    - Communicating types over to components can be challenging
    - Type def files for Redux, React-Redux and others are possily over enginnered

## 5 App Overview
- Project: A CLI to launch an interactive development environment for writing + documenting code
- **Features**:
    - User can edit and add doc
    - User can edit and add code and preview
    - User can import packages
    - Changes user does will be added to a .js file
- **Challenges**:
    - We will have a preview component to preview code
    - Challenge #1: The code is provided to Preview as a string! How do we even execute code in a string safely?
        - If users code has any error: it should not throw any error
    - #2: This code might have advanced JS syntax in it (like JSX) that your browser can't execute
    - #3: Code might have import statements for other JS files or CSS. We have to deal with those import statements before executing the code

## 6 Code Transpiling in the Browser
### 6.1 Transpiling Options
- Advanced Code viz React ---> Babel (Transpiler) ---> Safe to execute code for browser
- Similar inspiration:
    - codepen.io, babeljs.io
- codepen:
    - sends users code via process api in network to server to transpile with babel and then respond back with compiled code

### 6.2 Remote Transpiling
- babeljs.io:
    - Does not send code to server
    - Code ---> In-browser Transpiler ---> Transpiled result

### 6.3 Module Systems
- JS modules:
    - js file that makes some values available to other files and/or consumes values from other files
    - export and import
- Solution: Use something called a **bundler** (webpack!)
    - Single file containing both modules linked together in some way

### 6.4 Behind the scenes with webpack
- Job  of bundler:
    - Read the contents of the entry file (index.js)
    - Automatically found all the different require/import/export statements
    - Automatically found all the modules on our hard drives
    - Linked these files together into a single output file with all values beind correctly communicated around.
- Our project:
    - since we will be working on browser, instead of looking for modules on hard drive we will be getting moudules straight from npm

### 6.5 Options for bundling
- Option #1:
    - React App ---> (code) ---> backend API server (webpack runs ---> webpack finds missing module ---> npm install plugin gets module (from npm registry) ---> Bundle complete!) ---> Bundled Code ---> React App
    - drawback: backend storage will eventually end up with a lot of npm modules
- [npm install webpack plugin] (https://github.com/webpack-contrib/npm-install-webpack-plugin#readme)
    - automatically installs missing plugins and dependencies on the fly without throwing an error
- Option #2:
    - Identical to option #2. But instead of saving moduels in backend. We will write our own plugin to fetch individual file from npm.
- Option #3:
    - Webpack runs in our react app instead of a backend.
    - So no need of making any API call to backend. Bundling happens in user's browser

### 6.6 Which option is best?
- Remote approach:
    - We can cache downloaded NPM modules to bundle code faster
    - Will work better for users with slow devices or limited internet connections
- Local approach:
    - Removes an extra request to the API
    - Faster code execution
    - We don't have to maintain API server
    - Less complexity - no moving code back and forth
    - Con: Webpack doesn't work in the browser

### 6.7 Webpack Replacement with ESBuild
- Raw user code ---> Babel  (Transpile) ---> Webpack (Bundling) ---> Code ready to execute
- Our solution: ESBuild for transpiling and bundling
    - ESBuild can transpile + bundle our code - all in the browser
    - [Doc](https://github.com/evanw/esbuild)
    - Extreme speed without needing a cache

## 7. Implement in browser bundling
### 7.1 Demo App
- `npx create-react-app jbook --template typescript`

### 7.2 Project Setup
- `npm i --save-exact esbuild-wasm@0.8.27`

### 7.3 Add form to enter and display code

### 7.4 Understanding ESBuild and wasm
- [Transform API](https://esbuild.github.io/api/#transform-api)
- esbuild is built with Go programming lang
- esbuild npm module ( Go Code (does transpiling and bundling) + JS wrapper)
- esbuild-wasm:
    - esbuild web assembly
    - gives a small amount of JS (to interact with React App)
    - WASM (Go lang bundler compiled to work in browsere)
- Move esbuild.wasm file from node-modules to public file.
    - Since we want to run the file in our browser.

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
