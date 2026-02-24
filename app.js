// Array Container Initilization
let interviewList = []
let rejecetdList = []
let currntStatus = 'all-toggle'
//header btn
let grandTotal = document.getElementById('total') //done
let interViewTotal = document.getElementById('interview') //done
let rejectTotal = document.getElementById('rejecet') //done
let jobCount = document.getElementById('jobs-count') //done
let notFound = document.getElementById('not-found')
//header all button work done
//toggle buttons
const alltoggle = document.getElementById('all-toggle')
const interviewtoggle = document.getElementById('interview-toggle')
const rejecetdtoggle = document.getElementById('rejecetd-toggle')
//toggle button done
//Filter Section
let filterSection = document.getElementById('filter-section')
//cardSection
let totalCards = document.getElementById('total-cards')
let interviewButton = document.getElementsByClassName('interview-btn')
let rejectButton = document.getElementsByClassName('rejecetd-btn')

let cardParent = document.getElementsByClassName('card-parent')
const cardContent = document.querySelector('.card-content')

//main area btn
//setTotal 100% working done
function setTotal() {
  let count = totalCards.children.length
  grandTotal.innerText = count
  jobCount.innerText = `${count} Jobs`
  interViewTotal.innerText = interviewList.length
  rejectTotal.innerText = rejecetdList.length
  checkEmptyState()
}
setTotal()
//Toggling Function
function toggleStyle(id) {
  //toggle button classlist add
  alltoggle.classList.remove('bg-blue-500', 'text-white', 'font-semibold')
  alltoggle.classList.add('bg-white', 'text-[#64748B]')
  interviewtoggle.classList.remove('bg-blue-500', 'text-white', 'font-semibold')
  interviewtoggle.classList.add('bg-white', 'text-[#64748B]')
  rejecetdtoggle.classList.remove('bg-blue-500', 'text-white', 'font-semibold')
  rejecetdtoggle.classList.add('bg-white', 'text-[#64748B]')
  //selected button class list add
  const selectdBtn = document.getElementById(id)
  currntStatus = id
  selectdBtn.classList.remove('bg-white', 'text-[#64748B]')
  selectdBtn.classList.add('bg-blue-500', 'text-white', 'font-semibold')

  if (totalCards.children.length === 0) {
    totalCards.classList.add('hidden')
    notFound.classList.remove('hidden')
  }
  if (id == 'interview-toggle') {
    totalCards.classList.add('hidden')
    filterSection.classList.remove('hidden')
    renderList(interviewList)
  } else if (id == 'all-toggle') {
    totalCards.classList.remove('hidden')
    filterSection.classList.add('hidden')
  } else if (id == 'rejecetd-toggle') {
    totalCards.classList.add('hidden')
    filterSection.classList.remove('hidden')
    renderList(rejecetdList)
  }
  setTotal()
}
function checkEmptyState() {
  const allEmpty =
    currntStatus === 'all-toggle' && totalCards.children.length === 0
  const interviewEmpty =
    currntStatus === 'interview-toggle' && interviewList.length === 0
  const rejectEmpty =
    currntStatus === 'rejecetd-toggle' && rejecetdList.length === 0

  if (allEmpty || interviewEmpty || rejectEmpty) {
    notFound.classList.remove('hidden')

    if (allEmpty) totalCards.classList.add('hidden')
    if (interviewEmpty || rejectEmpty) filterSection.classList.add('hidden')
  } else {
    notFound.classList.add('hidden')
  }
}

document.addEventListener('click', function (event) {
  //all button node
  let interviewButton = event.target.closest('.interview-btn')
  let rejectButton = event.target.closest('.rejecetd-btn')
  let deleteButton =
    event.target.closest('.delet-button') || event.target.closest('.btn-error')

  // Intervier Onlcik
  if (interviewButton) {
    const parenNode = event.target.parentNode.parentNode
    const jobName = parenNode.querySelector('.job-name').innerText
    const jobSkill = parenNode.querySelector('.job-skill').innerText
    const jobType = parenNode.querySelector('.job-type').innerText
    const jobTime = parenNode.querySelector('.job-time').innerText
    const jobSalary = parenNode.querySelector('.job-salary').innerText
    const jobDescription = parenNode.querySelector('.job-description').innerText
    const statusContianer = parenNode.querySelector('.job-status')

    statusContianer.classList.remove('text-red-500')
    statusContianer.classList.add(
      'btn',
      'btn-outline',
      'border-2',
      'text-green-500',
    )
    statusContianer.innerText = 'Interview'
    let cardInfo = {
      jobName,
      jobSkill,
      jobType,
      jobTime,
      jobSalary,
      jobStatus: 'Interview',
      jobDescription,
    }
    const interviewItem = interviewList.find(
      (item) => item.jobName === cardInfo.jobName,
    )
    if (!interviewItem) {
      interviewList.push(cardInfo)
    }
    rejecetdList = rejecetdList.filter(
      (item) => item.jobName !== cardInfo.jobName,
    )

    if (currntStatus === 'interview-toggle') {
      renderList(interviewList)
    } else if (currntStatus === 'rejecetd-toggle') {
      renderList(rejecetdList)
    }

    if (event.target.closest('.card-parent')) {
      event.target.closest('.card-parent').remove()
    } else {
      parenNode.parentNode.remove()
    }
  }

  // Reject Onlcik
  else if (rejectButton) {
    const parenNode = event.target.parentNode.parentNode
    const jobName = parenNode.querySelector('.job-name').innerText
    const jobSkill = parenNode.querySelector('.job-skill').innerText
    const jobType = parenNode.querySelector('.job-type').innerText
    const jobTime = parenNode.querySelector('.job-time').innerText
    const jobSalary = parenNode.querySelector('.job-salary').innerText
    const jobDescription = parenNode.querySelector('.job-description').innerText
    const statusContianer = parenNode.querySelector('.job-status')

    statusContianer.classList.remove('text-green-500')
    statusContianer.classList.add(
      'btn',
      'btn-outline',
      'border-2',
      'text-red-500',
    )
    statusContianer.innerText = 'Rejected'

    let cardInfo = {
      jobName,
      jobSkill,
      jobType,
      jobTime,
      jobSalary,
      jobStatus: 'Rejected',
      jobDescription,
    }
    const rejectedItem = rejecetdList.find(
      (item) => item.jobName === cardInfo.jobName,
    )
    if (!rejectedItem) {
      rejecetdList.push(cardInfo)
    }
    interviewList = interviewList.filter(
      (item) => item.jobName !== cardInfo.jobName,
    )

    if (currntStatus === 'rejecetd-toggle') {
      renderList(rejecetdList)
    } else if (currntStatus === 'interview-toggle') {
      renderList(interviewList)
    }

    if (event.target.closest('.card-parent')) {
      event.target.closest('.card-parent').remove()
    } else {
      parenNode.parentNode.remove()
    }
  }

  //Delet logic
  else if (deleteButton) {
    const parenNode =
      deleteButton.closest('.card') || deleteButton.closest('.card-parent')
    const jobName = parenNode.querySelector('.job-name').innerText

    if (currntStatus === 'all-toggle') {
      const cardContainer =
        deleteButton.closest('.card-parent') || parenNode.parentNode
      cardContainer.remove()
    } else {
      interviewList = interviewList.filter((item) => item.jobName !== jobName)
      rejecetdList = rejecetdList.filter((item) => item.jobName !== jobName)
      if (currntStatus === 'interview-toggle') {
        renderList(interviewList)
      } else if (currntStatus === 'rejecetd-toggle') {
        renderList(rejecetdList)
      }
    }
  }

  setTotal()
})

function renderList(listToRender) {
  filterSection.innerHTML = ''
  for (let item of listToRender) {
    const div = document.createElement('div')
    div.innerHTML = ` 
    <div class="card-parent flex flex-row items-start justify-between space-y-8">
        <div class="card-content space-y-4">
            <div class="top-title mb-3">
              <h1 class="job-name text-2xl font-bold text-[#002C5C] mb-1">
                ${item.jobName}
              </h1>
              <p class="job-skill text-xl font-normal text-[#64748B]">
                 ${item.jobSkill}
              </p>
            </div>
            <div class="flex items-center gap-2 text-slate-500 font-medium">
              <span class="job-type"> ${item.jobType}</span>
              <span class="text-[6px] text-slate-500">
                <i class="fa-solid fa-circle"></i
              ></span>
              <span class="job-time"> ${item.jobTime}</span>
              <span class="text-[6px] text-slate-500">
                <i class="fa-solid fa-circle"></i
              ></span>
              <span class="job-salary"> ${item.jobSalary}</span>
            </div>
            <div class="space-y-2">
              <button class="job-status btn btn-soft btn-ghost text-[14px]">
                 ${item.jobStatus}
              </button>
              <p class="job-description text-gray-700">
                 ${item.jobDescription}
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
      <div>
        <button class="delet-button btn btn-ghost btn-error ">
          <i class=" fa-regular fa-trash-can"></i>
        </button>
      </div>
        </div>`
    filterSection.appendChild(div)
  }
}
