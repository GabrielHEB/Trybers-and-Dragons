function toggleSelection(button, categoryClass, alertMessage) {
  const box = button.closest('.box');
  const selectedBox = document.querySelector(`.${categoryClass} .selected`);

  if (selectedBox && selectedBox !== box) {
    selectedBox.classList.remove('selected');
  }

  const isSelected = box.classList.contains('selected');
  box.classList.toggle('selected', !isSelected);

  if (!isSelected) {
    const itemName = box.querySelector('h3').textContent || 'Item';
    alert(`${alertMessage}: ${itemName}`);
  }
}

const selectButtons = document.querySelectorAll('.select-button');
selectButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    toggleSelection(button, 'racas', 'Raça selecionada');
  });
});

const classButtons = document.querySelectorAll('.class-button');
classButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    toggleSelection(button, 'classes', 'Classe selecionada');
  });
});

// Botão "Finalizar Escolha de Personagem"
const finishButton = document.getElementById('finish-selection');
finishButton.addEventListener('click', () => {
  const selectedRace = document.querySelector('.racas .selected h3');
  const selectedClass = document.querySelector('.classes .selected h3');

  if (selectedRace && selectedClass) {
    alert(
      `Personagem selecionado:\nRaça:
       ${selectedRace.textContent}\nClasse: ${selectedClass.textContent}`,
    );

    // Desmarcar raça e classe selecionadas
    document.querySelectorAll('.selected').forEach((element) => {
      element.classList.remove('selected');
    });
  } else {
    alert('Por favor, selecione uma raça e uma classe antes de finalizar!');
  }
});
