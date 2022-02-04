function add(...arr){
    let ans = 0
    let ans1 = 1
    for(const val of arr){
        ans+=val;
        ans1*=val;
    }
    console.log(ans)
    console.log(ans1);
}
add(3,4,2)