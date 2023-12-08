const select = document.querySelector(".select");
const options_list = document.querySelector(".options-list");
const options = document.querySelectorAll(".option");

//show & hide options list
select.addEventListener("click", () => {
  options_list.classList.toggle("active");

});

//select option
options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((option) => {option.classList.remove('selected')})
    select.querySelector("span").innerHTML = option.innerHTML
    option.classList.add("selected")
    options_list.classList.toggle("active")

  })
})

const select2 = document.querySelector(".select2");
const options_list2 = document.querySelector(".options-list2");
const options2 = document.querySelectorAll(".option2");

//show & hide options list
select2.addEventListener("click", () => {
  options_list2.classList.toggle("active2");

});

//select option
options2.forEach((option) => {
  option.addEventListener("click", () => {
    options2.forEach((option) => {option.classList.remove('selected2')})
    select2.querySelector("span").innerHTML = option.innerHTML
    option.classList.add("selected2")
    options_list2.classList.toggle("active2")

  })
})