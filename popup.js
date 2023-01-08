var urlToRemove = "https://twitter.com/";
document.getElementById("button").addEventListener("click",()=>{
    const text=document.getElementById("input").value;
    chrome.history.search({text: text,    startTime: 0,maxResults:10000}).then((results) => {
        console.log(results);
        for (let k in results) {
          chrome.history.deleteUrl({url: results[k].url});
        }
        console.log("silindi")
      }
    );
    document.getElementById("input").value="";
})