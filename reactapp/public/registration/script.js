let studentCount = 0;
let students = [];

// State → City Mapping (India)
const stateCity = {
    "Andhra Pradesh": ["Vijayawada", "Guntur", "Tirupati", "Other"],
    "Telangana": ["Hyderabad", "Warangal", "Other"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Other"],
    "Karnataka": ["Bengaluru", "Mysuru", "Other"],
    "Maharashtra": ["Mumbai", "Pune", "Other"]
};

// School → Program → Course
const schoolProgramCourse = {
    Engineering: {
        UG: ["CSE", "ECE", "EEE", "MECH"],
        PG: ["M.Tech", "MCA"]
    },
    Science: {
        UG: ["B.Sc", "BCA"],
        PG: ["M.Sc"]
    },
    Management: {
        UG: ["BBA"],
        PG: ["MBA"]
    }
};

const form = document.getElementById("admissionForm");
const state = document.getElementById("state");
const city = document.getElementById("city");
const otherCity = document.getElementById("otherCity");
const school = document.getElementById("school");
const program = document.getElementById("program");
const course = document.getElementById("course");

// Load states
Object.keys(stateCity).forEach(s => {
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = s;
    state.appendChild(opt);
});

// State → City
state.addEventListener("change", () => {
    city.innerHTML = `<option value="">Select City</option>`;
    otherCity.disabled = true;

    stateCity[state.value]?.forEach(c => {
        let opt = document.createElement("option");
        opt.value = c;
        opt.textContent = c;
        city.appendChild(opt);
    });
});

// City → Other
city.addEventListener("change", () => {
    otherCity.disabled = city.value !== "Other";
});

// School → Program
school.addEventListener("change", () => {
    program.innerHTML = `<option value="">Select Program</option>`;
    course.innerHTML = `<option value="">Select Course</option>`;

    Object.keys(schoolProgramCourse[school.value] || {}).forEach(p => {
        let opt = document.createElement("option");
        opt.value = p;
        opt.textContent = p;
        program.appendChild(opt);
    });
});

// Program → Course
program.addEventListener("change", () => {
    course.innerHTML = `<option value="">Select Course</option>`;
    schoolProgramCourse[school.value][program.value].forEach(c => {
        let opt = document.createElement("option");
        opt.value = c;
        opt.textContent = c;
        course.appendChild(opt);
    });
});

// Form Submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;
    document.querySelectorAll("input, select").forEach(f => {
        f.classList.remove("error");
        if (!f.value && !f.disabled) {
            f.classList.add("error");
            valid = false;
        }
    });

    if (!/^[6-9]\d{9}$/.test(mobile.value)) {
        mobile.classList.add("error");
        valid = false;
    }

    if (!valid) {
        alert("Please fill all fields correctly");
        return;
    }

    const nameInput = document.getElementById("name");
    const student = {
        name: nameInput.value,
        gender: gender.value,
        state: state.value,
        city: city.value === "Other" ? otherCity.value : city.value,
        school: school.value,
        program: program.value,
        course: course.value
    };

    students.push(student);
    studentCount++;
    document.getElementById("studentCount").textContent = studentCount;
    displayStudents();

    alert("Registration Successful!");
    form.reset();
    otherCity.disabled = true;
});
document.querySelector(".container").style.animation = "none";
setTimeout(() => {
    document.querySelector(".container").style.animation = "fadeIn 0.6s ease";
}, 10);


// Display Students
function displayStudents() {
    const row = document.createElement("tr");
    row.style.animation = "slideUp 0.4s ease";

    const tbody = document.querySelector("#studentTable tbody");
    tbody.innerHTML = "";

    students.forEach((s, i) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${s.name}</td>
            <td>${s.gender}</td>
            <td>${s.state}</td>
            <td>${s.city}</td>
            <td>${s.school}</td>
            <td>${s.program}</td>
            <td>${s.course}</td>
        `;
        tbody.appendChild(row);
    });
}
