// let promise = applyForVisa();
// promise.then(/*resolve*/ bookHotel, /*reject*/ cancelVacation);

/*
applyForVisa()
    .then(bookHotel, cancelVacation);*/
applyForVisa()
    .then(bookHotel)
    .then(buyTickets)
    .catch(cancelVacation);