var year_slt = document.getElementById('year');

var month_slt = document.getElementById('month');

var day_slt = document.getElementById('date');        //提取日期

var now = new Date();

now_year = now.getFullYear();         //获取当前年份



for(i=now_year;i>=now_year-70;i--){              //从当前年份选近70年

    var opt_year = document.createElement('option');       //造元素

    opt_year.value = i;

    opt_year.innerText = i;

    year_slt.appendChild(opt_year);               //赋给天数的下拉框

}

for(i=1;i<=12;i++){

    var opt_month = document.createElement('option');

    opt_month.value = i;

    opt_month.innerText = i;

    month_slt.appendChild(opt_month);

}

function isRun(year){                        //判断闰年和平年，需确定二月份天数

    if((year%4==0 && year%100!==0)||year%400==0){

        return 29;

    }else{

        return 28;

    }

}

function addDay(){

    day_slt.innerHTML = '';

    if(month_slt.value==1||month_slt.value==3||month_slt.value==5||month_slt.value==7||month_slt.value==8||month_slt.value==10||month_slt.value   ==12){

        for(var i=1;i<=31;i++){

            var opt_day = document.createElement('option');

            opt_day.value = i;

            opt_day.innerText = i;

            day_slt.appendChild(opt_day);         //选出31天的月份，赋天数1~31

        }

    }else if(month_slt.value==4||month_slt.value==6||month_slt.value==9||month_slt==11){

        for(var i=1;i<=30;i++){

            var opt_day = document.createElement('option');

            opt_day.value = i;

            opt_day.innerText = i;

            day_slt.appendChild(opt_day);          // //选出30天的月份，赋天数1~30

        }

    }else{

        for(var i=1;i<=isRun(year_slt.value);i++){

            var opt_day = document.createElement('option');

            opt_day.value = i;

            opt_day.innerText = i;

            day_slt.appendChild(opt_day);      //确定二月份的天数

        }

    }

}
