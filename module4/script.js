// Function to validate service quality input
function isValidServiceQuality(quality) {
  const validQualities = ["great", "ok", "poor"];
  return validQualities.includes(quality.toLowerCase());
}

// Function to validate the service amount
function isValidServiceAmount(amount) {
  return amount >= 5 && amount <= 500;
}

// Function to calculate tip based on quality
function calculateTip(amount, quality) {
  let tipRate;
  switch (quality.toLowerCase()) {
    case "great":
      tipRate = 0.20;
      break;
    case "ok":
      tipRate = 0.15;
      break;
    case "poor":
      tipRate = 0.10;
      break;
  }
  return amount * tipRate;
}

// Prompt for service amount
let serviceAmount = parseFloat(prompt("Hello! Please enter the dollar amount of the service (between $5 and $500):"));

if (isNaN(serviceAmount) || !isValidServiceAmount(serviceAmount)) {
  alert("Invalid service dollar amount. Please enter a number between $5.00 and $500.00 next time.");
} else {
  // Prompt for service quality
  let serviceQuality = prompt("How was the service you received? (Great, Ok, or Poor)");

  if (!serviceQuality || !isValidServiceQuality(serviceQuality)) {
    alert("Invalid service quality. Please enter 'great', 'ok', or 'poor' next time.");
  } else {
    // Calculate and display tip
    let tip = calculateTip(serviceAmount, serviceQuality);
    alert(`Tip Recomendation:
- Service Amount: $${serviceAmount.toFixed(2)}
- Service Quality: ${serviceQuality}
- Recommended Tip: $${tip.toFixed(2)}`);
  }
}
