const publications = [
  {
    title: "Reservoir-engineered mechanical cat states with a driven qubit",
    authors: "M. Tahir Naseem",
    journal: "Phys. Rev. A 113, 013732",
    year: 2026,
    doi: "https://journals.aps.org/pra/abstract/10.1103/dxzd-nqrv",
    arxiv: "",
    category: "Reservoir engineering and mechanical quantum states"
  },
  {
    title: "Optimal strategies for transient and equilibrium quantum thermometry using Gaussian and non-Gaussian probes",
    authors: "Asghar Ullah, M. Tahir Naseem, and Ozgur E. Mustecaplioglu",
    journal: "Phys. Rev. A 112, 062601",
    year: 2025,
    doi: "https://journals.aps.org/pra/abstract/10.1103/62ks-19fs",
    arxiv: "",
    category: "Quantum thermometry and Fisher information"
  },
  {
    title: "Quantum thermal rectification via state-dependent two-photon dissipation",
    authors: "M. Tahir Naseem",
    journal: "Quantum Sci. Technol. 11, 015011",
    year: 2025,
    doi: "https://iopscience.iop.org/article/10.1088/2058-9565/ae20b7/meta",
    arxiv: "",
    category: "Quantum thermal diodes and rectification"
  },
  {
    title: "Signature of topology via heat transfer analysis in the Su-Schrieffer-Heeger (SSH) model",
    authors: "Vipul Upadhyay, M. Tahir Naseem, Ozgur E. Mustecaplioglu, and Rahul Marathe",
    journal: "New J. Phys. 26, 013014",
    year: 2024,
    doi: "https://iopscience.iop.org/article/10.1088/1367-2630/ad19aa/meta",
    arxiv: "",
    category: "Quantum thermodynamics and heat transport"
  },
  {
    title: "Macroscopic distant magnon-mode entanglement via a squeezed drive",
    authors: "Kamran Ullah, M. Tahir Naseem, and Ozgur E. Mustecaplioglu",
    journal: "Phys. Rev. A 110, 063715",
    year: 2024,
    doi: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.110.063715",
    arxiv: "",
    category: "Quantum optics and hybrid systems"
  },
  {
    title: "Mixing thermal coherent states for precision and range enhancement in quantum thermometry",
    authors: "Asghar Ullah, M. Tahir Naseem, and Ozgur E. Mustecaplioglu",
    journal: "Quantum Sci. Technol. 10, 015044",
    year: 2024,
    doi: "https://iopscience.iop.org/article/10.1088/2058-9565/ad994a/meta",
    arxiv: "",
    category: "Quantum thermometry and Fisher information"
  },
  {
    title: "Enantiomer detection via quantum Otto cycle",
    authors: "Mohsen Izadyari, M. Tahir Naseem, and Ozgur E. Mustecaplioglu",
    journal: "Phys. Rev. E 107, L042103",
    year: 2023,
    doi: "https://journals.aps.org/pre/abstract/10.1103/PhysRevE.107.L042103",
    arxiv: "",
    category: "Quantum thermal devices"
  },
  {
    title: "Low-temperature quantum thermometry boosted by coherence generation",
    authors: "Asghar Ullah, M. Tahir Naseem, and Ozgur E. Mustecaplioglu",
    journal: "Phys. Rev. Research 5, 043184",
    year: 2023,
    doi: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.5.043184",
    arxiv: "",
    category: "Quantum thermometry and Fisher information"
  },
  {
    title: "Engineering entanglement between resonators by hot environment",
    authors: "M. Tahir Naseem and Ozgur E. Mustecaplioglu",
    journal: "Quantum Sci. Technol. 7, 045012",
    year: 2022,
    doi: "https://iopscience.iop.org/article/10.1088/2058-9565/ac7f50",
    arxiv: "",
    category: "Open quantum systems and reservoir engineering"
  },
  {
    title: "Antibunching via cooling by heating",
    authors: "M. Tahir Naseem and Ozgur E. Mustecaplioglu",
    journal: "Phys. Rev. A 105, 012201",
    year: 2022,
    doi: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.105.012201",
    arxiv: "",
    category: "Quantum thermodynamics and heat transport"
  },
  {
    title: "Ground-state cooling of mechanical resonators by quantum reservoir engineering",
    authors: "M. Tahir Naseem and Ozgur E. Mustecaplioglu",
    journal: "Communications Physics 4, 95",
    year: 2021,
    doi: "https://www.nature.com/articles/s42005-021-00599-z",
    arxiv: "",
    category: "Open quantum systems and reservoir engineering"
  },
  {
    title: "All optical control of magnetization in quantum confined ultrathin magnetic metals",
    authors: "S. M. Zanjani, M. Tahir Naseem, Ozgur E. Mustecaplioglu, and M. C. Onbasli",
    journal: "Scientific Reports 11, 15976",
    year: 2021,
    doi: "https://www.nature.com/articles/s41598-021-95319-6",
    arxiv: "",
    category: "Quantum optics and hybrid systems"
  },
  {
    title: "Heat rectification by two qubits coupled with Dzyaloshinskii-Moriya interaction",
    authors: "V. Upadhyay, M. Tahir Naseem, R. Marathe, and Ozgur E. Mustecaplioglu",
    journal: "Phys. Rev. E 104, 054137",
    year: 2021,
    doi: "https://journals.aps.org/pre/abstract/10.1103/PhysRevE.104.054137",
    arxiv: "",
    category: "Quantum thermal diodes and rectification"
  },
  {
    title: "Two-body quantum absorption refrigerators with optomechanical-like interactions",
    authors: "M. Tahir Naseem, A. Misra, and Ozgur E. Mustecaplioglu",
    journal: "Quantum Sci. Technol. 5, 035006",
    year: 2020,
    doi: "https://iopscience.iop.org/article/10.1088/2058-9565/ab8d89/meta",
    arxiv: "",
    category: "Quantum thermal devices"
  },
  {
    title: "Minimal quantum heat manager boosted by bath spectral filtering",
    authors: "M. Tahir Naseem, A. Misra, Ozgur E. Mustecaplioglu, and G. Kurizki",
    journal: "Phys. Rev. Research 2, 033285",
    year: 2020,
    doi: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.2.033285",
    arxiv: "",
    category: "Quantum thermodynamics and heat transport"
  },
  {
    title: "Tunable multiwindow magnomechanically induced transparency, Fano resonances, and slow-to-fast light conversion",
    authors: "K. Ullah, M. Tahir Naseem, and Ozgur E. Mustecaplioglu",
    journal: "Phys. Rev. A 102, 033721",
    year: 2020,
    doi: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.102.033721",
    arxiv: "",
    category: "Quantum optics and hybrid systems"
  },
  {
    title: "Quantum heat engine with a quadratically coupled optomechanical system",
    authors: "M. Tahir Naseem and Ozgur E. Mustecaplioglu",
    journal: "J. Opt. Soc. Am. B 36, 3000",
    year: 2019,
    doi: "https://opg.optica.org/josab/fulltext.cfm?uri=josab-36-11-3000&id=422090",
    arxiv: "",
    category: "Quantum thermal devices"
  },
  {
    title: "Quantum optical two-atom thermal diode",
    authors: "C. Kargi, M. Tahir Naseem, T. Optarny, Ozgur E. Mustecaplioglu, and G. Kurizki",
    journal: "Phys. Rev. E 99, 042121",
    year: 2019,
    doi: "https://journals.aps.org/pre/abstract/10.1103/PhysRevE.99.042121",
    arxiv: "",
    category: "Quantum thermal diodes and rectification"
  },
  {
    title: "Thermodynamic consistency of the optomechanical master equation",
    authors: "M. Tahir Naseem, A. Xuereb, and Ozgur E. Mustecaplioglu",
    journal: "Phys. Rev. A 98, 052123",
    year: 2018,
    doi: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.98.052123",
    arxiv: "",
    category: "Open quantum systems and master equations"
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
      const linkLabel = publication.doi.includes("doi.org") ? "DOI" : "Article";
      links.appendChild(createLink(publication.doi, linkLabel));
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
