const arr = [3,5,12,15,39,45,70];

    let result = [];
    console.log(arr);
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]%3==0 && arr[i]%2!==0){
            result += arr[i];
            result += "  ";
        }
        continue; 
    }
    
    console.log(result);
    

