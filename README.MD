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
