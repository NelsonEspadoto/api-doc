//= require ./all_nosearch
//= require ./app/_search


window.addEventListener('load', function () {
    document.querySelectorAll('h2').forEach(function (h2) {
      title = h2.innerHTML.split('#')[0];
      tag = '<span class="tag tag--' + h2.innerHTML.split('#')[1] + '">\n                   ' + h2.innerHTML.split('#')[1] + ' \n                 </span> ' + title;
      template = h2.innerHTML.split('#')[1] ? tag : title;
      h2.innerHTML = template;
    });
  });