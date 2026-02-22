let interviewList = []
let rejecetdList = []
//header btn
let grandToatal = document.getElementById('total')
let interViewToatal = document.getElementById('interview')
let rejecetdToatal = document.getElementById('rejecetd')
let cardsToatal = document.getElementById('total-cards')
let jobCount = document.getElementById('jobs-count')
const filterElement = document.getElementById('filter-element')
//main area btn
let deletBtn = document.getElementsByClassName('delet-btn')

let interviewFilter = document.getElementById('filter-element')

const mainContainer = document.querySelector('main')
const mainCard = document.querySelector('main-card')
const cardContent = document.querySelector('.main-card-content')
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
  if (id == 'interview-toggle') {
    cardsToatal.classList.add('hidden')
    filterElement.classList.remove('hidden')
  } else if (id == 'all-toggle') {
    cardsToatal.classList.remove('hidden')
    filterElement.classList.add('hidden')
  } else if (id == 'rejecetd-toggle') {
  }
}
//1 div compelte

mainContainer.addEventListener('click', function (event) {
  const parentNode = event.target.parentNode.parentNode.closest('.main-card')
  const jobName = parentNode.querySelector('.job-name').innerText
  const jobSkill = parentNode.querySelector('.job-skill').innerText
  const jobType = parentNode.querySelector('.job-type').innerText
  const jobTime = parentNode.querySelector('.job-time').innerText
  const jobSalary = parentNode.querySelector('.jobSalry').innerText
  let jobStatus = parentNode.querySelector('.job-status').innerText
  const jobDescription = parentNode.querySelector('.job-description').innerText

  console.log(event.target.classList.contains('interview-btn'))
  console.log(event.target.parentNode.parentNode)

  if (event.target.classList.contains('interview-btn')) {
    const statusContianer = parentNode.querySelector('.job-status')
    statusContianer.innerHTML = `<button class = "btn btn-outline btn-success">
                INTERVIEW
              </button>`
    jobStatus = 'Interview'
    const cardInfo = {
      jobName,
      jobSkill,
      jobType,
      jobTime,
      jobSalary,
      jobStatus,
      jobDescription,
    }
    let cardItems = interviewList.find(
      (item) => item.jobName === cardInfo.jobName,
    )

    if (!cardItems) {
      interviewList.push(cardInfo)
    }
  }
  setTotal()
  //call section
  interviewElement()
})
function interviewElement() {
  filterElement.innerHTML = ''
  for (let interview of interviewList) {
    console.log(interview)
    let div = document.createElement('div')
    div.innerHTML = `
      <div class="main-card flex items-start justify-between space-y-8">
          <!-- Card -->
          <div class="main-card-content space-y-4">
            <!-- card content -->
            <div class="top-title mb-3">
              <h1 class="job-name text-2xl font-bold text-[#002C5C] mb-1">
               ${interview.jobName}
              </h1>
              <p class="job-skill text-xl font-normal text-[#64748B]">
                ${interview.jobSkill}
              </p>
            </div>
            <div class="flex items-center gap-2 text-slate-500 font-medium">
              <span class="job-type">${interview.jobType}</span>
              <span class="text-[6px] text-slate-500">
                <i class="fa-solid fa-circle"></i
              ></span>
              <span class="job-time">${interview.jobTime}</span>
              <span class="text-[6px] text-slate-500">
                <i class="fa-solid fa-circle"></i
              ></span>
              <span class="jobSalry">${interview.jobSalary}</span>
            </div>
            <div class="space-y-2">
              <button class="job-status btn btn-soft text-[14px]">
                ${interview.jobStatus}
              </button>
              <p class="job-description text-gray-700">
                ${interview.jobDescription}
              </p>
            </div>
            <div class="job-btn space-x-2">
              <button class="interview-btn btn btn-outline btn-success">
                INTERVIEW
              </button>
              <button class="rejecetd-btn btn btn-outline btn-error">
                REJECTED
              </button>
            </div>
          </div>
          <!-- Card DElet butoon -->
          <button class="btn btn-ghost btn-error btn-outline">
            <i class="delet-btn fa-regular fa-trash-can"></i>
          </button>
        </div>`
    console.log(div)
    filterElement.appendChild(div)
  }
}
interviewElement()
