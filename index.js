const bg = document.getElementById("bg");
console.log(document.body.offsetWidth);
console.log(bg.clientWidth);
console.log(bg.clientHeight);
// function toBottom() {
//   console.log("hello");
//   window.scrollTo(1000000000, 0);
// }
// window.onload = toBottom;

$(document).ready(function () {
  var outerContent = $(".abc");
  var innerContent = $(".abc > div");

  outerContent.scrollLeft((innerContent.width() - outerContent.width()) / 2);
});

$(document).ready(function () {
  $(".outer-wrapper").mousewheel(function (e, delta) {
    this.scrollLeft -= delta * 100;
    e.preventDefault();
  });
});
