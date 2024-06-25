
## Error 1
```bash
'react-scripts' is not recognized as an internal or external command,
```
> Solution 

```bash
#Install the project’s dependencies.
npm install

#Try running the project again. 
npm install

#Still seeing error then ‘react-scripts’ is not listed as a dependency in your package.json file

npm install react-scripts --save

```

## Error 2

```bash
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! react@1.0.0 start: `react-scripts start`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the react@1.0.0 start script.

```
>Solution 

```bash
# Delete node_modules and package-lock.json

rm -rf node_modules package-lock.json

# Reinstall the dependencies:
npm install

#Check your scripts in package.json

"scripts": {
  "start": "react-scripts start"
}

#Update react-scripts

npm install react-scripts@latest

#  run `npm audit fix` to fix them if it ask
npm audit fix

# start app
npm start

```

