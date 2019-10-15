import Redux from 'redux';

console.clear();
const createPolicy = (name, amount) = {
  return {
  type: 'CREATE_POLICY',
  payload: {
    name: name,
    amount: amount
  }
  };
};

const deletePolicy = (name) = {
  return {
  type: 'DELETE_POLICY',
  payload: {
    name: name
  }
  };
};

const createClaim = (name, amountOfMoneyToCollect) = {
  return {
  type: 'CREATE_CLAIM',
  payload: {
    name: name,
    amountOfMoneyToCollect: amountOfMoneyToCollect
  }
  };
};

const claimsHistory = (oldListOfClaims=[], action) = {
  if(action.type === 'CREATE_CLAIM'){
    return [...oldListOfClaims, action.payload]
  }
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) = {
  if(action.type === 'CREATE_CLAIM' ){
    return bagOfMoney - amountOfMoneyToCollect;
  }else if(action.type === 'CREATE_POLICY'){
    return bagOfMoney + amount;
  }
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) = {
  if(action.type === 'CREATE_POLICY'){
    return [...listOfPolicies, action.payload.name];
  }else if (action.type === 'DELETE_POLICY'){
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
};

console.log.(Redux);

const {createStore, combineReducers} = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);


//Ejemplo 1
const action = createPolicy('Alex', 20);
store.dispatch(action);
console.log(store.getState());

//Ejemplo 2
store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));
console.log(store.getState());
//Ejemplo 3
store.dispatch(createClaim('Alex', 120));
store.dispatch(createClaim('Jim', 50));
console.log(store.getState());
//Ejemplo 4
store.dispatch(deletePolicy('Bob'));
console.log(store.getState());