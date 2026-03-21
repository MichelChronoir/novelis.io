function login() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  if (!email || !pass) {
    document.getElementById("error").innerText = "Isi semua field!";
    return;
  }

  user = { email };
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");

  renderProjects();
}

function createProject() {
  let project = {
    title: "Novel Baru",
    chapters: []
  };
  projects.push(project);
  renderProjects();
}

function renderProjects() {
  let list = document.getElementById("projectList");
  list.innerHTML = "";

  projects.forEach((p, i) => {
    let div = document.createElement("div");
    div.innerText = p.title;
    div.onclick = () => openProject(i);
    list.appendChild(div);
  });
}

function openProject(i) {
  currentProject = projects[i];
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("workspace").classList.remove("hidden");

  renderChapters();
}

function renderChapters() {
  let list = document.getElementById("chapters");
  list.innerHTML = "";

  currentProject.chapters.forEach((c, i) => {
    let li = document.createElement("li");
    li.innerText = c.title;
    li.onclick = () => {
      document.getElementById("editor").value = c.content;
    };
    list.appendChild(li);
  });
}

/* ===================== */
/* 🤖 AI SIMULATION */
/* ===================== */

function generateAI() {
  let text = "Langit malam menggantung sunyi, dan langkah kaki itu menggema seperti rahasia yang enggan terungkap...";
  document.getElementById("editor").value += "\n\n" + text;
}

function improveText() {
  let editor = document.getElementById("editor");
  editor.value = editor.value + "\n\n[Improved oleh AI ✨]";
}

function rewriteText() {
  let editor = document.getElementById("editor");
  editor.value = "Versi rewrite:\n\n" + editor.value;
}
