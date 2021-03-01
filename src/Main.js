import { useEffect } from 'react';

function Main() {
    useEffect(() => {
        let cards = document.getElementsByClassName('card');
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener("click", openModal, true);
        }
    });
    function openModal() {
        let modal = document.getElementsByClassName('modal-wrapper');
        modal[0].style.display = "flex";
    }

    return (
        <div className="main-wrapper">
            <div className="card">
                <img className="card-img" alt="card" src='https://images.pexels.com/photos/4371628/pexels-photo-4371628.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'></img>
                <div className="card-smile-circle">😌</div>
                <div className="card-caption"><div className="card-topline"><h5>Абстрактная живопись</h5>
                    <span className="card-caption-date">Ср 11 Фев</span></div></div>
            </div>
            <div className="card">
                <img className="card-img" alt="card" src='https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
                <div className="card-smile-circle">😆</div>
                <div className="card-caption"><div className="card-topline"><h5>Прогулка в лесу</h5>
                    <span className="card-caption-date">Вт 1 Дек</span></div></div>
            </div>
            <div className="card">
                <img className="card-img" alt="card" src='https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
                <div className="card-smile-circle">🤔</div>
                <div className="card-caption"><div className="card-topline"><h5>Мотоциклы и хобби</h5>
                    <span className="card-caption-date">Пт 22 Ноя</span></div></div>
            </div>
            <div className="card">
                <img className="card-img" alt="card" src='https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
                <div className="card-smile-circle">😑</div>
                <div className="card-caption"><div className="card-topline"><h5>Коты и кошки</h5>
                    <span className="card-caption-date">Пн 15 Авг</span></div></div>
            </div>

            <div className="card">
                <img className="card-img" alt="card" src='https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
                <div className="card-smile-circle">🤔</div>
                <div className="card-caption"><div className="card-topline"><h5>Мотоциклы и хобби</h5>
                    <span className="card-caption-date">Пт 22 Ноя</span></div></div>
            </div>
            <div className="card">
                <img className="card-img" alt="card" src='https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
                <div className="card-smile-circle">😆</div>
                <div className="card-caption"><div className="card-topline"><h5>Прогулка в лесу</h5>
                    <span className="card-caption-date">Вт 1 Дек</span></div></div>
            </div>
            <div className="card">
                <img className="card-img" alt="card" src='https://images.pexels.com/photos/4371628/pexels-photo-4371628.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'></img>
                <div className="card-smile-circle">😌</div>
                <div className="card-caption"><div className="card-topline"><h5>Абстрактная живопись</h5>
                    <span className="card-caption-date">Ср 11 Фев</span></div></div>
            </div><div className="card">
                <img className="card-img" alt="card" src='https://images.pexels.com/photos/4371628/pexels-photo-4371628.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'></img>
                <div className="card-smile-circle">😌</div>
                <div className="card-caption"><div className="card-topline"><h5>Абстрактная живопись</h5>
                    <span className="card-caption-date">Ср 11 Фев</span></div></div>
            </div>
            <div className="card">
                <img className="card-img" alt="card" src='https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
                <div className="card-smile-circle">🤔</div>
                <div className="card-caption"><div className="card-topline"><h5>Мотоциклы и хобби</h5>
                    <span className="card-caption-date">Пт 22 Ноя</span></div></div>
            </div>
            <div className="card">
                <img className="card-img" alt="card" src='https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
                <div className="card-smile-circle">😑</div>
                <div className="card-caption"><div className="card-topline"><h5>Коты и кошки</h5>
                    <span className="card-caption-date">Пн 15 Авг</span></div></div>
            </div>
        </div>
    );
}

export default Main;