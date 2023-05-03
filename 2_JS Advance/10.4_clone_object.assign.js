// clone using object.assign

//memory

const obj = {
    k1 : 'value1',
    k2 : 'value2'
}

//normal cloning ways
const obj1 = obj;
obj.k3 = 'value3';
console.log(obj);
console.log(obj1);

const obj2 = {...obj};
// obj.k = 'value unique'; // will not add in obj2
console.log(obj2);

//object assign

const obj3 = Object.assign({}, obj);
// obj.k = 'value unique';
console.log(obj3);


