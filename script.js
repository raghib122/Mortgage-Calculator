const apiKey = 'n8EyKaqyzclwKOGRZhUKrA==33iTgW0O8IM1Vy8F';
const apiUrl = 'https://api.api-ninjas.com/v1/mortgagecalculator';

document.getElementById('mortgageForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const loanAmount = document.getElementById('loanAmount').value;
    const interestRate = document.getElementById('interestRate').value;
    const loanDuration = document.getElementById('loanDuration').value;
    const monthlyHoa = document.getElementById('monthlyHoa').value;
    const propertyTax = document.getElementById('propertyTax').value;
    const homeInsurance = document.getElementById('homeInsurance').value;

    const url = `${apiUrl}?loan_amount=${loanAmount}&interest_rate=${interestRate}&duration_years=${loanDuration}&monthly_hoa=${monthlyHoa}&annual_property_tax=${propertyTax}&annual_home_insurance=${homeInsurance}`;
    const headers = {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'
    };

    fetch(url, { headers })
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function displayResults(data) {
    document.getElementById('monthlyPayment').textContent = `Monthly Payment: $${data.monthly_payment.total}`;
    document.getElementById('annualPayment').textContent = `Annual Payment: $${data.annual_payment.total}`;
    document.getElementById('totalInterestPaid').textContent = `Total Interest Paid: $${data.total_interest_paid}`;

    document.getElementById('results').classList.remove('hidden');
}
