/* var arr = [1,2,5,4,6,8]
setTimeout(()=>{
    var ans = 1;
    for(const val of arr){
        ans *= val;
    }
    console.log(ans)
},3000) */

const interval = setInterval(()=>{
    console.log('hii');
   },1000) 


setTimeout(()=>{
    clearInterval(interval)
       setInterval(()=>{
        console.log('hi');
       },1000) 
},3000)


//Spread operator (we use 3 dots(...(any name)))

function add(a,b,...arr){
    let ans = 0
    ans=ans+a+b
    for(const val of arr){
        ans+=val;
    }
    console.log(ans)
}
add(2,3,5,2)

//Leetcode running sum of 1d array

var runningSum = function(nums){
    var ans = [];
    var sum =0;
    for(var i=0 ; i<nums.length ; i++){
        sum += nums[i];
        ans.push(sum);
    }
    return ans
};