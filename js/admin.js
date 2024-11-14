document.getElementById('dashboard').addEventListener('click', function() {
    showSection('overview');
});
document.getElementById('manage-students').addEventListener('click', function() {
    showSection('manage-students-section');
});
document.getElementById('view-registrations').addEventListener('click', function() {
    showSection('view-registrations-section');
});
document.getElementById('settings').addEventListener('click', function() {
    showSection('settings-section');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
}
