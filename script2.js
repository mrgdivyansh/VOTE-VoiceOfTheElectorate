const list = document.querySelectorAll('.list');
const darkButton = document.querySelector(".darkmode");

function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));
// $(".darkmode").click(function(){
// 	$("body").toggleClass("dark")
// 		.css( //3
// 			$("body").hasClass("dark") ?
// 		  	{background:"#000000", color:"#f9f9f9"} : {background:"#f9f9f9", color:"#202225"}
// 		);
// });

darkButton.addEventListener("click", ()=>{
    if (document.body.classList.contains( "darKTheme" )) {
	    return document.body.classList.remove("darKTheme");
    }
    
    return document.body.classList.add("darKTheme");
    


})