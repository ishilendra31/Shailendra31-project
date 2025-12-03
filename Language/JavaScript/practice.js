let arr=[1,2,3,4]
for(let i=arr.length-1;i>0;i-=1){
    let j= Math.floor(Math.random()*(i+1));
    console.log(j);
    [arr[i],arr[j]]=[arr[j],arr[i]];
    console.log(arr);
}
console.log(arr)

//  for (let i = arr.length - 1; i > 0; i-=1){
//     let j = Math.floor(Math.random() * (i +1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
// }