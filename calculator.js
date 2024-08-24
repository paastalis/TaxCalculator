function calculateIncome() {
    const grossIncome = parseFloat(document.getElementById('grossIncome').value);
    let workload = parseFloat(document.getElementById('workload').value);
    let pensionContribution = parseFloat(document.getElementById('pensionContribution').value);

    if (isNaN(workload) || workload === "") {
        workload = 1;
    }

    if (workload < 0.1 || workload > 1) {
        alert("Error: Töökoormus must be between 0.1 and 1.");
        return; 
    }

    if (grossIncome == null || grossIncome === "") {
        alert("Sisesta brutopalk");
        return; 
    }

    const incomeTaxRates = {
        2024: 0.22,
        2026: 0.24
    };

    const unemploymentInsurance = 0.016;

    const adjustedIncome = grossIncome * workload;

    const netIncome2024 = adjustedIncome * (1 - pensionContribution/100) * (1 - incomeTaxRates[2024] - unemploymentInsurance);
    const netIncome2026 = adjustedIncome * (1 - pensionContribution/100) * (1 - incomeTaxRates[2026] - unemploymentInsurance);
    const difference = netIncome2024 - netIncome2026;

    document.getElementById('income2024').innerText = netIncome2024.toFixed(2);
    document.getElementById('income2026').innerText = netIncome2026.toFixed(2);
    document.getElementById('difference').innerText = difference.toFixed(2);

    document.getElementById('calculatorContainer').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'block';

    document.getElementById('resultImage').style.display = 'block';
    document.getElementById('lohutus').style.visibility = 'visible';
}

function resetCalculator() {
    document.getElementById('resultContainer').style.display = 'none';
    document.getElementById('calculatorContainer').style.display = 'block';

    document.getElementById('incomeForm').reset();

    document.getElementById('resultImage').style.display = 'none';
    document.getElementById('lohutus').style.visibility = 'hidden';
}
