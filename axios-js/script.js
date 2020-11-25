const createDiv = (photo) => {
    const div = document.createElement('div');
    div.textContent = `${photo.id}: ${photo.title} ${photo.thumbnailUrl}`;
    return div;
};

const appendToDOM = (photos) => {
    const ul = document.querySelector('ul');
    photos.map(photo => {
       
        document.getElementById("id").innerHTML=photo.id;
        document.getElementById("title").innerHTML=photo.title;
        // document.getElementById("url").href=photo.url;
        var img = document.createElement("img");
        img.src = photo.thumbnailUrl;
        var src = document.getElementById("img-article");
        src.appendChild(img);
        ul.appendChild(createLi(photo));
        
    });
};


const fetchPhotos = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            const photos = response.data;
            appendToDOM(photos);
        })
        .catch(error => console.error(error));
};

fetchPhotos();