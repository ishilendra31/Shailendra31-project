// The program must find and print:
// The length of the longest strictly increasing contiguous subarray.
// The subarray itself.

let arr=[1, 2, 2, 3, 4, 5, -1, 0]
let n=8
let subarr=[]
let l=0
let i=0
while(i<n){
    let j=i
    let temp=[]
    let t_l=0
    temp[t_l] = arr[j];
    t_l+=1
    while(j+1<n){
        if(arr[j]<arr[j+1]){
           temp[t_l]=arr[j+1]
            t_l+=1
        }
        else{
            break
        }
        if(t_l>l){
            subarr=[...temp]
            l=t_l
        }
        j+=1
    }
    i+=1
}
console.log(subarr,l)


