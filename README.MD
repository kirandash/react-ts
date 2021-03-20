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


