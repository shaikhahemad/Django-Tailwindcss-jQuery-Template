import '../style/main.css'
import $ from 'jquery';
import 'jquery-ui/dist/jquery-ui';

window.$ = $;
window.jQuery = $;

$(document).ready(function() {
  // Write Your jQuery Here
  $('#btn').click(function(){
    $('#text').toggle()
  });
});