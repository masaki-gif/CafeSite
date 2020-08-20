
const question="ゲーム史上、最も売れたゲーム機はどれ？";

const   answers= [
  'スーパーファミコン',
   'PlayStation 2',
   'ニンテンドーDS',
   'Xbox 360'];

const correct="ニンテンドーDS";

document.getElementById("js-question").textContent=question;
//定数の文字列をHTMLに反映させる
const button= document.getElementsByTagName("button");
let i=0;
while(i<button.length){
  button[i].textContent=answers[i];
  i++;
};

//ボタンをクリックしたら正誤判定

  button[0].addEventListener("click",(e)=>{
    if( correct === e.target.textContent){
      window.alert("正解！");
    }else{
      window.alert("不正解！");
    };
  });

  button[1].addEventListener("click",(e)=>{
    if( correct === e.target.textContent){
      window.alert("正解！");
    }else{
      window.alert("不正解！");
    };
 });

 button[2].addEventListener("click",(e)=>{
   if( correct === e.target.textContent){
     window.alert("正解！");
   }else{
     window.alert("不正解！");
   };
});

button[3].addEventListener("click",(e)=>{
  if( correct === e.target.textContent){
    window.alert("正解！");
  }else{
    window.alert("不正解！");
  };
});
