
function genereteFooter(contacts, title, bgcolor, fontcolor) {
    let contact = '';
    if(Array.isArray(contacts)) {
        for(let i = 0; i < contacts.length; ++i) {
            contact += `${contacts[i]}<br>`;
        }
    }
    else {
        contact = '';
    }

    document.write(
        `<footer style="display:flex; height:100px; background-color: ${bgcolor}; display: flex; padding: 10px; margin-top:10px; justify-content:space-between;">` +
        `<div style="display:flex; color:${fontcolor}; font-size:6px; align-items:center;"><h1>${contact}</h1></div>` +
        `<div style="display:flex; color:${fontcolor}; font-size:6px; align-items: center;"><h1>${title}@2000 г.</h1></div>` +
        `</footer>`
    )

}


let contactArr = ['Телефон: +7 999 524 3333', 'Почта: nikitasychev@inbox.ru', 'Адрес: Екатеринбург, Евгения Савкова 23'];
let title = 'Super Site';
let bgcolor = 'black';
let fontcolor = 'white';

genereteFooter(contactArr, title, bgcolor, fontcolor);