function add(a,b,...arr){
    let ans = 0
    let ans1 = 1
    ans=ans+a+b
    ans1= ans1*a*b
    for(const val of arr){
        ans+=val;
        ans1*=val;
    }
    console.log(ans)
    console.log(ans1);
}
add(5,2,3)