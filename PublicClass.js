class ClassWithInstanceField {
    instanceField = 'instance field'
}

console.log(ClassWithInstanceField.staticField)

class ClassWithStaticField {
    static staticField = 'static field'
}

console.assert(ClassWithStaticField.hasOwnProperty('staticField'))
console.log(ClassWithStaticField.staticField)

class ClassWithPublicInstanceField{
    publicMethod() {
        return 'Hello World'
    }
}