function generateChapter() {
  const pov = document.getElementById("pov").value;
  const useOpenAI = document.getElementById("openai").checked;
  const useClaude = document.getElementById("claude").checked;
  const useGemini = document.getElementById("gemini").checked;

  let models = [];
  if (useOpenAI) models.push("OpenAI");
  if (useClaude) models.push("Claude");
  if (useGemini) models.push("Gemini");

  let text = `\n[GENERATED BAB]\nPOV: ${pov}\nModel: ${models.join(", ")}\n\n`;

  text += generateDummyText(1200);

  document.getElementById("editor").value = text;
}

function generateDummyText(words) {
  let result = "";
  const sample = "cerita misterius penuh konflik emosi perjalanan takdir cinta gelap rahasia dunia karakter kuat ";

  for (let i = 0; i < words; i++) {
    result += sample.split(" ")[Math.floor(Math.random() * 10)] + " ";
  }

  return result;
}

function editText() {
  let text = document.getElementById("editor").value;

  text = text.replace(/aku/g, "saya");
  text += "\n\n[AI EDIT]: Gaya bahasa diperbaiki, alur diperjelas.";

  document.getElementById("editor").value = text;
}
