document.getElementById("sumBtn").addEventListener("click", function () {

    const prices = document.querySelectorAll(".price");
    let total = 0;

    prices.forEach(p => {
        total += parseFloat(p.textContent.trim()) || 0;
    });

    // Show result in #ans (Cypress checks this)
    document.getElementById("ans").textContent = total;
});
