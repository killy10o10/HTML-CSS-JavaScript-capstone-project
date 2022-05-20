//  ==CLOSE BUTTON FOR MENU===//
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.desktop-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('fa-xmark');
  menu.classList.toggle('show');
});

//  ===DYNAMIC TEACHER SECTION===//

const teachers = [
  {
    photo: './images/adachi.png',
    name: 'Ambrose Finehair',
    subject: 'History',
    description: 'Lorem ipsum dolor sit amet consectetur elit adipisicing . Quisquam quasi odit velit?',
  },

  {
    photo: './images/christopher.png',
    name: 'Oluwatonyin Rollo',
    subject: 'English',
    description: 'Lorem ipsum dolor sit amet consectetur elit adipisicing . Quisquam quasi odit velit?',
  },

  {
    photo: './images/ichiro.png',
    name: 'Ojuelegba Whitemoney',
    subject: 'Big Brother',
    description: 'Lorem ipsum dolor sit amet consectetur elit adipisicing . Quisquam quasi odit velit?',
  },

  {
    photo: './images/kevin.png',
    name: 'Sarkodie Obidi',
    subject: 'Music',
    description: 'Lorem ipsum dolor sit amet consectetur elit adipisicing . Quisquam quasi odit velit?',
  },

  {
    photo: './images/kindergarten6.jpg',
    name: 'Favour Ngozi Eze',
    subject: 'Geography',
    description: 'Lorem ipsum dolor sit amet consectetur elit adipisicing . Quisquam quasi odit velit?',
  },

  {
    photo: './images/kindergarten6.jpg',
    name: 'Favour Ngozi Eze',
    subject: 'Geography',
    description: 'Lorem ipsum dolor sit amet consectetur elit adipisicing . Quisquam quasi odit velit?',
  },
];
const teacherDiv = document.getElementById('teacher-grid');
const teacherContainer = teachers.map((teacher) => `<div class="teacher-container">
<div class="teacher-image">
  <img src="${teacher.photo}" alt=""/>
</div>
<div class="teacher-info">
  <div class="teacher-name">
    <h4>${teacher.name}</h4>
    <h6 class="teacher-subject orange">${teacher.subject}</h6>
    <hr />
  </div>
  <div class="teacher-description">
    <p>${teacher.description}</p>
  </div>
</div>
</div>`).join('');

teacherDiv.innerHTML += teacherContainer;