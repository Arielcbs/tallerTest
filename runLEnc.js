
let str = {
    "string": "AAAAAAAAAAAAABBCCCCDD"
};

let str2 = {
    "string": "aA"
}

let str3 = {
    "string": "122333"
}


const count = async (str) => {
    
    var arr = str.split('');
    var arrcount = [];

    arr.forEach( char => {
        if(!arrcount.includes(char)){
            arrcount.push(char);
            // console.log(arrcount);
        }
        // console.log(char);
    })
    var countA= 0;
    var objcount = {};
    // console.log(arr);
    arrcount.forEach( ch => {
        for(var i=0; i< arr.length; i++){
            if(ch == arr[i]){
                if(!objcount[ch]){
                    objcount[ch] = 1;
                }else{
                    objcount[ch]++;
                }
            }
        }
    })
    // console.log(objcount);
    let runLenArrEntries = Object.values(objcount);
    let runLenArrKeys = Object.keys(objcount);
    // console.log(runLenArrEntries, runLenArrKeys);
    let runLenFinal = '';

    runLenArrEntries.map( (count, key) => {
        let mult = count/9;
        if(mult > 1){
            do{
                runLenFinal = runLenFinal + '9' + runLenArrKeys[key];
                count = count - 9;
            }while( count > 9);
            runLenFinal = runLenFinal + count + runLenArrKeys[key];
            count = '';
        }else{
            if(count == ''){
                runLenFinal = runLenFinal + 1 + runLenArrKeys[key];
            }else{
                runLenFinal = runLenFinal + count + runLenArrKeys[key];
                count = '';
            }
            
        }
    })
    // console.log(runLenFinal);
    return runLenFinal;
    
}

const runLenEncoding = async (str) => {
    let result = await count(str);
    console.log(result);
}


runLenEncoding(str3.string);