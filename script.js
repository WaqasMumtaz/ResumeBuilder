// script.js

function generateResume() {
    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const about = document.getElementById("about").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const hobbies = document.getElementById("hobbies").value.trim();
    const experience = document.getElementById("experience").value.trim();
    const education = document.getElementById("education").value.trim();
    const picture = document.getElementById("picture").files[0];

    function showError(inputId, message) {
        const inputElement = document.getElementById(inputId);
        let errorElement = inputElement.nextElementSibling;
        
        if (!errorElement || errorElement.className !== 'error') {
            errorElement = document.createElement('div');
            errorElement.className = 'error';
            inputElement.insertAdjacentElement('afterend', errorElement);
        }
        
        errorElement.textContent = message;
        isValid = false;
    }

    function clearError(inputId) {
        const inputElement = document.getElementById(inputId);
        const errorElement = inputElement.nextElementSibling;
        if (errorElement && errorElement.className === 'error') {
            errorElement.textContent = '';
        }
    }

    if (!name) showError("name", "Name is required");
    else clearError("name");

    if (!email) showError("email", "Email is required");
    else clearError("email");

    if (!phone) showError("phone", "Phone is required");
    else clearError("phone");

    if (!address) showError("address", "Address is required");
    else clearError("address");

    if (!about) showError("about", "About Me section is required");
    else clearError("about");

    if (!skills) showError("skills", "Skills are required");
    else clearError("skills");

    if (!hobbies) showError("hobbies", "Hobbies are required");
    else clearError("hobbies");

    if (!experience) showError("experience", "Experience is required");
    else clearError("experience");

    if (!education) showError("education", "Education is required");
    else clearError("education");

    if (!isValid) return;

    // Profile Picture and Basic Info
    let resumeHTML = `
        <div class="personal-info">
            ${picture ? `<img src="" alt="Profile Picture" class="profile-picture" id="profilePicture">` : ""}
            <div>
                <h2>${name}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong> ${address}</p>
            </div>
        </div>
        <div class="resume-section">
            <div class="resume-section-title">About Me</div>
            <p>${about}</p>
        </div>
        <div class="resume-section">
            <div class="resume-section-title">Skills</div>
            <p>${skills}</p>
        </div>
        <div class="resume-section">
            <div class="resume-section-title">Hobbies</div>
            <p>${hobbies}</p>
        </div>
        <div class="resume-section">
            <div class="resume-section-title">Experience</div>
            <p>${experience}</p>
        </div>
        <div class="resume-section">
            <div class="resume-section-title">Education</div>
            <p>${education}</p>
        </div>`;

    document.getElementById("resumeContent").innerHTML = resumeHTML;

    if (picture) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("profilePicture").src = e.target.result;
        };
        reader.readAsDataURL(picture);
    }
}
