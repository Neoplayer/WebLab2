let selected = document.getElementById("radius");

function OnButtonClick(value)
{
    if(selected.value !== 0)
    {
        let button = document.getElementById("radius" + selected.value);
        button.classList.remove("btn-primary");
        button.classList.add("btn-dark");
    }

    let button = document.getElementById("radius" + value);
    button.classList.remove("btn-dark");
    button.classList.add("btn-primary");

    selected.value = value;

    console.log("radius now " + value)
}