window.onkeyup=function(e){
  console.log(e);

//   if(e.key=='ArrowUp'){
//     console.log('ArrowUp');
//
//     document.querySelector('body > main').style.cssText=`
//       background-position: 150% 10%;
//     `;
//     document.querySelector('body > main > div').style.cssText=`
//     transform:rotate(0deg);
//     // display:flex;
//     // justify-content: center;
//     // align-items: center;
//     // background: url('img/airplan.png') center center no-repeat;
//     // background-size: 70px 70px;
//     // width:70px;
//     // height:70px;
//     `;
//   }else if(e.key=='ArrowDown'){
//     console.log('ArrowDown');
//     document.querySelector('body > main > div').style.cssText=`
//     transform:rotate(180deg);
//
//     `;
//   }else if(e.key=='ArrowLeft'){
//     console.log('ArrowLeft');
//     document.querySelector('body > main > div').style.cssText=`
//     transform:rotate(270deg);
//
//     `;
//   }else if(e.key=='ArrowRight'){
//     console.log('ArrowRight');
//     document.querySelector('body > main > div').style.cssText=`
//     transform:rotate(90deg);
//
//     `;
//   }else{
//     console.log('Неопределенная клавиша!');
//   }
}
const op={
  x : 50,
  y : 50
}
window.onkeydown=function(e){
  // console.log(e);
  //background position

    if(e.key=='ArrowUp'){
      console.log('ArrowUp');
      document.querySelector('body > main').style.cssText=`
        background-position: ${op.x}% ${op.y}%;
      `;
      document.querySelector('body > main > div').style.cssText=`
         transform:rotate(0deg);
         `;
      op.y--;
      if(op.y==0){
        op.y=100;
      }else{
        console.log("top");
      }
      console.log(op.y);

    }else if(e.key=='ArrowDown'){
      console.log('ArrowDown');
      op.y++;
      document.querySelector('body > main').style.cssText=`
      background-position: ${op.x}% ${op.y}%;
      `;
      console.log(op.y);
      console.log('ArrowDown');
         document.querySelector('body > main > div').style.cssText=`
         transform:rotate(180deg);
         `;
         if(op.y==100){
           op.y=0;
         }else{
           console.log("button")
         }
    }else if(e.key=='ArrowLeft'){
      console.log('ArrowLeft');
      op.x--;
      document.querySelector('body > main').style.cssText=`
      background-position: ${op.x}% ${op.y}%;
      `;
      console.log(op.x);
      console.log('ArrowDown');
         document.querySelector('body > main > div').style.cssText=`
         transform:rotate(270deg);
         `;
         if(op.x==0){
           op.x=100;
         }else{
           console.log("letf");
         }
    }else if(e.key=='ArrowRight'){
      console.log('ArrowRight');
      op.x++;
      document.querySelector('body > main').style.cssText=`
      background-position: ${op.x}% ${op.y}%;
      `;
      console.log(op.x);
      console.log('ArrowDown');
         document.querySelector('body > main > div').style.cssText=`
         transform:rotate(95deg);
         `;
         if(op.x==100){
           op.x=0;
         }else{
           console.log("letf");
         }
    }else{
      console.log('Неопределенная клавиша!');
    }
}
