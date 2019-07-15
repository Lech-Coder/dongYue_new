var slidBar = document.getElementById('range').value;;
function change(){
  slidBar = document.getElementById('range').value;
  document.getElementById('time-num').innerHTML = slidBar;
};
//提交时间
$('body').on('click','#setTime',function(){
  alert(slidBar)
})


$('.select_shouhuan .select_ul li').on('click',function (d) {
  if ($(this)[0].className=='active') {
    $(this).removeClass('active')
  }else{
    $(this).addClass('active');
  }
})
