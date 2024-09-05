# Roger's Studio

- All images are from [Vecteezy](https://vecteezy.com/) and are free-licensed.
- Built with Bootstrap, Animate.css.

### Development Note
1. After reviewing the design, I carefully considered the project's structure. Each of the three pages shares the same header and footer. To improve coding efficiency and maintain uniformity, I separated the header, footer, and layout into individual HTML files. I then created separate files for the content of each of the three pages. Using a templating engine, I generated the final HTML files for each page. This approach makes the project easier to develop and maintain. See the [development branch](https://github.com/roger-twan/roger-studio/tree/development) for details.
2. Added a small piece of JavaScript code to change the header background color from transparent to black when scrolling.
3. To ensure the footer always stays at the bottom, a `min-height` property was added to `main` tag.
4. To achieve appropriate text display, the root font size was adjusted for different screen sizes.
