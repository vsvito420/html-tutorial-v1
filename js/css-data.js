// CSS tutorial examples data
export const cssExamples = [
  {
    title: 'Textformatierung',
    code: `.text-styling {
  color: #2563eb;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
}`,
    html: `<p class="text-styling">
  Dieser Text demonstriert verschiedene Textformatierungen
</p>`
  },
  {
    title: 'Box Model',
    code: `.box-model {
  background-color: #f3f4f6;
  padding: 20px;
  margin: 15px;
  border: 2px solid #374151;
  border-radius: 8px;
}`,
    html: `<div class="box-model">
  Dieser Container zeigt das CSS Box Model
</div>`
  },
  {
    title: 'Flexbox Layout',
    code: `.flex-container {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  padding: 10px;
}

.flex-item {
  background-color: #dbeafe;
  padding: 15px;
  border-radius: 4px;
}`,
    html: `<div class="flex-container">
  <div class="flex-item">Flex Item 1</div>
  <div class="flex-item">Flex Item 2</div>
  <div class="flex-item">Flex Item 3</div>
</div>`
  },
  {
    title: 'Grid Layout',
    code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  padding: 10px;
}

.grid-item {
  background-color: #e0e7ff;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
}`,
    html: `<div class="grid-container">
  <div class="grid-item">Grid 1</div>
  <div class="grid-item">Grid 2</div>
  <div class="grid-item">Grid 3</div>
  <div class="grid-item">Grid 4</div>
</div>`
  },
  {
    title: 'Transitions & Hover',
    code: `.hover-effect {
  background-color: #818cf8;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.hover-effect:hover {
  background-color: #4f46e5;
  transform: scale(1.05);
}`,
    html: `<button class="hover-effect">
  Hover über mich!
</button>`
  }
];