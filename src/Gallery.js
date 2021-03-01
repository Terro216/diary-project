import { createClient } from 'pexels';

const client = createClient('563492ad6f917000010000012a3d4ec509bc4ffb9c82eec3eae30746');

function Gallery() {
    client.photos.curated({ per_page: 30 }).then(photos => {
        for (let i = 0; i < (photos.photos.length); i++) {
            let img = document.createElement('img');
            (i % 2 === 0) ? img.src = photos.photos[i].src.landscape : img.src = photos.photos[i].src.portrait;
            ;
            img.classList = 'gallery-image';
            let gallery = document.getElementsByClassName("gallery-main");
            gallery[0].appendChild(img);
        }
    });
    return (
        <div className="gallery-main">
        </div>
    );
}

export default Gallery;