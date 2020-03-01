if (document.cookie == "theme=Dark") {
  var style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule('body {background-color: #242424}');
  style.sheet.insertRule('.header {background-color: #242424}');
  style.sheet.insertRule('p {color: #FFFFFF}');
  style.sheet.insertRule('h1 {color: #FFFFFF}');
  style.sheet.insertRule('h2 {color: #FFFFFF}');
  style.sheet.insertRule('.content {background: #242424}');
  style.sheet.insertRule('.content {color: #FFFFFF}');
  style.sheet.insertRule('.tabs {color: #FFFFFF}');
  style.sheet.insertRule('#logo {filter: invert(100%);}');
}
if (document.cookie == "theme=Light") {
  var style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule('body {background-color: #242424}');
  style.sheet.insertRule('.header {background-color: #FFFFFF}');
  style.sheet.insertRule('p {color: #000000}');
  style.sheet.insertRule('h1 {color: #000000}');
  style.sheet.insertRule('h2 {color: #000000}');
  style.sheet.insertRule('.content {background: #FFFFFF}');
  style.sheet.insertRule('.content {color: #000000}');
  style.sheet.insertRule('.tabs {color: #000000}');
  style.sheet.insertRule('#logo {filter: invert(0%);}');
}
function themeLight() {
  document.cookie = "theme=Light; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  console.log("Set the theme to Light");
  var style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule('body {background-color: #242424}');
  style.sheet.insertRule('.header {background-color: #FFFFFF}');
  style.sheet.insertRule('p {color: #000000}');
  style.sheet.insertRule('h1 {color: #000000}');
  style.sheet.insertRule('h2 {color: #000000}');
  style.sheet.insertRule('.content {background: #FFFFFF}');
  style.sheet.insertRule('.content {color: #000000}');
  style.sheet.insertRule('.tabs {color: #000000}');
  style.sheet.insertRule('#logo {filter: invert(0%);}');
}
function themeDark() {
  document.cookie = "theme=Dark; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  console.log("Set the theme to Dark");
  var style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule('body {background-color: #242424}');
  style.sheet.insertRule('.header {background-color: #242424}');
  style.sheet.insertRule('p {color: #FFFFFF}');
  style.sheet.insertRule('h1 {color: #FFFFFF}');
  style.sheet.insertRule('h2 {color: #FFFFFF}');
  style.sheet.insertRule('.content {background: #242424}');
  style.sheet.insertRule('.content {color: #FFFFFF}');
  style.sheet.insertRule('.tabs {color: #FFFFFF}');
  style.sheet.insertRule('#logo {filter: invert(100%);}');
}
function more() {
  var style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule('.extrapage {display:inline}');
  style.sheet.insertRule('#more {display:none}');
  style.sheet.insertRule('#less {display:inline}');
}
function less() {
  var style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule('.extrapage {display:none}');
  style.sheet.insertRule('#less {display:none}');
  style.sheet.insertRule('#more {display:inline}');
}