
import Gallery from './Gallery.js';
import MobGallery from './MobGallery.js';

function Editor() {
    return (
        <div className="editor-wrapper">
            <div className="editor">
                <div className="mobile-gallery hide">
                    <MobGallery></MobGallery>
                </div>
                <input type="text" className="textarea editor-name" placeholder="Название"></input>
                <div className="editor-tagDate">
                    <div className="header-tag">
                        <div
                            className="header-tag-smile">😀</div>
                        <button className="header-tag-button">
                            <svg
                                width="16"
                                height="10"
                                viewBox="0 0 16 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.34317 0.757355L0.928955 2.17157L8.00001 9.24266L15.0711 2.1716L13.6569 0.757384L8.00003 6.41422L2.34317 0.757355Z"
                                    fill="black"
                                />
                            </svg>
                        </button>
                    </div>

                    <input className="textarea editor-add-date" type="text" placeholder="Дата"></input>
                    <div className="mobile-sm hide">
                        😀
                    <button className="header-tag-button">
                            <svg
                                width="16"
                                height="10"
                                viewBox="0 0 16 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.34317 0.757355L0.928955 2.17157L8.00001 9.24266L15.0711 2.1716L13.6569 0.757384L8.00003 6.41422L2.34317 0.757355Z"
                                    fill="black"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <textarea className="textarea editor-add-desc" type="text" placeholder="Описание"></textarea>
                <button className="editor-add-button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 4C10.5523 4 11 4.44772 11 5V9H15C15.5523 9 16 9.44771 16 10C16 10.5523 15.5523 11 15 11H11V15C11 15.5523 10.5523 16 10 16C9.44771 16 9 15.5523 9 15V11H5C4.44772 11 4 10.5523 4 10C4 9.44771 4.44772 9 5 9H9V5C9 4.44772 9.44771 4 10 4Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 20C1.34315 20 0 18.6569 0 17V3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V17C20 18.6569 18.6569 20 17 20H3ZM2 17C2 17.5523 2.44772 18 3 18H17C17.5523 18 18 17.5523 18 17V3C18 2.44772 17.5523 2 17 2H3C2.44772 2 2 2.44772 2 3V17Z" fill="white" />
                    </svg>
                    <span>Создать</span></button>
            </div>

            <div className="editor-images">
                <div className="editor-images-search">
                    <input type="text" className="textarea editor-search-input" placeholder="Поиск"></input>
                    <button className="editor-search-button"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.66542 8.23657L7.19751 6.951L8.48308 8.48309L11.5473 5.91194L12.8328 7.44402L8.23657 11.3007L5.66542 8.23657Z" fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2071 2.89344C17.0923 5.77862 17.3131 10.3193 14.8693 13.4578C14.8846 13.4713 14.8996 13.4854 14.9143 13.5L19.1569 17.7427C19.5474 18.1332 19.5474 18.7664 19.1569 19.1569C18.7664 19.5474 18.1332 19.5474 17.7427 19.1569L13.5 14.9143C13.4854 14.8996 13.4713 14.8846 13.4578 14.8693C10.3193 17.3131 5.77862 17.0923 2.89344 14.2071C-0.230756 11.083 -0.230756 6.01763 2.89344 2.89344C6.01763 -0.230756 11.083 -0.230756 14.2071 2.89344ZM12.7929 12.7929C15.1361 10.4498 15.1361 6.6508 12.7929 4.30765C10.4498 1.96451 6.6508 1.96451 4.30765 4.30765C1.96451 6.6508 1.96451 10.4498 4.30765 12.7929C6.6508 15.1361 10.4498 15.1361 12.7929 12.7929Z" fill="black" />
                    </svg>
                    </button></div>
                <div className="editor-gallery-wrapper">
                    <Gallery />
                </div>
            </div>
        </div>
    );
}

export default Editor;