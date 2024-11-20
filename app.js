const $sentenceList = document.querySelector('.sentence-list')
let input = document.getElementById('myInput');

let listOfSentences = [];

document.getElementById('search-keyword').onclick = function () {
    let fr = new FileReader();
    fr.onload = function(e) {
        let text = e.target.result.split("\n").forEach(line => {
            console.log("Searching in: " + line);
            if (line.includes(input)) {
                console.log(line);
                listOfSentences.push(line);
            }
        });;

    };
    let text = fr.readAsText("dataset.txt");
    
};

let out = "";

function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
}

const arr = ['b', 'c', 'a', 'd'];
console.log(getMultipleRandom(arr, 2)); // 👉️ ['a', 'c'];
console.log(getMultipleRandom(arr, 3)); // 👉️ ['c', 'b', 'c']

  
listOfSentences.map((sentence) => {
    out += `<li><a href="#">${sentence}</li>` + `\n`;
})

$sentenceList.innerHTML = out; 
console.log(out);


// function myFunction() {
//     // Declare variables
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');
  
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }