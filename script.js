const  accessKey = "uxldHLyG8rqsttyZVcEuh6Dq-rhSNTtWrGMs253meYA";
var searchfrom =  document.getElementById("search-from");
var searchbox =  document.getElementById("search-box");
var searchresult =  document.getElementById("search-result");
var showmorebtn=  document.getElementById("show-more-btn");
var search = document.getElementById("search");

let keyword ="";
let page = 1;

async function searchImage(){
    keyword= searchbox.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    if(page === 1){
        searchresult.innerHTML="";
    }
    results.map((result)=>{
        const  image = document.createElement("img");
        image.src= result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href= result.links.html;
        imageLink.target="_blank" ;
        imageLink.appendChild(image);
        searchresult.appendChild(imageLink);

    })
   showmorebtn.style.display= "block"

   
}

searchfrom.addEventListener("submit", (e)=>{
    e.preventDefault();
    page=1;
    searchImage(); 


});
showmorebtn.addEventListener("click", ()=>{
    page++;
    searchImage();

});

search.addEventListener("click", ()=>{
    searchImage()
});