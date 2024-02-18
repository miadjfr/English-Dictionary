const inputEl = document.getElementById("input")

const englishWordEl= document.getElementById("englishWord")
const meaningEl = document.getElementById("meaning")
const audioEl = document.getElementById("audio")
const typeEl = document.getElementById("type")
const pressEnterEl = document.querySelector(".pressEnter")
const waitingEl = document.querySelector(".waiting")
const waitingforEl = document.querySelector(".waitingfor")
const nextEl = document.querySelector(".next")


nextEl.style.display = "none"
waitingEl.style.display = "none"
async function patchApi(word){
    const APIUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"

    const response = await fetch(APIUrl + word  )
    .then ((res) => res.json());
    pressEnterEl.style.display ="none"
    waitingEl.style.display = "block"
    waitingforEl.innerText = word



    englishWordEl.innerText = response[0].word
    typeEl.innerText = response[0].meanings[0].partOfSpeech

    meaningEl.innerText = response[0].meanings[0].definitions[0].definition
    audioEl.src= response[0].phonetics[0].audio || response[0].phonetics[1].audio
    waitingEl.style.display = "none"
    nextEl.style.display = "block"

}

inputEl.addEventListener("keyup" , (e) =>{
    if (e.target.value && e.key === "Enter"){
        patchApi(e.target.value)
    }
})
