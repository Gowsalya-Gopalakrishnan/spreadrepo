const profile ={
    Name:"Fahat",
    Age:32,
    Address:{
        City:"Anna Nagar",
        Zipcode:324532
    }
};
const updates = {
    Age:24,
    Address:{
        Zipcode:934532,
        Country : "India"
    }
};
//console.log({...profile,...updates});
const merge = {
    ...profile,
    Age:updates.Age,
    Address:{
        ...profile.Address,
        ...updates.Address
    }
};
console.log(merge);