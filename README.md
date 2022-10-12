# Starter frontend template for NEAR projects

## Features:

- Routing
- Dark Theme toggler
- Tailwind CSS
- Redirect Page

<hr/>

## Things to change:

### `NEAR/config.js` :

1. change contract name - line 1

### `src/index.js` :

1. choose environment (testnet/mainnet) - line 14
2. add contract's functions (view & change) - lines 42,44

### `src/App.js` :

1. change contract name at sign in method - line 14

<hr/>

## Functions calling:

- pass the `contract` to any component, and then call `contract.myFunction()`

- if it has any parameters, then `contract.myFunction({ arg1 : 'a', arg2 : 'b' })`

- to get the hash of any transaction:

```js
// pass wallet to the component from App.js
const resp = await wallet
  .account()
  .signAndSendTransaction({
    receiverId: 'abcdefg.testnet',
    actions: [
      // import { transactions } from 'near-api-js';
      transactions.functionCall(
        'methodName',
        {
          arg1: id,
          arg2: newOwner,
        },
        30000000000000, // 300 Tgas
        0 // attached money
      ),
    ],
  })
  .catch((err) => {
    console.log(err);
  });
console.log(resp.transaction.hash); // gets the hash
```
