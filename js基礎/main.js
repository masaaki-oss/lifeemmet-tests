'use strict;'
let price = function(name,age){
  if(age >= 20) {
    document.write(`<p>${name}さんは20歳以上なので大人料金です。</p>`);
  } else {
    document.write(`<p>${name}さんは20歳未満なので子供料金です。</p>`);
  }
}
price('Onodera', 20);
// 引数も文字列のときはカンマ