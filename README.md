## Pre requisites 

1. Node js 19.0

```bash
choco install nodejs --version="19.9.0"
# verifies the right Node.js version is in the environment
node -v       # should print `19`
# verifies the right NPM version is in the environment
npm -v # should print `9.6.3`
```

2. VS CODE

```bash
# we can download latest vs code from below link 
https://code.visualstudio.com/download

```

3. VS Extension 

3.1 HTML BoilerPlate
3.2 ES7 React-Native Snippet
 

## Advantages with React 
> UI Library: React is primarily a UI library, not a full-fledged framework.
> Component-Based: React uses components as building blocks for UI elements.
> JavaScript + JSX: React is based on JavaScript, often combined with JSX (JavaScript XML) for creating elements.
> Flexibility: React doesn’t enforce a specific project structure, allowing developers to start with minimal code.
> Popular: Widely adopted and backed by a large community.
> Efficient Updates: React DOM efficiently updates elements when data changes.


### How Virtual DOM works

**Initial Render**:
        When you create a React component, it generates a virtual representation of the UI called the Virtual DOM.
        The Virtual DOM is a lightweight copy of the actual DOM, containing elements and their properties (attributes, styles, etc.).
**Component State Changes**:
    When the component’s state or props change, React re-renders the Virtual DOM.
    It calculates the difference (diff) between the previous Virtual DOM and the new one.
**Diffing Algorithm**:
    React uses a diffing algorithm to compare the old and new Virtual DOM trees.
    It identifies which parts of the UI need to be updated.
**Minimal Updates**:
    Instead of directly modifying the actual DOM, React applies only the necessary changes.
    It creates a patch (set of instructions) to update the real DOM efficiently.
**Batched Updates**:
    React batches multiple updates together to minimize DOM manipulation.
    It performs all updates in a single batch, reducing performance overhead.
**Reconciliation**:
    React reconciles the Virtual DOM changes with the actual DOM.
    It updates only the affected elements, avoiding unnecessary reflows and repaints.
**Performance Benefits**:
    VDOM reduces direct DOM manipulation, which can be slow and resource-intensive.
    By minimizing updates, React improves performance and responsiveness.

```bash
#react version 
npm view react version 

# set path of npm package in environment variable path 

C:\Users\<userid>\AppData\Roaming\npm
```

```bash
#create react app using npm ( node package manager uses local packages)
npm  create-react-app my-app
cd my-app
npm start
```

```bash
npm view react version 

#create react app using npx ( node package executable  uses online packages)
npx create-react-app my-app

cd my-app
npm start
```

Package.json vs package-lock.json ?


