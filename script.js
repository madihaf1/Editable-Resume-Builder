// Get references to the form and display area
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeDisplayElement = document.getElementById('resume-display');
    if (form && resumeDisplayElement) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // page reload hone se roknay ke liye
            // Form inputs se values lena
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var education = document.getElementById('education').value;
            var experience = document.getElementById('experience').value;
            var skills = document.getElementById('skills').value;
            // Resume ka HTML content dynamically generate karna
            var resumeHTML = "\n                <h2><b>Editable Resume</b></h2>\n                <h3>Personal Information</h3>\n                <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, "</span></p>\n                <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n                <p><b>Phone:</b><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n\n                <h3>Education</h3>\n                <p contenteditable=\"true\">").concat(education, "</p>\n\n                <h3>Experience</h3>\n                <p contenteditable=\"true\">").concat(experience, "</p>\n\n                <h3>Skills</h3>\n                <p contenteditable=\"true\">").concat(skills, "</p>\n            ");
            // Resume display element mein HTML insert karna
            resumeDisplayElement.innerHTML = resumeHTML;
        });
    }
    else {
        console.error('Form ya resume display element nahi mila.');
    }
});
