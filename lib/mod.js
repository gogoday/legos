// 转译特殊字符
var escapeUserInput = function(str){
    return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");

};
