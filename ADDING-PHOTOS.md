# Adding project photos

Open `index.html` for the portfolio. Every project card now links to its own `project-*.html` page.

1. Create an `images` folder next to the HTML files.
2. Open the relevant project HTML file and search for `ADD YOUR PHOTO`.
3. Save your photo using the example filename, or change both `href` and `src` to your filename.
4. Remove the `<!--` and `-->` around the example linked image. Delete the `gallery-empty` placeholder immediately below it.
5. Write a descriptive `alt` value and update the caption as needed.

The `href` points to the original, full-resolution image. The `src` can point to that same image or a smaller thumbnail. The full-screen viewer offers **Actual size**, a scrollable original-resolution view, and **Open original** in a new tab. Escape or Close returns to the project page.

Duplicate a complete `<figure>...</figure>` block to add more pictures. Each picture opens independently.

To show a photo on the home-page card too, follow its existing `ADD YOUR PHOTO` comment in `index.html`, using the same image path. Home cards and project galleries are edited separately.

Keep all six project HTML files, `project-pages.css`, `project-gallery.js`, the main HTML file, and the `images` folder together when copying or hosting the portfolio. Pages also work when opened directly from disk.
