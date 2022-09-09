//数组对象去重
export function getNewArrObject(arr, key) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var flag = true;
    for (var j = 0; j < newArr.length; j++) {
      if (arr[i].key == newArr[j].key) {
        flag = false;
        break
      };
    };
    if (flag) {
      newArr.push(arr[i]);
    };
  };
  return newArr;
},

//数组去重
export function getNewArr(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array .indexOf(arr[i]) === -1) {
            array .push(arr[i])
        }
    }
    return array;
}