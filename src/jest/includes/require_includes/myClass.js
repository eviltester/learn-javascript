class MyClass{

    constructor() {
        this.aProperty = "bob";
    }

    getProperty(){
        return this.aProperty;
    }
}

module.exports.MyClass = MyClass;