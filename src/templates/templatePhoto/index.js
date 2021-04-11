const photos = [
    {
    name: "photo1",
    destinationPhoto: "../../files/photohome.jpeg",
    },
    {
    name: "photo2",
    destinationPhoto: "../../files/photohome1.jpeg",
    },
    {
    name: "photo3",
    destinationPhoto: "../../files/photohome2.jpeg",
    },
    {
    name: "photo4",
    destinationPhoto: "../../files/project_clone-kabum.jpg",
    },
    {
    name: "photo5",
    destinationPhoto: "../../files/photohome.jpeg",
    },
    {
    name: "photo6",
    destinationPhoto: "../../files/photohome1.jpeg",
    },
]


var photo = document.getElementById("root")
var photoElement = document.getElementById(photoElement)


photo.innerHTML = photos.map(photo => `
    
    <div class="photosElement" id="photoElement"> 
        <div class="photos">
            <h2>${photo.name}</h2>
            <p>description of photo</p>
        </div>
        <img src=${photo.destinationPhoto}>
    </div>
`
)