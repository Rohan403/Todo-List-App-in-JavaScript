var restoreString = function(s, indices) {
      var ans = [];
    for(var i=0;i<s.length;i++){
       ans[indices[i]]=s[i];
    }
    return ans.join('');
};