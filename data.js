let memory = {
  title: "",
  chapters: [],
  notes: {}
};

function saveData() {
  memory.title = document.getElementById("title").value;
  memory.current = document.getElementById("editor").value;

  localStorage.setItem("novelData", JSON.stringify(memory));
  alert("Tersimpan!");
}

function loadData() {
  const data = JSON.parse(localStorage.getItem("novelData"));
  if (!data) return alert("Tidak ada data!");

  memory = data;
  document.getElementById("title").value = data.title;
  document.getElementById("editor").value = data.current;
}
