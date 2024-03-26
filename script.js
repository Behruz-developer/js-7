const object = {
    foydalanuvchi :{name: '',age: ''}
}

for (let i = 0; i < 10; i++) {
    let name1 = prompt('name')
    let age1 = +prompt('age')
    while (isNaN(age1) || age1 == 0 || name1 == '') {
        name1 = prompt('ismingizni kritishinfgiz kerak')
        age1  = +prompt('yoshingizni kritishinfgiz kerak')
    }

    function obj() {
        for (const key in object) {
            console.log(key , `${i+1}`)
            console.log(key.name = `${name1}`);
            console.log(key.age = `${age1}`);
        }
    }

    obj()
}
// console.log(object);

// const obj = {}

// obj.key = {name : 'behruz' , age : '19' }
// obj.key1 = {name : 'behruz' , age : '1' }

// console.log(obj);