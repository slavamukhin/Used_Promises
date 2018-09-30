function applyForVisa(documents, resolve, reject) {
    console.log('Обработка заявления на визу...');

    setTimeout(function() {
        Math.random() > .5 ? resolve({}) : reject('Отказано: нехватает документов');
    }, 2000);
}

function bookHotel(visa, resolve, reject) {
    console.log('Обработка заявления на бронирование отеля...');
    setTimeout(function() {
        Math.random() > .5 ? resolve({}) : reject('Отказано: нет свободных отелей');
    }, 3000)
}

function buyTickets(hotel, resolve, reject) {
    console.log('Обработка заявления на бронирование билетов...');
    setTimeout(function() {
        Math.random() > .5 ? resolve({}) : reject('Отказано: нет билетов');
    }, 5000);
}

applyForVisa({}, function(visa) {
    console.log('Виза получена');
    bookHotel(visa, function(hotel) {
        console.log('Отель забронирован');
        buyTickets(hotel, function(ticket) {
            console.log('Билет куплен');
        }, function(reason) {
            console.log(reason);
        })
    }, function(reason) {
        console.log(reason)
    });
}, function(reason) {
    console.log(reason)
});