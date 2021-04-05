# Cypress - Shopee

Kasikornbank Retainer - Test shopee page 

## Installation

Pull this repo to you folder 

```bash
yarn add
```

## Structure
You can rewrite everything in /cypress/ folder

```python
/component/ :  Reuseable components ex Navbar Card etc.
/fixtures/ : json files
/integration/ : spec test files #important
/pages/: Main page for include to spec
/plugins/: When you would like to import libs to project. you can import at here.
/support/: .... Read in /support/index.js
```

## How to run
Follow short script in package.json
```python
yarn run cy:open # or
yarn run cy:run
```