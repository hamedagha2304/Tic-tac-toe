function bazkardanOverlays(event) {
  bazikonShomarehId = +event.target.dataset.bazikon;
  overlayElement.style.display = "block";
  backdropElement.style.display = "block";
}
function bastanOverlays() {
  overlayElement.style.display = "none";
  backdropElement.style.display = "none";
  errorJayKhali.innerHTML = "";
  formElement.firstElementChild.classList.remove("error-div");
}

function avazkardanEsmBazikon(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const esmBazikonVaredShode = formData.get("esm-karbar").trim();

  if (!esmBazikonVaredShode) {
    event.target.firstElementChild.classList.add("error-div");
    errorJayKhali.innerHTML =
      "لطفا نام خود را به صورت <strong>صحیح</strong> وارد کنید";
    return;
  }
  
  const ezafekardanEsm = document.getElementById("etelaat-bazikon-" + bazikonShomarehId);
  ezafekardanEsm.children[1].textContent = esmBazikonVaredShode;

  // if (bazikonShomarehId === 1) {
  //   bazikonha[0].name = esmBazikonVaredShode;
  // } else {
  //   bazikonha[1].name = esmBazikonVaredShode;
  // }

  bazikonha[bazikonShomarehId - 1].name = esmBazikonVaredShode;

  bastanOverlays();
  formElement.firstElementChild.lastElementChild.value = "";
}
