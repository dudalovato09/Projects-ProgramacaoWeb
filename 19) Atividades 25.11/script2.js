document.addEventListener("DOMContentLoaded", () => {
    const inputsContainer = document.getElementById("inputs");
    const sortButton = document.getElementById("sort-button");
    const resultSection = document.getElementById("result-section");
    const sortedArrayElement = document.getElementById("sorted-array");
    const resetButton = document.getElementById("reset-button");
  
    // Cria 10 campos de entrada para números
    for (let i = 0; i < 10; i++) {
      const input = document.createElement("input");
      input.type = "number";
      input.classList.add("number-input");
      inputsContainer.appendChild(input);
    }
  
    // Função para ordenar os números
    sortButton.addEventListener("click", () => {
      const inputs = document.querySelectorAll(".number-input");
      const numbers = [];
  
      // Lê os valores inseridos
      inputs.forEach((input) => {
        const value = Number(input.value);
        if (!isNaN(value)) {
          numbers.push(value);
        }
      });
  
      // Verifica se foram fornecidos 10 números
      if (numbers.length === 10) {
        // Ordena o vetor
        numbers.sort((a, b) => a - b);
  
        // Exibe os números ordenados
        sortedArrayElement.textContent = `Números ordenados: ${numbers.join(", ")}`;
        resultSection.classList.remove("hidden");
        inputsContainer.parentElement.classList.add("hidden");
      } else {
        alert("Por favor, preencha todos os 10 campos com números válidos.");
      }
    });
  
    // Reinicia a página
    resetButton.addEventListener("click", () => {
      location.reload();
    });
  });
  