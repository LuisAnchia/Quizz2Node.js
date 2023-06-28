const fs = require('fs');

fs.copyFile('origen.txt', 'destino.txt', (err) => {
  if (err) throw err;
  console.log('El archivo fue copiado exitosamente.');
});