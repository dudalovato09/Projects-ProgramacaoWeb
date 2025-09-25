// Referências aos elementos da página
const addElementButton = document.getElementById('add-element');
const addStyleButton = document.getElementById('add-style');
const previewArea = document.getElementById('dynamic-content');
const styleTag = document.createElement('style');

// Adiciona estilos dinâmicos
document.head.appendChild(styleTag);

// Adiciona novos elementos ao preview
addElementButton.addEventListener('click', () => {
  const elementName = document.getElementById('element-name').value;
  const elementContent = document.getElementById('element-content').value;

  if (elementName) {
    const newElement = document.createElement(elementName);
    newElement.textContent = elementContent || '';
    previewArea.appendChild(newElement);

    document.getElementById('element-name').value = '';
    document.getElementById('element-content').value = '';
  } else {
    alert('Por favor, insira um nome de componente válido.');
  }
});

// Adiciona novos estilos dinâmicos
addStyleButton.addEventListener('click', () => {
  const cssSelector = document.getElementById('css-selector').value;
  const cssStyle = document.getElementById('css-style').value;

  if (cssSelector && cssStyle) {
    styleTag.textContent += `${cssSelector} { ${cssStyle} }\n`;

    document.getElementById('css-selector').value = '';
    document.getElementById('css-style').value = '';
  } else {
    alert('Por favor, insira um seletor e estilo válido.');
  }
});
