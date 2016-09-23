$(function()
{

var fr=0,sew;
var index,th;
$(".rating-circle").hover(
function()
{
if(fr==0)
{$(this).prevAll().andSelf().addClass("rating-hover");}
else
{

th.prevAll().andSelf().removeClass("rating-chosen")
$(this).prevAll().andSelf().addClass("rating-hover");

}

//fr.prevAll().andSelf().addClass("rating-hover");
})

$(".rating-circle").mouseout(
function()
{
$(this).prevAll().andSelf().removeClass("rating-hover");
//
//$(this).prevAll().andSelf().removeClass("rating-chosen");
th.prevAll().andSelf().addClass("rating-chosen");
}

)

$(".rating-circle").click(
function()
{
sew=$(this).prevAll().andSelf().addClass("rating-chosen");;
index=$(this).index();
//alert(index);
th=$(this);
fr=1;
}

)

});