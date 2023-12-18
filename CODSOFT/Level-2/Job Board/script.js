document.addEventListener('DOMContentLoaded', function() {
    const jobListings = document.getElementById('jobListings');
    const applyForm = document.getElementById('applyForm');
    const jobApplicationForm = document.getElementById('jobApplicationForm');

    // Dummy job data
    const jobsData = [
        { id: 1, title: 'Web Developer', company: 'ABC Tech', location: 'City, Country' },
        { id: 2, title: 'Data Scientist', company: 'XYZ Analytics', location: 'City, Country' },
        // Add more job listings as needed
    ];

    // Display job listings
    jobsData.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.innerHTML = `
            <h2>${job.title}</h2>
            <p class="company">${job.company}</p>
            <p class="location">${job.location}</p>
            <button class="apply-btn" onclick="openApplyForm(${job.id})">Apply Now</button>
        `;
        jobListings.appendChild(jobCard);
    });

    // Open apply form with selected job details
    window.openApplyForm = function(jobId) {
        const jobIdInput = document.getElementById('jobId');
        jobIdInput.value = jobId;
        applyForm.classList.remove('hidden');
    };

    // Submit job application
    jobApplicationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const applicantName = document.getElementById('applicantName').value;
        const jobId = document.getElementById('jobId').value;

        if (applicantName && jobId) {
            alert(`Application submitted!\n\nApplicant Name: ${applicantName}\nJob ID: ${jobId}`);
            applyForm.classList.add('hidden');
            jobApplicationForm.reset();
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
});