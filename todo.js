var n= new Date();
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
document.getElementById("date").innerHTML=days[n.getDay()]+", "+ " "+n.getDate()+"/"+(n.getMonth()+1)+"/"+n.getFullYear();

$(".tb").on("keyup",function(e){
    if(e.keyCode==13 && $(".tb").val()!="")  //enter code=13
    {
        var task=$("<div class='task'></div>").text($(".tb").val());
        var del=$("<i class='fas fa-trash-alt'></i>").click(function(){
            var p=$(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });

        var check=$("<i class='fas fa-check'></i>").click(function(){
            var p=$(this).parent();
            p.fadeOut(function(){
                $(".comp").append(p);
                p.fadeIn();
            });
            $(this).remove();
            
        });
        task.append(del,check);
        $(".notcomp").append(task);
        $(".tb").val("");

    }
});
