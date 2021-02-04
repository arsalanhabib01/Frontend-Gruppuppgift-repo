$(document).ready(function () {
  $.getJSON("bokningar.json", function (person) {
    for (let i = 0; i < data.length; i++) {
      document.write('<div><p class="bokningar">' + person[i].namn + ' ' + person[i].sittplats + ' ' + person[i].datum + ' ' + person[i].tid + '</p></div>');
    };
  });
});