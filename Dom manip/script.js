// DOM Manipulation

// const title = document.querySelector('#main-heading');
// title.style.color = 'red';

// const listItems = document.querySelectorAll('.list-items')

// console.log(listItems);

// listItems.style.fontSize = '2rem';

// const listItems = document.querySelectorAll('.list-items');

// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize = '2rem'
  
// }

// const ul = document.querySelector('ul')
// const li = document.createElement('li');
// ul.append(li)


// const firstListItem = document.querySelector('.list-items');
// console.log(firstListItem.innerText);
// console.log(firstListItem.innerHTML);
// console.log(firstListItem.textContent);

// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement);

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);


// let ul = document.querySelector('ul');

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgorundColor = 'blue'

// const div = document.querySelector('div')
// console.log(div.childNodes);

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

// const buttonTwo = document.querySelector('.btn-2');

// function alertBtn(){
//   alert('I love javascript');
// }

// buttonTwo.addEventListener('click', alertBtn)

const btn = document.querySelector(".reveal-btn");

const hiddenContent = document.querySelector('.hidden-content');

function reveal() {
  if (hiddenContent.classList.contains('reveal-btn')){
    hiddenContent.classList.remove('reveal-btn')
  } else {
    hiddenContent.classList.add('reveal-btn')
  }

}
btn.addEventListener('click', reveal)


//Self hojayega reee





