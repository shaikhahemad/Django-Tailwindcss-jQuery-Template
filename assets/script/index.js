import '../style/main.css'
import $ from 'jquery';

window.$ = $;
window.jQuery = $;

$(document).ready(function() {
  // Write Your jQuery Here
  $('#btn').click(function(){
    $('#text').toggle()
  });
});