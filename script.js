// ======== Courses ========
const courses = [
  { title:"Computer Fundamentals", desc:"Introduction to computers, software, and hardware basics.", img:"images/computer.png" },
  { title:"Internet & Email Basics", desc:"Learn safe internet use and email communication.", img:"images/internet.png" },
  { title:"Basic Programming Concepts", desc:"Variables, loops, conditionals using Python.", img:"images/programming.png" },
  { title:"Web Basics", desc:"Introduction to HTML & CSS and simple web pages.", img:"images/web.png" }
];

const courseContainer = document.getElementById('courseContainer');
courses.forEach(course => {
  const div = document.createElement('div');
  div.className = 'course-card';
  div.innerHTML = `
    <img src="${course.img}" alt="${course.title}" class="course-icon">
    <h3>${course.title}</h3>
    <p>${course.desc}</p>
    <button onclick="openEnrollForm('${course.title}')">Enroll Now</button>
  `;
  courseContainer.appendChild(div);
});


// ======== Resources ========
const resources = [
  { title:"Video Tutorials", link:"https://youtu.be/agaLaSafbwc?si=WxDq_-VS3yyvDRZ_" },
  { title:"E-books & PDFs", link:"resources/intro.pdf" },
  { title:"Practice Projects", link:"https://www.practicepython.org" },
  { title:"Online Tools & Software", link:"https://replit.com" },
  { title:"Webinars & Workshops", link:"https://learn.microsoft.com/en-us/events/" },
  ];

const resourcesContainer = document.getElementById('resourcesContainer');
resources.forEach(resource => {
  const div = document.createElement('div');
  div.className = 'resource-card';
  div.innerHTML = `<h3>${resource.title}</h3>`;
  div.style.cursor = "pointer"; // show pointer on hover
  div.addEventListener('click', () => {
    window.open(resource.link, "_blank"); // opens link in new tab
  });
  resourcesContainer.appendChild(div);
});


// ======== Survey Photos ========
const surveyPhotos = [
  { src:"images/survey1.jpg", caption:"Students sharing feedback" },
  { src:"images/survey3.jpg", caption:"Interactive survey sessions" },
  { src:"images/survey2.jpg", caption:"Teachers guiding students" }
];
const surveyContainer = document.getElementById('surveyContainer');
surveyPhotos.forEach(photo => {
  const div = document.createElement('div');
  div.className = 'survey-card';
  div.innerHTML = `<img src="${photo.src}" alt="${photo.caption}" style="width:100%; border-radius:10px;"><p>${photo.caption}</p>`;
  surveyContainer.appendChild(div);
});

// ======== Testimonials ========
const testimonials = [
  { name:"Priya S.", desc:"The Tech Program transformed my career. I gained skills that got me a job in just 3 months!" },
  { name:"Raj M.", desc:"Hands-on projects made learning practical and enjoyable." },
  { name:"Sneha K.", desc:"Mentors were always available and supportive. Highly recommend!" }
];
const testimonialsContainer = document.getElementById('testimonialsContainer');
testimonials.forEach(testimonial => {
  const div = document.createElement('div');
  div.className = 'testimonial-card';
  div.innerHTML = `<p>"${testimonial.desc}"</p><h4>- ${testimonial.name}</h4>`;
  testimonialsContainer.appendChild(div);
});

// ======== Formspree Contact ========
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(form.action, {
    method:'POST',
    body:new FormData(form),
    headers:{ 'Accept':'application/json' }
  }).then(response => {
    if(response.ok){ alert('Thank you! Your message has been sent.'); form.reset(); }
    else{ alert('Oops! Something went wrong.'); }
  });
});
// Feedback Form Submission
const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit', function(e){
  e.preventDefault();
  fetch(feedbackForm.action, {
    method: 'POST',
    body: new FormData(feedbackForm),
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if(response.ok){
      alert('Thank you! Your feedback has been sent.');
      feedbackForm.reset();
    } else {
      alert('Oops! Something went wrong.');
    }
  })
  .catch(error => {
    alert('Oops! Something went wrong.');
    console.error(error);
  });
});
function openEnrollForm(courseTitle) {
  document.getElementById('enrollForm').style.display = 'block';
  document.getElementById('courseName').value = courseTitle;
}

// Enrollment Form Submission
const enrollForm = document.getElementById('enrollFormForm');
enrollForm.addEventListener('submit', function(e){
  e.preventDefault();
  fetch(enrollForm.action, {
    method: 'POST',
    body: new FormData(enrollForm),
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if(response.ok){
      alert('Thank you! Your enrollment has been submitted.');
      enrollForm.reset();
      document.getElementById('enrollForm').style.display = 'none';
    } else {
      alert('Oops! Something went wrong.');
    }
  })
  .catch(error => {
    alert('Oops! Something went wrong.');
    console.error(error);
  });
});
