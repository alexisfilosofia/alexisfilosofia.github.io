const feedbackText = {
  initial: {
    both: 'Que las dos columnas crezcan no alcanza para establecer proporcionalidad. Además, una tabla finita no determina por sí sola cómo se comportará la relación para cualquier valor.',
    a: 'Ruta A es compatible con proporcionalidad en los valores observados. Es una buena hipótesis, pero todavía necesitamos conocer la regla de cálculo para sostener una afirmación general.',
    none: 'Hay evidencia fuerte a favor de Ruta A: al duplicar la distancia, el precio también se duplica. Conviene buscar un criterio más general antes de decidir.',
    uncertain: 'Buena decisión. La tabla aporta evidencia, pero para caracterizar la relación completa necesitamos conocer la regla que vincula las magnitudes.'
  },
  reasoning: {
    wrong: 'Duplicar y obtener el doble sí es una propiedad esperable de una relación proporcional, por lo tanto la observación de Tomás es relevante.',
    partial: 'Exacto. Tomás aporta evidencia pertinente, aunque verificar algunos pares no demuestra por sí solo el comportamiento para todos los valores.',
    proof: 'El argumento es demasiado fuerte: comprobar algunos casos no determina la relación completa.',
    same: 'Martina solo observa crecimiento. Tomás identifica una propiedad multiplicativa específica, por lo que sus argumentos no tienen el mismo alcance.'
  },
  area: {
    yes: 'Estás identificando crecimiento, no proporcionalidad. Si el lado pasa de 2 a 4, el área pasa de 4 a 16: se multiplica por cuatro, no por dos.',
    no: 'Correcto. La relación A = L² no conserva el mismo factor multiplicativo entre las magnitudes.'
  },
  fahrenheit: {
    yes: 'Una recta no basta. Para C = 0 obtenemos F = 32, así que el gráfico no pasa por el origen.',
    no: 'Correcto. El término 32 introduce un valor inicial y rompe la forma F = kC.'
  },
  bike: {
    number: 'En un modelo, la constante debe interpretarse. Aquí 12 relaciona distancia y tiempo: 12 kilómetros por hora.',
    rate: 'Correcto. Es la razón constante entre distancia y tiempo y tiene unidades de km/h.'
  },
  errorlab: {
    perfect: 'La conclusión es correcta, pero la explicación es débil. “Tener una suma” no formula todavía una propiedad general de proporcionalidad.',
    weak: 'Exacto. Las respuestas B y C explicitan propiedades generales: paso por el origen y cociente constante.'
  }
};

document.querySelectorAll('.question-card').forEach(card => {
  const key = card.dataset.question;
  const feedback = document.getElementById(`feedback-${key}`);
  card.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
      card.querySelectorAll('.choice').forEach(b => b.classList.remove('selected'));
      button.classList.add('selected');
      if (feedback && feedbackText[key]) {
        feedback.textContent = feedbackText[key][button.dataset.answer] || '';
        feedback.classList.add('show');
      }
    });
  });
});

const checkRatios = document.getElementById('checkRatios');
if (checkRatios) {
  checkRatios.addEventListener('click', () => {
    const inputs = [...document.querySelectorAll('.ratio-input')];
    let correct = 0;
    inputs.forEach(input => {
      const raw = input.value.trim().replace(',', '.');
      const value = Number(raw);
      const expected = Number(input.dataset.correct);
      input.style.borderColor = Math.abs(value - expected) < 0.001 ? '#4d8f22' : '#c44736';
      input.style.background = Math.abs(value - expected) < 0.001 ? '#eef9df' : '#fff0ec';
      if (Math.abs(value - expected) < 0.001) correct += 1;
    });
    const fb = document.getElementById('ratioFeedback');
    fb.classList.add('show');
    if (correct === inputs.length) {
      fb.textContent = 'Todos los cocientes son correctos. En Ruta A aparece el invariante 300; en Ruta B el costo medio por kilómetro cambia con la distancia.';
    } else {
      fb.textContent = `Tenés ${correct} de ${inputs.length} cocientes correctos. Revisá las divisiones: en Ruta A debería aparecer un patrón constante.`;
    }
  });
}

const slider = document.getElementById('bSlider');
const graphLine = document.getElementById('graphLine');
const equationLabel = document.getElementById('equationLabel');
const sliderFeedback = document.getElementById('sliderFeedback');

function updateGraph() {
  if (!slider || !graphLine) return;
  const b = Number(slider.value);
  equationLabel.textContent = `y = 300x + ${b}`;
  const originY = 290 - (b / 600) * 150;
  const endY = Math.max(45, originY - 230);
  graphLine.setAttribute('y1', originY.toFixed(1));
  graphLine.setAttribute('y2', endY.toFixed(1));
  sliderFeedback.textContent = b === 0
    ? 'Con b = 0, la recta pasa por el origen y conserva la forma y = kx.'
    : `Con b = ${b}, aparece un valor inicial: cuando x = 0, y = ${b}. La recta ya no pasa por el origen.`;
}

if (slider) {
  slider.addEventListener('input', updateGraph);
  updateGraph();
}

const progressFill = document.getElementById('progressFill');
function updateProgress() {
  if (!progressFill) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
  progressFill.style.width = `${pct}%`;
}
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();
