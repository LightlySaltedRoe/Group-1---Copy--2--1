document.addEventListener('DOMContentLoaded', () => {
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');
    const addExpenseBtn = document.getElementById('addExpenseBtn');
    const expenseList = document.getElementById('expenseList');
  
    const barChartCtx = document.getElementById('barChart').getContext('2d');
    const pieChartCtx = document.getElementById('pieChart').getContext('2d');
  
    let expenses = [];
  
    const barChart = new Chart(barChartCtx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: 'Expenses',
          data: [],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    const pieChart = new Chart(pieChartCtx, {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{
          label: 'Expenses',
          data: [],
          backgroundColor: []
        }]
      }
    });
  
    addExpenseBtn.addEventListener('click', () => {
      const description = descriptionInput.value;
      const amount = amountInput.value;
  
      if (description === '' || amount === '') {
        alert('Please fill in both fields');
        return;
      }
  
      const expense = {
        description: description,
        amount: parseFloat(amount)
      };
  
      expenses.push(expense);
  
      const expenseRow = document.createElement('tr');
  
      expenseRow.innerHTML = `
        <td>${description}</td>
        <td>${amount}</td>
        <td>
          <button class="btn btn-danger btn-sm delete-btn">Delete</button>
        </td>
      `;
  
      expenseList.appendChild(expenseRow);
  
      descriptionInput.value = '';
      amountInput.value = '';
  
      const deleteBtn = expenseRow.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => {
        expenseList.removeChild(expenseRow);
        expenses = expenses.filter(exp => exp !== expense);
        updateCharts();
      });
  
      updateCharts();
    });
  
    function updateCharts() {
      const labels = expenses.map(expense => expense.description);
      const data = expenses.map(expense => expense.amount);
  
      barChart.data.labels = labels;
      barChart.data.datasets[0].data = data;
      barChart.update();
  
      pieChart.data.labels = labels;
      pieChart.data.datasets[0].data = data;
      pieChart.data.datasets[0].backgroundColor = labels.map(() => `hsl(${Math.random() * 360}, 100%, 75%)`);
      pieChart.update();
    }
  });
  