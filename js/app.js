

$(document).ready(()=>{
$("a[href^='#']").click((e)=>{
    let Href= $(e.target.getAttribute('href'));
    let sectionOffSet= $(Href).offset().top;
    $("html,body").animate({scrollTop:sectionOffSet},1000);
})

    let WidthforSide=$(".inner-sideBar").innerWidth();
    $("#sideBar").css("left",-WidthforSide);
    $("#sideBar i").on("click",()=>{
        if($("#sideBar").css('left')=='0px'){
            $("#sideBar").animate({left:-WidthforSide},1000)
        }
        
        else{
            $("#sideBar").animate({left:0},1000)
        }
        
    })

    $("#closeBtn").on("click",()=>{
        $("#sideBar").animate({left:-WidthforSide},1000)
    })
   
    $("#singers .header-sing").on("click",(e)=>{
        let content = $(e.currentTarget).next()
        if(content.css('height') == "0px"){
            content.css("height","auto")
            content.css("display","block")
        }else{
            content.css("height","0px")
            content.css("display","none")
        } 
       
    });
        
        

    count("10 decamber 2024 8:59:00");
    function count(until) {
  
    let futureDate = new Date(until);
    futureDate = (futureDate.getTime()/1000);
    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)

  
    setInterval(function() {  count(until); }, 1000);
  }


let textarea = document.querySelector('#exampleFormControlTextarea1');
let message = document.querySelector('#element');

textarea.addEventListener('input', function () {
  let remaining = 100 - this.value.length;

  if (remaining < 0) {
    this.value = this.value.substring(0, 100);
    remaining = 0;
  }

  message.textContent = remaining + ' characters remaining';
  message.classList.add("text-danger");
});

 
    })





