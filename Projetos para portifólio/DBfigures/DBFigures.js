const search = document.querySelector("#search");

search.addEventListener('input', (event => {
    const value = format(event.target.value);
    const SN = document.querySelector("#n_result");
    let result = false;

    const figures = document.querySelectorAll(".colum .figura");
    figures.forEach(figure => {
        if (format(figure.textContent).indexOf(value) !== -1) {
            figure.style.display = "flex";

            result = true;
        } else {
            figure.style.display = "none";
        }

        
    if (result) {
        SN.style.display = "none";
    } else {
        SN.style.display = "block";
    }

    });
}));

function format(value) {
    return value.toLowerCase().trim();
}