function compareVersion(version1: string, version2: string): number {
      var v1Array = version1.split('.');
    var v2Array = version2.split('.');
    var length = Math.max(v1Array.length, v2Array.length);
    
    for (var i = 0; i < length; i++) {
        var num1 = parseInt(v1Array[i]) || 0;
        var num2 = parseInt(v2Array[i]) || 0;
        
        if (num1 == num2) {
            continue;
        }
        
        return num1 > num2 ? 1 : -1;
    }
    
    return 0; 
};