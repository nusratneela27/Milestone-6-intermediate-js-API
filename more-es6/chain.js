const users = [{id: 1, name:'abul', job: 'doctor'}]
console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id:1, name: 'babul', job:'leader'},
        {id:2, name: 'dabul', job:'leader'},
    ]
}
const firstJob = data.data[0].job;
console.log(firstJob)

const user = {
    id: 102,
    name: 'Neela',
    address: {
        street:{
            road: 'road-20',
            house: 'houde-11',
            building: '3rd-floor'
        },
        postOffice: 'mirpur',
        city: 'dhaka'
    }
}

const userFloor = user.address.street.road;
console.log(userFloor)