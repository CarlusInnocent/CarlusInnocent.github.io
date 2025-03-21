/* Global Styles */
body {
  margin: 0;
  font-family: "Montserrat", sans-serif;
  background-color: #f4f4f4;
  color: #333;
  line-height: 1.6;
}
a {
  text-decoration: none;
  color: inherit;
}
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.header {
  background-color: #262626;
  color: #fff;
  padding: 20px 0;
}
.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 28px;
  font-weight: bold;
}
.nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}
.nav ul li a {
  color: #fff;
  font-weight: 500;
  transition: color 0.3s ease;
}
.nav ul li a:hover {
  color: #04aa6d;
}
.social-links a {
  color: #fff;
  font-size: 24px;
  margin-left: 15px;
  transition: color 0.3s ease;
}
.social-links a:hover {
  color: #04aa6d;
}

/* Section Styles */
.section {
  padding: 40px 0;
  background: #fff;
  margin-bottom: 20px;
}
.home-section {
  text-align: center;
}
.home-section .tagline {
  font-style: italic;
  font-size: 1.5em;
  margin-bottom: 20px;
}
.about-section,
.resume-section,
.contact-section {
  padding: 40px 20px;
  border-bottom: 3px solid #04aa6d;
}
.about-section p {
  margin-bottom: 20px;
}

/* Resume Section */
.resume-section h2 {
  text-align: center;
  margin-bottom: 20px;
}
.employment,
.education,
.skills,
.interests,
.references {
  margin-bottom: 30px;
}
.employment .job,
.education .edu-item,
.references .ref-item {
  margin-bottom: 20px;
}
.employment .job h4,
.education .edu-item h4,
.references .ref-item h4 {
  margin-bottom: 5px;
  font-weight: bold;
}
.employment .job .date,
.education .edu-item p {
  font-style: italic;
  margin-bottom: 10px;
}
.skills h4 {
  margin-top: 10px;
}
.skills ul,
.interests ul,
.references ul {
  list-style: disc;
  margin-left: 20px;
}
.skills li,
.interests li {
  margin-bottom: 5px;
}

/* Contact Section */
.contact-section p {
  margin-bottom: 10px;
}

/* Footer */
.footer {
  background-color: #262626;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  font-size: 0.9em;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .header .container {
    flex-direction: column;
    text-align: center;
  }
  .nav ul {
    flex-direction: column;
    gap: 10px;
  }
  .social-links {
    margin-top: 10px;
  }
}
