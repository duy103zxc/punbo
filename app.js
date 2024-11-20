// Select DOM elements
const $app = document.querySelector('.App')
const $search = document.querySelector('.Search')
const $searchInput = document.querySelector('.Search input')
const $songList = document.querySelector('.SongList')

let content = null;

function loadFile() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "dataset", false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    content = xmlhttp.responseText;
  }
}

loadFile();

let listOfSentences = {}


const getSearchResults = (query) => {
  for (line in content) {
    if (line.includes(query)) {
      listOfSentences.add(line);
    }
    if (listOfSentences.length > 50) {
      break;
    } 
  }
}


const renderSearchResults = (results) => {
  $songList.innerHTML = results.map((sentence) => {
    return `<li class="Song">
      <h3>${sentence}</h3>
    </li>`
  }).join('\n')

  if (results.length > 0) {
    $app.classList.add('hasResults')
  } else {
    $app.classList.remove('hasResults')
  }
}

$searchInput.addEventListener('input', (event) => {
  const query = $searchInput.value
  const results = (query.length > 1) ? getSearchResults(query) : []
  renderSearchResults(results)
})



