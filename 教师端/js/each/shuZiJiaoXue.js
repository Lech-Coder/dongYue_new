$('body').on('click','.select-list li',function(){
  $(this).find('.icon-selected-gougou').addClass('active')
  .parent().siblings().find('.icon-selected-gougou').removeClass('active');
  $('#zhdf-res').text($(this)[0].innerText);
  $('.select-list').css({'display':'none'});
  $('.select-list ul').animate({'bottom':'-100%'});
})
$('body').on('click','.list-item-new',function(){
  $('.select-list').css({'display':'block'});
  $('.select-list ul').animate({'bottom':'0'},300);
})


$('.leg_header input').click(function () {
  IsSelect('.leg_header input')
})

$('.leg').on('click','.leg_body li',function () {
  $(this).addClass('active').siblings().removeClass('active');
})



function IsSelect(ele){
//判断checkbox是否被选中
  if($(ele).is(":checked")){
    // console.log('选中');
    // alert($(ele).val())
    $(".leg_body").css('display','block')
  }
  else{
    // console.log('未选中');
    $(".leg_body").css('display','none')
  }
}
