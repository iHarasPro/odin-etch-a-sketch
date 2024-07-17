// Nodes
const main   = document.querySelector('main');
const button = document.querySelector('button');


// Create Grid
function gridCreate(resolution = 16) {
  // Delete the Old Grid
  main.innerHTML = '';

  // Create Elements
  const gridRow  = document.createElement('div');
  const gridCell = document.createElement('div');

  // Assign Classes
  gridRow.classList.add('gridRow');
  gridCell.classList.add('gridCell');

  // Add Cells to the Row
  for (let i = 0; i < resolution; i += 1) {
    gridRow.appendChild(gridCell.cloneNode());
  }

  // Add Rows to the Main
  for (let i = 0; i < resolution; i += 1) {
    main.appendChild(gridRow.cloneNode(true));
  }

  // Trail Effect
  document.querySelectorAll('.gridCell').forEach(function(cell) {
    cell.addEventListener('mouseenter', function() {
      if (cell.style['background-color'] === '') {
        cell.style['background-color'] = `hsl(${Math.random() * 360} 100 50)`;
        cell.style['opacity'] = 0;
      }
      cell.style['opacity'] = Number(cell.style['opacity']) + 0.1;
    })

    cell.addEventListener('click', function() {
      cell.style['background-color'] = `hsl(${Math.random() * 360} 100 50)`;
    })
  })
}

// Button to Create new Grid
button.onclick = function() {
  // Variables
  let resolution = 0;

  // Get a valid resolution from the user ( 0 < res <= 100 )
  do {
    resolution = Math.floor(Number(prompt('Enter the resolution of the new Grid: ')));
  }
  while (!(resolution > 0 && resolution <= 100))

  gridCreate(resolution);
}


// On Load
gridCreate()
