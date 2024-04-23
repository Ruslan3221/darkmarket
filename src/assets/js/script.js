
const Mybtn = () => {

    const cards = document.getElementById('cards');
    cards.querySelectorAll('.butn').forEach(btn => {
        var originalText = '<i class="fa-solid fa-cart-shopping"></i>';

        var original = '<i class="fa-solid fa-cart-shopping"></i>';

        btn.addEventListener("mouseover", function() {
            btn.innerHTML = '<i class="fa-solid fa-skull"></i>';
        });

        btn.addEventListener("mouseout", function() {
            btn.innerHTML = original;
        });
    });

}
export default Mybtn;

