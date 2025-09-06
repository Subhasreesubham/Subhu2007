// Portfolio data (edit your details here)

const portfolio = {

name: "My Portfolio",

tagline: "College Student | Web Developer | Learner",

about: "Hello! I am a college student passionate about coding, design, and technology. I enjoy learning new programming languages and building creative projects.",

education: [
  
  "Bachelor of Computer Science - XYZ College (2022 - 2025)",

"High School ABC School (2020 2022)"

],

skills: ["HTML", "CSS", "JavaScript", "Java", "C++", "Python"],

projects: ["Personal Portfolio Website", "Online Quiz Application", "Basic Calculator in Java"],

contact: {
  
  email: "myemail@example.com",

phone: "+91 98765 43210",

linkedin: "linkedin.com/in/myprofile"

}

};

// Generate portfolio HTML dynamically

const app = document.getElementById("app");

app.innerHTML = '
  
  <header>

<h1>${portfolio.name}</h1>

<p>${portfolio.tagline}</p>

</header>

<nav>

<a href="#about">About Me</a>

<a href="#education">Education</a>

<a href="#skills">Skills</a>

<a href="#projects">Projects</a>

<a href="#contact">Contact</a>

</nav>

<section id="about">

<div class="card">

<h2>About Me</h2>

<p>${portfolio.about}</p>

</div>

</section>

<section id="education">

<div class="card">

<h2>Education</h2>

<ul>

${portfolio.education.map(item

`<li>${item}</li>').join("")}

</ul>

</div>

</section>

<section id="skills">

<div class="card">

<h2>Skills</h2>

<p>${portfolio.skills.join(", ")}</p>

</div>

</section>

<section id="projects">

<div class="card">

<h2>Projects</h2>

<ul>

${portfolio.projects.map(p => '<li>${p}

</li>').join("")}

</ul>

</div>

</section>

<section id="contact">
                         
                         <div class="card">

<h2>Contact</h2>

<p>Email: ${portfolio.contact.email}</p>

<p>Phone: ${portfolio.contact.phone}</p>

<p>LinkedIn: ${portfolio.contact.linkedin}

</p>

</div>

</section>

<footer>

<p>&copy; 2025 ${portfolio.name}. All Rights

Reserved.</p>

</footer>

.;