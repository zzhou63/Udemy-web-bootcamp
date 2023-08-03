

// $(document).keypress(function(event){
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover",function(){
//   $("h1").css("color", "purple");
// });

// 永远消失, 元素从HTML流中删除，所有其他内容都向上移动
// $("h1").on("click",function(){
//     $("h1").hide();
//   });

// 只是隐藏
// $("h1").on("click",function(){
//     $("h1").toggle();
//   });

  // 降低所选元素的透明度
  $("button").on("click",function(){
    $("h1").animate({
        opacity: 0.5
    });
  });  