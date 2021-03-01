
function Header() {
  function openEditor() {
    let main = document.getElementsByClassName('main-wrapper');
    let editor = document.getElementsByClassName('editor-wrapper');
    let topSearch = document.getElementsByClassName('header-search');
    let tags = document.getElementsByClassName('header-tag');
    let mobSearch = document.getElementsByClassName('mobile-search');
    main[0].style.display = "none";
    editor[0].style.display = "flex";
    topSearch[0].style.visibility = 'hidden';
    tags[0].style.visibility = 'hidden';
    mobSearch[0].style.visibility = 'hidden';
  }
  function openModal() {
    let main = document.getElementsByClassName('main-wrapper');
    let editor = document.getElementsByClassName('editor-wrapper');
    let topSearch = document.getElementsByClassName('header-search');
    let tags = document.getElementsByClassName('header-tag');
    let mobSearch = document.getElementsByClassName('mobile-search');
    main[0].style.display = "flex";
    editor[0].style.display = "none";
    topSearch[0].style.visibility = 'visible ';
    tags[0].style.visibility = 'visible ';
    mobSearch[0].style.visibility = 'visible';
  }
  return (
    <div className="header-wrap">
      <header className="header">
        <div className="header-logo">
          <svg
            className="logo"
            width="24"
            height="30"
            viewBox="0 0 24 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.0484 21.1179C12.0495 22.2429 10.6977 23.0475 9.16663 23.3583V27.75C9.16663 28.5324 8.53236 29.1667 7.74996 29.1667C6.96756 29.1667 6.33329 28.5324 6.33329 27.75V23.3583C3.10012 22.702 0.666626 19.8435 0.666626 16.4167V7.91668C0.666626 4.00466 3.83794 0.833344 7.74996 0.833344C11.4456 0.833344 14.4802 3.66358 14.8046 7.27482C15.6445 6.78235 16.6226 6.50001 17.6666 6.50001C20.7962 6.50001 23.3333 9.03706 23.3333 12.1667V17.8333C23.3333 20.4738 21.5274 22.6924 19.0833 23.3215V27.75C19.0833 28.5324 18.449 29.1667 17.6666 29.1667C16.8842 29.1667 16.25 28.5324 16.25 27.75V23.3215C14.9392 22.9841 13.8119 22.1895 13.0484 21.1179ZM12 7.91668V16.4167C12 18.2672 10.8173 19.8414 9.16663 20.4248V16.4167C9.16663 15.6343 8.53236 15 7.74996 15C6.96756 15 6.33329 15.6343 6.33329 16.4167V20.4248C4.6826 19.8414 3.49996 18.2672 3.49996 16.4167V7.91668C3.49996 5.56947 5.40275 3.66668 7.74996 3.66668C10.0972 3.66668 12 5.56947 12 7.91668ZM19.0833 20.2876V16.4167C19.0833 15.6343 18.449 15 17.6666 15C16.8842 15 16.25 15.6343 16.25 16.4167V20.2876C15.4031 19.7977 14.8333 18.8821 14.8333 17.8333V12.1667C14.8333 10.6019 16.1018 9.33334 17.6666 9.33334C19.2314 9.33334 20.5 10.6019 20.5 12.1667V17.8333C20.5 18.8821 19.9302 19.7977 19.0833 20.2876Z"
              fill="white"
            />
          </svg>
        </div>
        <span className="header-text">Дневник</span>
        <input className="textarea header-search " type="text" placeholder="Поиск"></input>
        <div className="header-tag">
          <div
            className="header-tag-smile"><svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 15C12.2091 15 14 13.2091 14 11H6C6 13.2091 7.79086 15 10 15Z"
                fill="#BDBDBD"
              />
              <path
                d="M8 8C8 8.55229 7.55228 9 7 9C6.44772 9 6 8.55229 6 8C6 7.44772 6.44772 7 7 7C7.55228 7 8 7.44772 8 8Z"
                fill="#BDBDBD"
              />
              <path
                d="M13 9C13.5523 9 14 8.55229 14 8C14 7.44772 13.5523 7 13 7C12.4477 7 12 7.44772 12 8C12 8.55229 12.4477 9 13 9Z"
                fill="#BDBDBD"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z"
                fill="#BDBDBD"
              />
            </svg></div>
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
        <div className="header-button-wrapper">
          <button onClick={openModal} className="header-button-feed">
            <div><svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4V8H8V4H4Z" fill="#1E2022" />
              <path d="M10 4H14V8H10V4Z" fill="#1E2022" />
              <path d="M10 10V14H14V10H10Z" fill="#1E2022" />
              <path d="M4 10H8V14H4V10Z" fill="#1E2022" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H18V18H0V0ZM2 2V16H16V2H2Z"
                fill="#1E2022"
              />
            </svg></div>
            <span className="header-button-text">Список</span>
          </button>
          <button className="header-button-add hide" onClick={openEditor}>
            <div><svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.2635 0.292893C18.873 -0.097631 18.2398 -0.0976311 17.8493 0.292893L16.9769 1.16525C15.8618 0.632544 14.4857 0.82801 13.5621 1.75165L2.95549 12.3582L8.61234 18.0151L19.2189 7.4085C20.1426 6.48486 20.338 5.1088 19.8053 3.99367L20.6777 3.12132C21.0682 2.7308 21.0682 2.09763 20.6777 1.70711L19.2635 0.292893ZM14.9955 8.80353L8.61234 15.1867L5.78392 12.3582L12.1671 5.9751L14.9955 8.80353ZM16.8138 6.98525L17.8047 5.99429C18.1953 5.60376 18.1953 4.9706 17.8047 4.58007L16.3905 3.16586C16 2.77534 15.3668 2.77534 14.9763 3.16586L13.9853 4.15683L16.8138 6.98525Z"
                fill="white"
              />
              <path
                d="M0 20.9502L2.12171 13.1717L7.77817 18.8289L0 20.9502Z"
                fill="white"
              />
            </svg></div>
            <span className="header-button-text" style={{ color: 'white' }}>Запись</span>
          </button></div>
      </header>
      <div className="mobile-search hide">
        <input className="textarea mobile-header-search" type="text" placeholder="Поиск"></input>
        <div className="mobile-header-tag">
          <div
            className="mob-smile"><svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 15C12.2091 15 14 13.2091 14 11H6C6 13.2091 7.79086 15 10 15Z"
                fill="#BDBDBD"
              />
              <path
                d="M8 8C8 8.55229 7.55228 9 7 9C6.44772 9 6 8.55229 6 8C6 7.44772 6.44772 7 7 7C7.55228 7 8 7.44772 8 8Z"
                fill="#BDBDBD"
              />
              <path
                d="M13 9C13.5523 9 14 8.55229 14 8C14 7.44772 13.5523 7 13 7C12.4477 7 12 7.44772 12 8C12 8.55229 12.4477 9 13 9Z"
                fill="#BDBDBD"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z"
                fill="#BDBDBD"
              />
            </svg></div>
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
        </div></div>
    </div>
  );
}

export default Header;
