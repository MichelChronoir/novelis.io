const novelMemory = {
    projectTitle: "Sebelum Akibat",
    author: "Michellyn",
    characters: [
        { name: "Rizky Pratama", role: "Protagonis", traits: "Analitis, Melankolis" },
        { name: "Fajar Ramadhan", role: "Rival", traits: "Ambisius, Impulsif" }
    ],
    worldBuilding: {
        location: "Neo-Jakarta",
        year: "2045",
        rules: "Waktu dapat diputar ulang maksimal 5 detik."
    }
};

// Fungsi untuk menarik konteks memori ke AI
function getContext() {
    return `Konteks: Tokoh utama ${novelMemory.characters[0].name} berada di ${novelMemory.worldBuilding.location}`;
}
