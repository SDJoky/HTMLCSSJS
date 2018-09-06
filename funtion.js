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