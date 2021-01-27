//= require ./all_nosearch
//= require ./app/_search


window.addEventListener('load', ()=>{
    document.querySelectorAll('h2')
    .forEach((h2) => {
        title = h2.innerHTML.split('#')[0];
        tag = `<span class="tag tag--${h2.innerHTML.split('#')[1]}">
                 ${h2.innerHTML.split('#')[1]} 
               </span> ${title}` ;

        template = h2.innerHTML.split('#')[1] ? tag: title;
        h2.innerHTML = template ;
    });
})
