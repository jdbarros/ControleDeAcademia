// Manipulando a Dom //
const receita = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")

for (let card of cards) {
    card.addEventListener("click", function(){
        const receipeId = card.getAttribute("id");
        window.location.href = `/receipe?id=${receipeId}`
        console.log(receipeId) });
}

document.querySelector(".close").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})

