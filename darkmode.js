if (document.cookie == "theme=Dark") {
  var style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule('body {background-color: #242424}');
  style.sheet.insertRule('.header {background-color: #242424}');
  style.sheet.insertRule('p {color: #FFFFFF}');
  style.sheet.insertRule('h1 {color: #FFFFFF}');
  style.sheet.insertRule('h2 {color: #FFFFFF}');
  style.sheet.insertRule('#border {border-color: #FFFFFF}');
  style.sheet.insertRule('#newstitle {color: #000000}');
}
if (document.cookie == "theme=Light") {
  var style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule('body {background-color: #FFFFFF}');
  style.sheet.insertRule('.header {background-color: #FFFFFF}');
  style.sheet.insertRule('p {color: #000000}');
  style.sheet.insertRule('h1 {color: #000000}');
  style.sheet.insertRule('h2 {color: #000000}');
}
if (document.cookie == "theme=Carbon") {
  var style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule('body {background-image: url("carbon.png")}');
  style.sheet.insertRule('.header {background-image: url("carbon.png")}');
  style.sheet.insertRule('p {color: #FFFFFF}');
  style.sheet.insertRule('h1 {color: #FFFFFF}');
  style.sheet.insertRule('h2 {color: #FFFFFF}');
  style.sheet.insertRule('#border {border-color: #FFFFFF}');
  style.sheet.insertRule('#newstitle {color: #000000}');
}
if (document.cookie == "theme=Blend") {
  var style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule('body {background-color: #242424}');
  style.sheet.insertRule('.header {background-image: url("carbon.png")}');
  style.sheet.insertRule('p {color: #FFFFFF}');
  style.sheet.insertRule('h1 {color: #FFFFFF}');
  style.sheet.insertRule('h2 {color: #FFFFFF}');
  style.sheet.insertRule('#border {border-color: #FFFFFF}');
  style.sheet.insertRule('#newstitle {color: #000000}');
}