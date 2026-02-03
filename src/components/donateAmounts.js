// Donate amounts configuration
export const donateAmounts = [10, 25, 50, 100, 250, 500];

export const getDonateAmountButtons = (basePath = 'donate.html') => {
  return donateAmounts.map(amount => 
    `<a href="${basePath}#amount=${amount}" class="donate-amount-btn" data-amount="${amount}">$${amount}</a>`
  ).join('');
};
