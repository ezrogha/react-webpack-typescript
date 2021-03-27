const fs = require('fs-extra');

fs.copySync('dist', 'build', {
  dereference: true,
  filter: file => file !== 'dist/index.html'
})