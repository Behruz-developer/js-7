const object = {
    foydalanuvchi :{name: '',age: ''}
}

for (let i = 0; i < 10; i++) {
    let name1 = prompt('name')
    let age1 = +prompt('age')
    while (isNaN(age1) || age1 == 0 || name1 == '') {
        name1 = prompt('name')
        age1  = +prompt('age')
    }

    function obj() {
        for (const key in object) {
            console.log(key , `${i+1}`)
            console.log([key].name = `${name1}`);
            console.log([key].age = `${age1}`);
        }
    }

    obj()
}