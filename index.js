const baseURL = 'https://api.giphy.com/v1/gifs/search?';
const key = 'vNkOfVV7ZkAvnErcEqhS90RK2uuCqNTl';
const wrapper = document.getElementById("wrapper");

let randomImage = document.querySelector('.random-image'); 
console.log("randomImage:", randomImage);

document.getElementById("searchButton").onclick = () => {
  wrapper.innerHTML = "";
  const searchQuery1 = document.getElementById("searchField").value;
  fetch(`${baseURL}q=${searchQuery1}&api_key=${key}&limit=15`)
  .then(function(response) {
  if (!response.ok) {
    console.log(response);
    return new Error(response);
}
console.log("Response:", response);
return response.json();
})
.then(function(data) {
  data.data.map((datum) => {
    const imageElement = document.createElement('img');
    imageElement.classList.add("img-thumbnail");
    imageElement.src = datum.images.fixed_height.url;
    wrapper.appendChild(imageElement);
  })

})
.catch(function(err) {
  console.log(err);
})
}












