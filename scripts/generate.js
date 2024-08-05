const fs = require('fs-extra');
const path = require('path');
const mustache = require('mustache');

const pages = fs.readdirSync('src/pages');
const layout = fs.readFileSync('src/layout.html', 'utf-8');
const mobileNav = fs.readFileSync('src/mobile-nav.html', 'utf-8');


for (const page of pages) {
  if (path.extname(page) !== '.html') {
    continue;
  }

  const content = fs.readFileSync(`src/pages/${page}`, 'utf-8');
  let title = content.split('\n')[0].split(' ')[1];
  const body = content.replace(content.split('\n')[0], '');

  title = title === 'Home' ? '' : title;

  const output = mustache.render(layout, { title, mobileNav, body }, { mobileNav, body });

  fs.outputFileSync(page, output);
}
