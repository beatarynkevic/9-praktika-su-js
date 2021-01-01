function render(selector) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    HTML += 'Labutis ;)';
    DOM.innerHTML = HTML;
}

render('h1');