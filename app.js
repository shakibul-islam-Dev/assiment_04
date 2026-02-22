let interviewList = [{ name: 'react', age: 24 }]
let rejecetdList = []
//header btn
let grandToatal = document.getElementById('total')
let interViewToatal = document.getElementById('interview')
let rejecetdToatal = document.getElementById('rejecetd')
let cardsToatal = document.getElementById('total-cards')
//
let deletBtn = document.getElementById('delet-btn')
let allwBtn = document.getElementById('all-btn')
let interviewBtn = document.getElementById('interview-btn')
let rejecetdBtn = document.getElementById('rejecetd-btn')
let alltoggle = document.getElementById('all-toggle')
let interviewtoggle = document.getElementById('interview-toggle')
let rejecetdtoggle = document.getElementById('rejecetd-toggle')
const mainContainer = document.querySelector('main')
//
function setTotal() {
  grandToatal.innerText = cardsToatal.children.length
  interViewToatal.innerText = interviewList.length
  rejecetdToatal.innerText = rejecetdList.length
  let count = 0
}
setTotal()
function toggleStyle(id) {
  alltoggle.classList.remove('bg-blue-500', 'text-white', 'font-semibold')
  alltoggle.classList.add('bg-white', 'text-[#64748B]')

  interviewtoggle.classList.remove('bg-blue-500', 'text-white', 'font-semibold')
  interviewtoggle.classList.add('bg-white', 'text-[#64748B]')

  rejecetdtoggle.classList.remove('bg-blue-500', 'text-white', 'font-semibold')
  rejecetdtoggle.classList.add('bg-white', 'text-[#64748B]')

  const selectdBtn = document.getElementById(id)
  selectdBtn.classList.remove('bg-white', 'text-[#64748B]')
  selectdBtn.classList.add('bg-blue-500', 'text-white', 'font-semibold')
}
