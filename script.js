// Data for the pop-ups
const experienceData = {
    asg: {
        title: "Supreme Court - ASG Chambers",
        content: "Worked under ASG Aishwarya Bhati. Conducted legal research on Arbitration, Criminal, and Constitutional law. Prepared case briefs for PILs."
    },
    pujari: {
        title: "Chambers of Adit Subramaniam Pujari",
        content: "January 2026. Researched criminal and civil substantive law. Observed trials in Special Courts and High Courts to learn courtroom nuances."
    },
    patna: {
        title: "Patna High Court",
        content: "Interned under the Additional Advocate General. Drafted writ petitions, bail applications, and Interlocutory Applications (IAs)."
    }
};

// Function to open the pop-up
function openModal(id) {
    const data = experienceData[id];
    const modalBody = document.getElementById('modal-body');
    const overlay = document.getElementById('modal-overlay');

    modalBody.innerHTML = `
        <h2>${data.title}</h2>
        <hr style="margin: 15px 0; border: 0; border-top: 1px solid #eee;">
        <p>${data.content}</p>
    `;
    
    overlay.style.display = 'flex';
}

// Function to close the pop-up
function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}

// Form Submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you, Arya! Your message (simulated) has been sent.");
    this.reset();
});