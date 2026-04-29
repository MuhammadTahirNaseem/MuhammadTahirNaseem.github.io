# Dr. Muhammad Tahir Naseem Academic Website

Static academic personal website for **Dr. Muhammad Tahir Naseem**, Faculty of Basic Sciences, GIK Institute of Engineering Sciences and Technology.

Repository: `MuhammadTahirNaseem.github.io`

This website uses only HTML, CSS, and vanilla JavaScript. It does not require PHP, a backend, a database, React, Next.js, build tools, paid APIs, or a paid domain. It can be hosted directly with GitHub Pages.

## Folder Structure

```text
.
|-- index.html
|-- research.html
|-- publications.html
|-- teaching.html
|-- projects.html
|-- students.html
|-- cv.html
|-- contact.html
|-- assets/
|   |-- css/
|   |   `-- styles.css
|   |-- files/
|   |   |-- cv.pdf
|   |   |-- es111-assessment-structure.txt
|   |   |-- es111-course-outline.txt
|   |   `-- es111-weekly-topics.txt
|   |-- img/
|   |   `-- physics-field.svg
|   `-- js/
|       |-- main.js
|       |-- publications.js
|       `-- theme-init.js
`-- README.md
```

## How to Edit

- Edit page text directly in the relevant `.html` file.
- Edit layout, colors, spacing, and responsive design in `assets/css/styles.css`.
- Edit publication data in `assets/js/publications.js`.
- Replace the CV by uploading the final PDF as `assets/files/cv.pdf`.
- Add images to `assets/img/` and reference them with relative paths, for example `assets/img/example.png`.
- Update academic profile links in `contact.html`.

## Local Preview

Open `index.html` directly in a browser. The site does not need a local server because all pages use relative static assets.

## GitHub Pages Deployment

1. Open the repository `MuhammadTahirNaseem.github.io` on GitHub.
2. Upload all files and folders to the repository root.
3. Confirm that `index.html` is at the root, not inside another folder.
4. Go to **Settings > Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)` folder.
7. Save the settings.
8. GitHub Pages will publish the site at `https://MuhammadTahirNaseem.github.io/`.

## Deployment Checklist

- `index.html` is in the repository root.
- All internal page and asset links use relative paths.
- CSS is loaded from `assets/css/styles.css`.
- JavaScript is loaded from `assets/js/`.
- Images are loaded from `assets/img/`.
- The CV button links to `assets/files/cv.pdf`.
- No backend, database, build step, or paid service is required.
