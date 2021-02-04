$(document).ready(function () {
  $.getJSON("bokningar.json", function (bokning) {
    for (let i = 0; i < data.length; i++) {
      document.write('<div><p class="bokningar">' + bokning[i].namn + ' ' + bokning[i].sittplats + ' ' + bokning[i].datum + ' ' + bokning[i].tid + '</p></div>');
    };
  });
});