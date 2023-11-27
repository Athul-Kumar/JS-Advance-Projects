
const generateBtn = document.querySelector('.meme-generator .generate-meme-btn');
const memeTitle = document.querySelector('.meme-title');
const memeImg = document.querySelector('.meme-generator img');
const memeAuthor = document.querySelector('.meme-generator .meme-author')


function getDataResults(title,url,author){

    memeTitle.textContent = title;
    memeImg.setAttribute('src', url);
    memeAuthor.textContent = `meme by the author = ${author}`

}



function generateData(){

    const MEME_API = 'https://meme-api.com/gimme/wholesomememes'
    let fetchData = fetch(MEME_API);
    fetchData
    .then((rawData)=> rawData.json())
    .then((data)=> getDataResults(data.title,data.url,data.author))
        
    
}

generateBtn.addEventListener('click', generateData);

generateData();



