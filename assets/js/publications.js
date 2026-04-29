const publications = [
  {
    title: "Heat Transport in a Driven Open Quantum System",
    authors: "Muhammad Tahir Naseem, A. Khan, and S. Mahmood",
    journal: "Journal of Quantum Thermodynamics",
    year: 2026,
    doi: "https://doi.org/",
    arxiv: "https://arxiv.org/",
    category: "Quantum thermodynamics and heat transport"
  },
  {
    title: "Floquet Control of Quantum Thermal Machines",
    authors: "Muhammad Tahir Naseem and L. Ahmed",
    journal: "Physical Review Applied",
    year: 2025,
    doi: "https://doi.org/",
    arxiv: "https://arxiv.org/",
    category: "Floquet quantum thermal devices"
  },
  {
    title: "Thermal Rectification in Asymmetric Quantum Networks",
    authors: "R. Iqbal, Muhammad Tahir Naseem, and F. Ali",
    journal: "New Journal of Physics",
    year: 2025,
    doi: "https://doi.org/",
    arxiv: "",
    category: "Quantum thermal diodes and rectification"
  },
  {
    title: "Fisher Information Bounds for Quantum Thermometry",
    authors: "Muhammad Tahir Naseem and H. Qureshi",
    journal: "Quantum Science and Technology",
    year: 2024,
    doi: "https://doi.org/",
    arxiv: "https://arxiv.org/",
    category: "Quantum thermometry and Fisher information"
  },
  {
    title: "Reservoir Engineering of Mechanical Cat States",
    authors: "S. Rehman, Muhammad Tahir Naseem, and P. Meystre",
    journal: "Optics Communications",
    year: 2024,
    doi: "https://doi.org/",
    arxiv: "",
    category: "Reservoir-engineered mechanical cat states"
  },
  {
    title: "Master Equation Methods for Structured Quantum Reservoirs",
    authors: "Muhammad Tahir Naseem, N. Farooq, and T. Hasan",
    journal: "Annals of Physics",
    year: 2023,
    doi: "https://doi.org/",
    arxiv: "https://arxiv.org/",
    category: "Open quantum systems and master equations"
  },
  {
    title: "Quantum Heat Diodes Based on Engineered System-Bath Couplings",
    authors: "Muhammad Tahir Naseem and M. Siddiqui",
    journal: "Physica Scripta",
    year: 2023,
    doi: "https://doi.org/",
    arxiv: "https://arxiv.org/",
    category: "Quantum thermal diodes and rectification"
  },
  {
    title: "Temperature Estimation with Dissipative Quantum Probes",
    authors: "A. Raza and Muhammad Tahir Naseem",
    journal: "International Journal of Quantum Information",
    year: 2022,
    doi: "https://doi.org/",
    arxiv: "",
    category: "Quantum thermometry and Fisher information"
  }
];

(function () {
  const list = document.querySelector("[data-publication-list]");
  const searchInput = document.querySelector("[data-publication-search]");
  const filterSelect = document.querySelector("[data-publication-filter]");
  const sortSelect = document.querySelector("[data-publication-sort]");
  const count = document.querySelector("[data-publication-count]");
  const empty = document.querySelector("[data-publication-empty]");

  if (!list || !searchInput || !filterSelect || !sortSelect || !count || !empty) {
    return;
  }

  const categories = Array.from(new Set(publications.map((publication) => publication.category))).sort();
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    filterSelect.appendChild(option);
  });

  function createLink(href, label) {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = label;
    link.rel = "noopener";
    return link;
  }

  function renderPublication(publication) {
    const article = document.createElement("article");
    article.className = "publication-card";

    const meta = document.createElement("div");
    meta.className = "publication-card-meta";

    const year = document.createElement("span");
    year.className = "pub-year";
    year.textContent = publication.year;

    const category = document.createElement("span");
    category.className = "publication-category";
    category.textContent = publication.category;

    meta.append(year, category);

    const title = document.createElement("h2");
    title.textContent = publication.title;

    const authors = document.createElement("p");
    authors.className = "publication-authors";
    authors.textContent = publication.authors;

    const journal = document.createElement("p");
    journal.className = "publication-journal";
    journal.textContent = publication.journal;

    const links = document.createElement("div");
    links.className = "pub-links";
    if (publication.doi) {
      links.appendChild(createLink(publication.doi, "DOI"));
    }
    if (publication.arxiv) {
      links.appendChild(createLink(publication.arxiv, "arXiv"));
    }

    article.append(meta, title, authors, journal, links);
    return article;
  }

  function render() {
    const query = searchInput.value.trim().toLowerCase();
    const selectedCategory = filterSelect.value;
    const sortOrder = sortSelect.value;

    const filtered = publications
      .filter((publication) => {
        const matchesCategory = selectedCategory === "all" || publication.category === selectedCategory;
        const searchable = [
          publication.title,
          publication.authors,
          publication.year.toString()
        ].join(" ").toLowerCase();
        return matchesCategory && searchable.includes(query);
      })
      .sort((a, b) => {
        return sortOrder === "oldest" ? a.year - b.year : b.year - a.year;
      });

    list.replaceChildren(...filtered.map(renderPublication));
    const label = filtered.length === 1 ? "publication" : "publications";
    count.textContent = `${filtered.length} ${label}`;
    empty.hidden = filtered.length !== 0;
  }

  searchInput.addEventListener("input", render);
  filterSelect.addEventListener("change", render);
  sortSelect.addEventListener("change", render);

  render();
})();
