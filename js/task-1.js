const body = document.querySelector("body");
body.style.margin = "0px";
body.style.paddingLeft = "none";

const totalCategories = document.querySelectorAll(".item");
console.log(`Numbers of categories: ${totalCategories.length}`);

totalCategories.forEach(categoryElements => {
  const menu = categoryElements.children[1];
  menu.style.paddingLeft = "0px";
  menu.style.listStyle = "none";

  categoryElements.style.backgroundColor = "#f6f6fe";
  categoryElements.style.padding = "16px";
  categoryElements.style.borderRadius = "8px";
  categoryElements.style.listStyle = "none";
  categoryElements.style.marginBottom = "24px";
  categoryElements.style.fontFamily = "'Montserrat', sans-serif";
  categoryElements.style.width = "392px";
  categoryElements.style.letterSpacing = "0.04em";

  const textCategory = categoryElements.children[0];
  console.log(`Category: ${textCategory.textContent}`);
  textCategory.style.fontWeight = "600";
  textCategory.style.fontSize = "24px";
  textCategory.style.lineHeight = "1.33";

  const textElements = categoryElements.children[1].children;
  console.log(`Elements: ${textElements.length}`);
  for (let i = 0; i < textElements.length; i++) {
    textElements[i].style.fontWeight = "400";
    textElements[i].style.fontSize = "16px";
    textElements[i].style.lineHeight = "1.5";
    textElements[i].style.border = "1px solid #808080";
    textElements[i].style.borderRadius = "4px";
    textElements[i].style.width = "360px";
    textElements[i].style.padding = "13px 16px";
    textElements[i].style.marginBottom = "8px";
  }
});
