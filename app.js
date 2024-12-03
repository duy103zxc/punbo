const $sentenceList = document.querySelector('.sentence-list');
const input = document.getElementById('myInput');
const searchButton = document.getElementById('search-keyword');
const landing = document.getElementById('landing');

let listOfSentences = [];
let content = "";

/**
 * Load text file contents
 */
async function loadFile() {
  try {
    const response = await fetch("assets/dataset.txt");
    if (!response.ok) {
      throw new Error("Server Error");
    }
    content = await response.text();
    // console.log(content);
  } catch (error) {
    console.error(error);
  }
}

loadFile();


function searchSentences() {
  listOfSentences = [];
  landing.style.display = "none";
  const keyword = input.value.trim().toLowerCase();

  
  content.split("\n").some(line => {
    if (line.toLowerCase().includes(keyword)) {
      listOfSentences.push(line);
      if (listOfSentences.length >= 50) {
        return true; // stop searching after 50 matches
      }
    }
    return false;
  });

  console.log("Search has finished");

  // update sentence list
  const out = listOfSentences.map(sentence => {
    const keyword = input.value.trim().toLowerCase();
    const regex = new RegExp(keyword, 'gi');
    console.log(keyword);
    const newSentence = sentence.replace(regex, `<span class="hl">${keyword}</span>`);
    return `<li>${newSentence}</li>`;
  }).join('');
  $sentenceList.innerHTML = `${out}`;
};


searchButton.addEventListener('click', () => {
  searchSentences();
})
window.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    searchSentences();
  }
});