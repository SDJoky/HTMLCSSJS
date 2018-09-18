function clickFunction()
{
    document.getElementById("paragraph").innerHTML="你好，贵客";
    document.getElementById("myDiv").innerHTML="how are you?";
}

function ageIsPermit()
{
    var age,resultStr;
    age = document.getElementById('age').value;
    resultStr = (age < 18) ? '年龄较小' : '年龄达到';
    document.getElementById('result').innerHTML = resultStr;
}

function rexg()
{
    // 正则表达式
    var str = document.getElementById('result').innerHTML;
    if(str.search('年龄') >= 0){
        document.getElementById('result').innerHTML = str.replace(/年龄/i,"age");
    }else if(str.search('age') >= 0)
    {
        return;
    }
    else
    {
        document.getElementById('result').innerHTML = '请先获取结果';
    } 
}

// 表单email验证
function myButtonInform()
{
    var x = document.getElementById("inform").value;
    var atpos = x.indexOf('@');
    var dotpos = x.lastIndexOf('.');
    if(atpos<1 || dotpos<atpos+2 || dotpos + 2 >= x.length)
    {
        document.getElementById("resultTxt").innerHTML = '不是有效地址';
    }else
    {
        document.getElementById("resultTxt").innerHTML = '地址正确';
    }
}