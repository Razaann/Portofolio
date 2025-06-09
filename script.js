function filterProjects(category) {
  const all = document.querySelectorAll('.project');
  document.querySelectorAll('.filters button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  all.forEach(project => {
    if (category === 'all') {
      project.style.display = 'block';
    } else {
      if (project.classList.contains(category)) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    }
  });
}