document.getElementById('attack-btn').addEventListener('click', takeDamage)
const coverImageHtml = document.querySelectorAll('.cover-image')



function takeDamage() {
    document.getElementById('test-div').textContent = 'this works!'
    // coverImageHtml.classList.remove('take-damage')
    coverImageHtml.classList.add('take-damage') 
   
}

// $("button").click(function(){
//     // $("cover-image").toggleClass("take-damage");
//     // $("p").html("Hello <b>world</b>!");
//     $("p").html("this works!");
//   });
