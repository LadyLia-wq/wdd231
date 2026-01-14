const courses = [
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, completed: false },
  { code: "WDD 231", name: "Frontend Development I", credits: 3, completed: false },
  { code: "CSE 110", name: "Programming Fundamentals", credits: 2, completed: true }
];

const container = document.getElementById("courseCards");
const totalCredits = document.getElementById("totalCredits");

function displayCourses(list) {
  container.innerHTML = "";

  const credits = list.reduce((sum, c) => sum + c.credits, 0);

  list.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");

    if (course.completed) {
      card.classList.add("completed");
    }

    card.innerHTML = `<strong>${course.code}</strong>`;
    container.appendChild(card);
  });

  totalCredits.textContent = `Total Credits Taken For These Courses Are ${credits}`;
}

document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    if (filter === "all") displayCourses(courses);
    else displayCourses(courses.filter(c => c.code.startsWith(filter.toUpperCase())));
  });
});

displayCourses(courses);
