let array =[12, 2, 1, 5, 7, 9, 24, 56, 3];

function bubbleSort (arr){
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = 0; j< arr.length - 1; j++){
            if (arr[j] > arr [j+1]){
                let aux = arr [j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
            };
        };    
    };
    return arr;
};  
console.log(bubbleSort(array));