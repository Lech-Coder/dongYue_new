
    // 切换选中状态
    $('.choose-box .c-item').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

//选择图片
    function viewImage(e) {

        var file = $('.up-img').prop('files')[0]
        if (file) {
            // image = file; //用于确定信息时确保是否已上传图片
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function (even) {
                $('#'+e).attr("src", even.currentTarget.result);
            }
        }
    }
