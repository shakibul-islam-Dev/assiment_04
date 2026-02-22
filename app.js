let interviewList = []
let rejecetdList = []
//header btn
let grandToatal = document.getElementById('total')
let interViewToatal = document.getElementById('interview')
let rejecetdToatal = document.getElementById('rejecetd')
let cardsToatal = document.getElementById('total-cards')
let jobCount = document.getElementById('jobs-count')
//main area btn
let deletBtn = document.getElementById('delet-btn')
let interviewBtn = document.getElementById('interview-btn')
let rejecetdBtn = document.getElementById('rejecetd-btn')

const mainContainer = document.querySelector('main')
//25% done
function setTotal() {
  let count = cardsToatal.children.length
  grandToatal.innerText = count
  jobCount.innerText = `${count} Jobs`
  interViewToatal.innerText = interviewList.length
  rejecetdToatal.innerText = rejecetdList.length
}
setTotal()
//Toggling Function
function toggleStyle(id) {
  //Toggle button
  let alltoggle = document.getElementById('all-toggle')
  let interviewtoggle = document.getElementById('interview-toggle')
  let rejecetdtoggle = document.getElementById('rejecetd-toggle')
  //toggle button classlist add
  alltoggle.classList.remove('bg-blue-500', 'text-white', 'font-semibold')
  alltoggle.classList.add('bg-white', 'text-[#64748B]')

  interviewtoggle.classList.remove('bg-blue-500', 'text-white', 'font-semibold')
  interviewtoggle.classList.add('bg-white', 'text-[#64748B]')

  rejecetdtoggle.classList.remove('bg-blue-500', 'text-white', 'font-semibold')
  rejecetdtoggle.classList.add('bg-white', 'text-[#64748B]')
  //selected button class list add
  const selectdBtn = document.getElementById(id)
  selectdBtn.classList.remove('bg-white', 'text-[#64748B]')
  selectdBtn.classList.add('bg-blue-500', 'text-white', 'font-semibold')
}
//1 div compelte

mainContainer.addEventListener('click', function (event) {
  const parentNode = event.target.parentNode.parentNode
  const jobName = parentNode.querySelector('.job-name').innerText
  const jobSkill = parentNode.querySelector('.job-skill').innerText
  const jobType = parentNode.querySelector('.job-type').innerText
  const jobStatus = parentNode.querySelector('#job-status').innerText
  const jobDescription = parentNode.querySelector('.job-description').innerText

  const cardInfo = {
    jobName,
    jobSkill,
    jobType,
    jobStatus,
    jobDescription,
  }
  console.log(cardInfo)
})
