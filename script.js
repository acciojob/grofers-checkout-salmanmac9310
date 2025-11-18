const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

  // remove old total
  const oldTotalRow = document.querySelector(".total-row");
  if (oldTotalRow) oldTotalRow.remove();

  // FIXED selector
  const priceElements = document.querySelectorAll(".price");

  let total = 0;
  priceElements.forEach(price => {
    total += Number(price.textContent.trim());
  });

  const table = document.getElementById("groceryTable");
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: ₹${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);

  // For Cypress test (optional)
  document.getElementById("ans").textContent = total;
};

getSumBtn.addEventListener("click", getSum);
