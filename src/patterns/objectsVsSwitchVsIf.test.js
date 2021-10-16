describe('Objects as Conditionals pattern : if vs switch vs Object Literals',()=>{

    test('we could have a bunch of nested ifs, but these can be hard to maintain and extend', () => {

        function format(x, y, op){

            const firstCaps= (word)=>{
                return word.charAt(0).toUpperCase()+word.substr(1,word.length);
            }
            if(op.toLowerCase()==='join'){
                return x.concat(y);
            }else{
                if(op.toLowerCase()==='camelcase'){
                    return x.toLowerCase()+firstCaps(y);
                }else{
                    if(op.toLowerCase()==='pascalcase'){
                        return firstCaps(x)+firstCaps(y);
                    }else{
                        if(op.toLowerCase()==='constant'){
                            return x.toUpperCase()+"_"+y.toUpperCase();
                        }else{
                            return "Unrecognised operator"
                        }
                    }
                }
            }
        }

        expect(format("conditionals","pattern",'join')).toBe("conditionalspattern");
        expect(format("conditionals","pattern",'camelCase')).toBe("conditionalsPattern");
        expect(format("conditionals","pattern",'PascalCase')).toBe("ConditionalsPattern");
        expect(format("conditionals","pattern",'CONSTANT')).toBe("CONDITIONALS_PATTERN");
        expect(format("conditionals","pattern",'spaceit')).toBe("Unrecognised operator");
    });

    test('better: we may not need to have nested ifs, and instead return early but it is easy to get wrong and write = instead of ===', () => {

        function format(x, y, op){

            const firstCaps= (word)=>{
                return word.charAt(0).toUpperCase()+word.substr(1,word.length);
            }

            if(op.toLowerCase()==='join'){
                return x.concat(y);
            }
            
            if(op.toLowerCase()==='camelcase'){
                return x.toLowerCase()+firstCaps(y);
            }

            if(op.toLowerCase()==='pascalcase'){
                return firstCaps(x)+firstCaps(y);
            }

            if(op.toLowerCase()==='constant'){
                return x.toUpperCase()+"_"+y.toUpperCase();
            }

            return "Unrecognised operator";
        }

        expect(format("conditionals","pattern",'join')).toBe("conditionalspattern");
        expect(format("conditionals","pattern",'camelCase')).toBe("conditionalsPattern");
        expect(format("conditionals","pattern",'PascalCase')).toBe("ConditionalsPattern");
        expect(format("conditionals","pattern",'CONSTANT')).toBe("CONDITIONALS_PATTERN");
        expect(format("conditionals","pattern",'spaceit')).toBe("Unrecognised operator");
    });

    /*
    But with a `switch` it is easy to forget a `default` or a `break`
    */
    test('better: a switch statement can cut down on errors and coding', () => {

        function format(x, y, op){

            const firstCaps= (word)=>{
                return word.charAt(0).toUpperCase()+word.substr(1,word.length);
            }

            var retVal="";
            switch(op.toLowerCase()){
                case 'join':
                    retVal =  x.concat(y);
                    break;
                case 'camelcase':
                    retVal = x.toLowerCase()+firstCaps(y);
                    break;
                case 'pascalcase':
                    retVal = firstCaps(x)+firstCaps(y);
                    break;
                case 'constant':
                    retVal = x.toUpperCase()+"_"+y.toUpperCase();
                    break;
                default:
                    retVal = "Unrecognised operator";
            }
            return retVal;        
        }

        expect(format("conditionals","pattern",'join')).toBe("conditionalspattern");
        expect(format("conditionals","pattern",'camelCase')).toBe("conditionalsPattern");
        expect(format("conditionals","pattern",'PascalCase')).toBe("ConditionalsPattern");
        expect(format("conditionals","pattern",'CONSTANT')).toBe("CONDITIONALS_PATTERN");
        expect(format("conditionals","pattern",'spaceit')).toBe("Unrecognised operator");
    });

    test('better: we could use an object, and check that the command exists', () => {

        function format(x, y, op){

            const firstCaps= (word)=>{
                return word.charAt(0).toUpperCase()+word.substr(1,word.length);
            }

            const operators= {
                join: (x,y) => x.concat(y),
                camelcase: (x,y) => x.toLowerCase()+firstCaps(y),
                pascalcase: (x,y) => firstCaps(x)+firstCaps(y),
                constant: (x,y) => x.toUpperCase()+"_"+y.toUpperCase(),
            }

            const command = operators[op.toLowerCase()];
            return command!=undefined ? command(x,y) : "Unrecognised operator";

        }

        expect(format("conditionals","pattern",'join')).toBe("conditionalspattern");
        expect(format("conditionals","pattern",'camelCase')).toBe("conditionalsPattern");
        expect(format("conditionals","pattern",'PascalCase')).toBe("ConditionalsPattern");
        expect(format("conditionals","pattern",'CONSTANT')).toBe("CONDITIONALS_PATTERN");
        expect(format("conditionals","pattern",'spaceit')).toBe("Unrecognised operator");
    });


    test('better: we could use an object, with optional chaining and nullish coalescing', () => {

        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator

        function format(x, y, op){

            const firstCaps= (word)=>{
                return word.charAt(0).toUpperCase()+word.substr(1,word.length);
            }

            const operators= {
                join: (x,y) => x.concat(y),
                camelcase: (x,y) => x.toLowerCase()+firstCaps(y),
                pascalcase: (x,y) => firstCaps(x)+firstCaps(y),
                constant: (x,y) => x.toUpperCase()+"_"+y.toUpperCase(),
            }

            // optional chaining ?. means we only call the function if it is not undefined
            // nullish coalescing ?? means if the left hand site is nullish (null, undefined)
            //                    then use the right hand side
            return operators[op.toLowerCase()]?.(x,y) ?? "Unrecognised operator";
        }

        expect(format("conditionals","pattern",'join')).toBe("conditionalspattern");
        expect(format("conditionals","pattern",'camelCase')).toBe("conditionalsPattern");
        expect(format("conditionals","pattern",'PascalCase')).toBe("ConditionalsPattern");
        expect(format("conditionals","pattern",'CONSTANT')).toBe("CONDITIONALS_PATTERN");
        expect(format("conditionals","pattern",'spaceit')).toBe("Unrecognised operator");
    });

});