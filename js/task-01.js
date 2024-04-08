const inputEl = document.querySelector(".input");
const outputEl = document.querySelector(".output");
const buttonEl = document.querySelector(".button");

buttonEl.addEventListener("click", onClick);
outputEl.addEventListener("mousedown", onMouseDown);

function onClick() {
  outputEl.textContent = inputEl.value;
}

function onMouseDown(e) {
  const drag = e.target;

  drag.style.position = "absolute";
  drag.style.zIndex = 1000;

  document.body.append(drag);

  function moveDrag(pageX, pageY) {
    drag.style.left = pageX - drag.offsetWidth / 2 + "px";
    drag.style.top = pageY - drag.offsetHeight / 2 + "px";
  }

  moveDrag(e.pageX, e.pageY);

  function onMouseMove(e) {
    moveDrag(e.pageX, e.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);

  drag.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    drag.onmouseup = null;
  };
}
drag.ondragstart = function () {
  return false;
};
