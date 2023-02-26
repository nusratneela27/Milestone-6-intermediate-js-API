const user = {id: 1, name: 'gorib aamir', job:'actor'};
console.log(user)

const userJson =JSON.stringify(user);
console.log(userJson);

const userArray = JSON.parse(userJson);
console.log(userArray)