##HTML
**1/5 Basic HTML structure is present**
All pages have the needed tags (`html`, `head`, `body` etc.) present. There are also images on the `index.html`-page. Other things are listed below.

**2/5 HTML structure with clear content differentiation (headings, paragraphs, lists).**
All pages have a `h1` inside the `header`-section. There are also several `p` elements both outside and inside the same element.

**3/5 Use of forms, links and media**
There are links in the navigation bar. These are links leading to different html-pages in the repository.

**4/5 Tables are effectively used**
The table is in the `flowerinfo.html`-file on lines `27-34`. The rest of the table is generated in the `flowerinfo.js`-file (in assets/scripts folder) on lines `14-29`.

**5/5 Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.**
index.html, `flowerinfo.html`, and `catfacts.html`-files all have `nav`, `header` and `footer` present. There's also a `section` in `flowerinfo.html` on row `26-35`.

##CSS
**1/5 Basic CSS styling (colors, fonts)**
Text font and color are same throughout the pages. They are defined in `stylesheet.css` on lines `7-8`.

**2/5 Use of classes and IDs to style specific elements.**
In stylesheet.css, from line `44` onwards, there are several classes and IDs used to style elements. The classes are easy to find, some of the IDs can be found on lines `118-131`.

**3/5 Implementation of responsive design elements**
Flexboxes are used on several pages to get responsive design. All pages have the viewport meta to get responsive design (for example, `index.html` line `6`). In addition, `stylesheet.css` has many @media queries from line `170` onwards. Moreover, the navigation bar turns into a dropdown menu on smaller devices, which makes it easier for mobile users to navigate the page. The styles for this can be seen in `stylesheet.css` on lines `83-108`, and responsive design on `188-205`. The clicking of the navigation bar is done in `navbar.js` (assets/scripts/navbar.js).

**4/5 Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)**
The navigation bar is done with a flexbox. The location of the code is in `stylesheet.css` on lines `83-108`, and responsive design on `188-205`. The clicking of the navigation bar is done in `navbar.js` (assets/scripts/navbar.js). Another flexbox can be found in `index.html` (the images). The styling can be found in `stylesheet.css` on lines `137-172`. Additionally, the footer is made with flexbox. The footer's styling can be found in `stylesheet.css` on lines `28-54`.

**5/5 Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.**
- The fonts and the background are very differently colored, so that the user can easily read the text. The navigation bars and content boxes are made lighter for this reason as well. 
- The font gets slightly smaller when the browser window is small, so that the text can fit the window better. 
- The navigation bar and the footer are put on the top and the bottom of the page respectively. 
- The navigation bar collapses when the window is made smaller. 
- The pictures in the `index.html` page slightly zoom when mouse hovers over them. 
- Navigation bar buttons change color when hovered on, so that the user can distinguish which page they are hovering the mouse over. 
- The navigation bar also makes the current page darker on the navigation bar.