function jsonLoad(){
    return fetch('data/data.json').then(res => res.json()).then(data => data.items);
}

function putItems(items) {
    const ul = document.querySelector('.items');
    ul.innerHTML = items.map(item => {
        return `<li class="item">
            <img src="${item.image}" alt="${item.type}" class="item-thumbnail">
            <span class="item-description">${item.gender}, ${item.size}</span>
          </li>`;
    }).join('\n');
}


function onLoad(){
    jsonLoad().then(items => putItems(items));
}
onLoad();

function filter(method,filterText){
    jsonLoad().then(items => items.filter(item => item[method] === filterText))
        .then(filterItem => putItems(filterItem));
}
