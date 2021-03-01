import { createClient } from 'pexels';

const client = createClient('563492ad6f917000010000012a3d4ec509bc4ffb9c82eec3eae30746');

function MobGallery() {
    client.photos.curated({ per_page: 30 }).then(photos => {
        for (let i = 0; i < (photos.photos.length); i++) {
            let img = document.createElement('img');
            (i % 2 === 0) ? img.src = photos.photos[i].src.landscape : img.src = photos.photos[i].src.portrait;
            ;
            img.classList = 'gallery-mob-image';
            let gallery = document.getElementsByClassName("gallery-mob-wrapper");
            gallery[0].appendChild(img);
        }
    });
    function openMobModal() {
        let m = document.getElementsByClassName('gallery-mob-wrapper');
        m[0].classList = ('showMobGallery');
    }
    return (
        <div>
            <img className="mob-gallery-img" alt="card gallery" onClick={openMobModal} src="https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
            <div className="gallery-mob-wrapper hide">

            </div>
        </div>
    );
}

export default MobGallery;