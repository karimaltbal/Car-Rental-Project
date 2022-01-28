/**دا الى بيقلب الصور فى بداية الصفحة */

let change_photo=document.getElementById('landing-page');

let Array_photo=[
    "https://www.up-00.com/i/00210/xybn4j0oqkni.jpg",
    "https://www.up-00.com/i/00210/8735mewiamt3.jpg",
    "https://www.up-00.com/i/00210/mcs1fnb9yv9w.jpg",
    "https://www.up-00.com/i/00210/0vb83ivjfibr.jpg",
    "https://www.up-00.com/i/00210/4a9jr4ulaqia.jpg",
    "https://www.up-00.com/i/00210/a5j3jfvm4ave.jpg"];

setInterval(function(){
    let Random_photo=Math.floor(Math.random()*Array_photo.length);
    
    change_photo.style.backgroundImage='url(' + Array_photo[Random_photo] +')';
},10500);

/*دا الأزرار الى بتقلب الصور فى بداية الصفحة  */

var $nextt=document.getElementById('nextt'),
    $prevv=document.getElementById('prevv'),
    current_photo=-1;

$nextt.onclick=function(){
    if(current_photo>4){
        return false;
    } else {
        current_photo++;
        change_photo.style.backgroundImage='url(' + Array_photo[current_photo] +')';
    }
}
$prevv.onclick=function(){
    if(current_photo<1){
        return false;
    }else{
        current_photo--;
        change_photo.style.backgroundImage='url(' + Array_photo[current_photo] +')';
   }
}
 
/*دا الى بيكتب الكلام الى موجود فى بدايةا بصفحة  */

var $ptxt="        Car-rental system provides services within 24 hours. Therefore, customers will enjoy all day long service. The existence of online car rental systems has prevailed in facilitating many processes such as submitting or requesting leasing .......",
    $p=document.getElementById('p'),
    i=0;

var method1=setInterval(function (){
    $p.textContent+=$ptxt[i];
    i++;
    if(i>$ptxt.length-1){
        clearInterval(method1);
    }
},100);

////////////////////////////////////////////////////////////////  دا الى بيظهر اسماء وصور الأشخاص

                 ////// حرف A
var $btnconvert1=document.getElementById('btn-convert1'),
    $closes1=document.getElementById('closes'),
    $div1=document.getElementById('div1-convert');

$btnconvert1.onclick=function(){
    $div1.style.display="block";

}

$closes1.onclick=function(){
    $div1.style.display='none';
}

                 ////// حرف E
var $btnconvert5=document.getElementById('btn-convert5'),
    $closes5=document.getElementById('closes5'),
    $div5=document.getElementById('div5-convert');

$btnconvert5.onclick=function(){
    $div5.style.display="block";

}

$closes5.onclick=function(){
    $div5.style.display='none';
}

                 ////// حرف H
var $btnconvert8=document.getElementById('btn-convert8'),
    $closes8=document.getElementById('closes8'),
    $div8=document.getElementById('div8-convert');

$btnconvert8.onclick=function(){
    $div8.style.display="block";

}

$closes8.onclick=function(){
    $div8.style.display='none';
}

  /* slideshowالقسم المسؤال عنن الأظهار والأخفاء */


  var $btnn_show=document.getElementById('btnn-click'),
      $sliddee=document.getElementById('colledct-photo');
  $btnn_show.onclick=function(){
      $sliddee.style.display="block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == $sliddee) {
    $sliddee.style.display = "none";
  }
}

/*نهاية  القسم  */


var arrayslide=Array.from(document.querySelectorAll('.slide-image img'));

var lengtharray=arrayslide.length;

var cuurentslide=1;

var slidenumber=document.getElementById('slide-number');

var next=document.getElementById('next'),
    prev=document.getElementById('prev');

next.onclick=btn_next;

prev.onclick=btn_prev;

/* انا عملتها بال html بس ممكن تعملها بالجافا */

var crateul=document.createElement('ul');
    crateul.setAttribute('id','name-ul');

for(var i=1;i<=lengtharray;i++){

    var crateli=document.createElement('li');
    crateli.setAttribute('data-index',i);

    var createtxt=document.createTextNode(i);
    crateli.appendChild(createtxt);
    crateul.appendChild(crateli);
}

document.getElementById('indecator').appendChild(crateul);

var contunt_ul=document.getElementById("name-ul");

var arrayli=Array.from(document.querySelectorAll('#name-ul li'));

for(var i=0;i<arrayli.length;i++){

    arrayli[i].onclick=function(){
    cuurentslide=parseInt(this.getAttribute('data-index'));
    checker();

}
}

checker();


function btn_next(){
    if(next.classList.contains('disabled')){
        return false;
    }else{
        cuurentslide++;
        checker();
    }
}

function btn_prev(){
    if(prev.classList.contains('disabled')){
        return false;
    }else{
        cuurentslide--;
        checker();
    }
}



function checker(){ 
    slidenumber.textContent= "slide # "+ cuurentslide +' / ' +lengtharray;

    remove_active_all();

    arrayslide[cuurentslide-1].classList.add('active');

    contunt_ul.children[cuurentslide-1].classList.add('active');

    if(cuurentslide == 1){
        prev.classList.add('disabled')
    }else{
        prev.classList.remove('disabled')
    }


    if(cuurentslide == lengtharray){
        next.classList.add('disabled')
    }else{
        next.classList.remove('disabled')
    }

}


function remove_active_all(){
    arrayslide.forEach(function(img){
img.classList.remove('active');
    });

    arrayli.forEach(function(li){
        li.classList.remove('active');
    });
}


  /*end part showslide */

  $(document).ready(function(){
   
    $(function(){
        $('body').niceScroll({
            cursorcolor: "#0069d9",
            cursorwidth: "8px",
            cursorborder: 'none',
            zindex: '10'
        })
    })
})

