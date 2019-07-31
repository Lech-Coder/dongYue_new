$(function(){
  $('.leftNav>ul>li').removeClass('focus')
  $('.leftNav>ul>li').eq(1).addClass('focus')
  $('.leftNav>ul>li>ul>li').removeClass('focus')
  $('.leftNav>ul>li>ul>li').eq(1).addClass('focus')

  $('.year .box span').bind('click',change)
  $('.grade .box span').bind('click',change)
  $('.class .box span').bind('click',change)
  $('.qujian .box span').bind('click',change)

  function change(){
    var $this=$(this)
    $this.siblings().removeClass('focus')
    $this.addClass('focus')
  }  


  //低到高
  $('body').on('click', '#sort-up', function () {
    var domList = $('#sort-box .order-el').get();
    domList.sort(function (a, b) {
      var elOne = +($(a).find('.order-val').text().split("%")[0]);
      var elTwo = +($(b).find('.order-val').text().split("%")[0]);
      if (elOne > elTwo) return 1;
      if (elOne < elTwo) return -1;
      return 0;
    });
    $('#sort-box').append(domList)
  });
  //高到低
  $('body').on('click', '#sort-down', function () {
    var domList = $('#sort-box .order-el').get();
    domList.sort(function (a, b) {
      var elOne = +($(a).find('.order-val').text().split("%")[0]);
      var elTwo = +($(b).find('.order-val').text().split("%")[0]);
      if (elOne > elTwo) return -1;
      if (elOne < elTwo) return 1;
      return 0;
    });
    $('#sort-box').append(domList)
  });
})