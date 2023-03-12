# Bringhurst
A template project with a lean in to best-practice Web typography, inspired by Robert Brignhurst and his seminal *Elements of Typographic Style* (Hartley & Marks Publishers, 2012). 

The product will be `/css/style.css` compiled from the SASS partials in `/scss`. You'll need to have at least a basic grasp of SASS in order to make much use of this project, but if you don&rsquo;t, it's really not that hard, and worth your effort.

## Documentation

The `/documentation` directory contains CSS files that explain the purpose of the working output, often with extensive comments. The comments would clutter and clog up the project output, which is aimed at production, and therefore bloat the file-size unnecessarilly. 

## Config
There are .config files for NPM, Webpack, and PostCSS. To some extent they work together.

### PostCSS
The Autoprefixer plugin uses browserslist to determine which vendor prefixes are required according to your list of supported browsers. It’s easiest to define this list as a "browserslist" array in package.json. The ">2%" value adds vendor prefixes where any browser has at least 2% market share.

## SASS
A breakdown of the partials and what they collate. 
- Typography. Styles that are aimed at fonts
- Utilities. Multi-use classes that 

## Credit where credit's due

Almost all of the work you see in this project was collated from reading and watching articles and tutorials around the Web. As far as possible I've credited everyone who's work I've directly folded into the project.

[Kevin Powell](https://www.youtube.com/kepowob)
- "The problem with browser defaults and the future of resets!", YouTube \[website], \<https://www.youtube.com/watch?v=L4wPV-K1lNI>, accessed September 21, 2022.
- "Full-width background inside a container", YouTube \[website], \<https://www.youtube.com/shorts/81pnuZFarRw>, accessed September 20, 2022.

R. Weychert, "A Modern Typographic Scale", 24 Ways to Impress Your Friends \[website], \<https://24ways.org/2019/a-modern-typographic-scale/>, accessed September 20, 2022

A. Bell, "Managing Flow and Rhythm with CSS Custom Properties", 24 Ways to Impress Your Friends \[website],
 \<https://24ways.org/2018/managing-flow-and-rhythm-with-css-custom-properties/>, accessed September 20, 2022.
