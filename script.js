function calculateRentProfit(propertyValue, monthlyRent, annualExpenses, yearsOfRent = 11, priceGrowthRate = 1) {
  const annualRent = monthlyRent * 12;
  const totalRentIncome = annualRent * yearsOfRent;

  // Include maintenance and repair costs (1% of property value per year)
  const annualMaintenance = propertyValue * 0.01;
  const totalExpenses = (annualExpenses + annualMaintenance) * yearsOfRent;

  const finalPropertyValue = propertyValue * (1 + priceGrowthRate / 100) ** yearsOfRent;
  const totalProfit = (totalRentIncome - totalExpenses) + (finalPropertyValue - propertyValue);

  return {
    rentIncome: totalRentIncome,
    finalPropertyValue,
    totalProfit
  };
}

function calculateSellProfit(propertyValue, priceGrowthRate = 1, yearsOfOwnership = 11) {
  const finalPropertyValue = propertyValue * (1 + priceGrowthRate / 100) ** yearsOfOwnership;
  return finalPropertyValue - propertyValue;
}

function calculateProfits() {
  const propertyValue = parseFloat(document.getElementById('propertyValue').value);
  const monthlyRent = parseFloat(document.getElementById('monthlyRent').value);
  const annualExpenses = parseFloat(document.getElementById('annualExpenses').value);
  const yearsOfRent = parseFloat(document.getElementById('yearsOfRent').value); // Default to 11 years
  const priceGrowthRate = parseFloat(document.getElementById('priceGrowthRate').value); // Default to 7%

  // Calculate rental and sell profit
  const rentResult = calculateRentProfit(propertyValue, monthlyRent, annualExpenses, yearsOfRent, priceGrowthRate);
  const sellProfit = calculateSellProfit(propertyValue, priceGrowthRate, yearsOfRent);

  // Display results
  document.getElementById('rentIncome').textContent = `Rental Income over ${yearsOfRent} years: ${rentResult.rentIncome.toFixed(2)}`;
  document.getElementById('finalPropertyValue').textContent = `Property Value after ${yearsOfRent} years: ${rentResult.finalPropertyValue.toFixed(2)}`;
  document.getElementById('totalProfit').textContent = `Total Profit from Renting: ${rentResult.totalProfit.toFixed(2)}`;
  document.getElementById('sellProfit').textContent = `Profit from Selling after ${yearsOfRent} years: ${sellProfit.toFixed(2)}`;

  // Comparison
  const comparison = rentResult.totalProfit > sellProfit ? "Renting is more profitable." : "Selling is more profitable.";
  document.getElementById('comparison').textContent = comparison;
}
