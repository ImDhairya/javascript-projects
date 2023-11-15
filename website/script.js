const text1 = document.getElementById('text')
const note1 = document.getElementById('note1')
const add = document.getElementById('add')
const del = document.getElementById('del')

add.addEventListener('click' , () => {
  
  if (text1.value.trim() !== "") {
    note1.innerText = text1.value
    text.value = ""
  }
})
