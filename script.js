const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    // Remove previous total row if exists
    const oldTotalRow = document.querySelector(".total-row");
    if (oldTotalRow) oldTotalRow.remove();

    const priceElements = document.querySelectorAll(".prices");

    // Calculate total
    let total = 0;
    priceElements.forEach(price => {
      total += parseFloat(price.textContent);
    });

    // Create a new row for total
    const table = document.getElementById("groceryTable");
    const totalRow = document.createElement("tr");
    totalRow.classList.add("total-row");

    // Create single cell with colspan = 2
    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.textContent = `Total Price: ₹${total}`;

    // Append cell to row, and row to table
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);

    //Add your code here
    // (You needed to remove old total row if button clicked again)
};

getSumBtn.addEventListener("click", getSum);
