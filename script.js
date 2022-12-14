const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

tabItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    selectItem(item);
  });
});
//select tab content item
function selectItem(item) {
  removeBorder();
  removeShow();
  //Add border to current tab
  item.classList.add("tab-border");

  //Grab content item from DOM
  const tabContentItem = document.querySelector(`#${item.id}-content`);

  //Add show class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => {
    item.classList.remove("tab-border");
  });
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}
