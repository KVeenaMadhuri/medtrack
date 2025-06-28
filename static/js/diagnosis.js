document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#diagnosis-form');
  if (!form) return;

  // Dynamic symptom fields example
  const addSymptomBtn = document.querySelector('#add-symptom-btn');
  const symptomsContainer = document.querySelector('#symptoms-container');

  if (addSymptomBtn && symptomsContainer) {
    addSymptomBtn.addEventListener('click', () => {
      const newInput = document.createElement('input');
      newInput.type = 'text';
      newInput.name = 'symptoms[]';
      newInput.placeholder = 'Enter symptom';
      symptomsContainer.appendChild(newInput);
    });
  }

  form.addEventListener('submit', (e) => {
    const symptoms = form.querySelectorAll('input[name="symptoms[]"]');
    let filled = false;
    symptoms.forEach(input => {
      if (input.value.trim() !== '') filled = true;
    });
    if (!filled) {
      e.preventDefault();
      alert('Please enter at least one symptom.');
    }
  });
});
