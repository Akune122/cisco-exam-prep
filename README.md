# 🌐 Cisco Exam Prep — CCNP & CCNA Interactive Simulator

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-0ea5e9?style=for-the-badge&logo=github)](https://akune122.github.io/cisco-exam-prep/)
[![Cisco CCNP](https://img.shields.io/badge/Cisco-CCNP%20ENCOR%20v9-6366f1?style=for-the-badge&logo=cisco)](https://github.com/Akune122/cisco-exam-prep)
[![Zero Dependencies](https://img.shields.io/badge/Stack-HTML%20%7C%20CSS%20%7C%20JS%20%7C%20JSON-10b981?style=for-the-badge)](https://github.com/Akune122/cisco-exam-prep)

Plateforme web interactive, épurée et rapide pour s'entraîner aux examens de certification **Cisco (CCNP ENCOR v9, CCNA v7)**.  
Conçue pour reproduire les conditions d'examen avec extraits **Cisco IOS CLI**, schémas, questions à choix multiples, questions d'association (*Matching*), **Quizz par séries de 10 questions** et **Mode Examen Final**.

🔗 **Accéder au site en ligne (GitHub Pages) :** **[https://akune122.github.io/cisco-exam-prep/](https://akune122.github.io/cisco-exam-prep/)**

---

## ✨ Fonctionnalités principales

- **🎯 Quizz par séries de 10 questions** (`Quizz 1`, `Quizz 2`, `Quizz 3`…) :
  - Chaque Quizz contient un bloc fixe de 10 questions du cours, mais **mélange aléatoirement l'ordre des questions et l'ordre des réponses** à chaque tentative.
- **🏆 Mode Examen Final (Certification à 70 %)** :
  - Tire jusqu'à **60 questions aléatoires** dans la banque du cours.
  - Validation de la certification dès **70 % de bonnes réponses** avec animation et sauvegarde du meilleur score.
- **💻 Support complet des formats d'examen Cisco** :
  - **Terminal Cisco IOS CLI** intégré pour les sorties de commandes (`show ip bgp`, `show standby brief`, `show ip ospf interface`, etc.), scripts Python et JSON.
  - **Choix unique & Choix multiples** (`Choose two`, `Choose three`, `Choose four`) avec compteur dynamique.
  - **Questions d'association (*Match*)** interactives par menus déroulants.
  - **Illustrations & Schémas** avec zoom plein écran (*Lightbox*).
- **📊 Correction détaillée en fin de série** :
  - Récapitulatif complet question par question avec les réponses attendues et les **explications officielles du cours (`Topic`)**.
- **🎨 Interface moderne & personnalisable** :
  - Mode **Sombre / Clair** instantané.
  - Sauvegarde automatique des meilleurs scores dans le navigateur (`localStorage`).
  - Architecture **100 % découplée en JSON** : ajout de nouveaux cours sans modifier le code source.

---

## 📚 Catalogue des examens inclus

| Catégorie | Examen / Module | Questions | Découpage | Statut |
| :--- | :--- | :---: | :---: | :---: |
| **CCNP ENCOR v9** | **Course Final Exam — CCNP ENCOR (v9)** | `63` | 7 Quizz (10 par 10) + Mode Examen (60 Q) | ✅ Actif |
| **CCNP ENCOR v9** | **Checkpoint Exam : Network Routing (Modules 8 – 13)** | `45` | 5 Quizz (10 par 10) + Mode Examen (45 Q) | ✅ Actif |
| **CCNP ENCOR v9** | **Checkpoint Exam : Network Security (Modules 14 – 16)** | `28` | 3 Quizz (10 par 10) + Mode Examen (28 Q) | ✅ Actif |
| **CCNP ENCOR v9** | **Checkpoint Exam : Virtualization & Network Services (Modules 17 – 20)** | `30` | 3 Quizz (10 par 10) + Mode Examen (30 Q) | ✅ Actif |
| **CCNP ENCOR v9** | **Checkpoint Exam : Programmability (Modules 21 – 22)** | `17` | 2 Quizz (10 par 10) + Mode Examen (17 Q) | ✅ Actif |
| **CCNP ENCOR v9** | **Checkpoint Exam : Software-Defined Networking (Modules 23 – 26)** | `33` | 4 Quizz (10 par 10) + Mode Examen (33 Q) | ✅ Actif |
| **CCNA v7** | *Modules CCNA 1 / 2 / 3* | — | Prêt via `data/catalog.json` | 🔜 Évolutif |

---

## 📁 Architecture du projet

```text
cisco-exam-prep/
├── index.html                           # Point d'entrée de l'application (SPA)
├── css/
│   └── styles.css                       # Design system (Dark/Light, animations, terminal CLI)
├── js/
│   └── app.js                           # Moteur de Quizz, mélange aléatoire, scores & routage
├── data/
│   ├── catalog.json                     # Catalogue des catégories et des examens
│   ├── exams/
│   │   ├── ccnp-encor-v9-final.json     # Banque Final Exam CCNP ENCOR v9 (63 questions)
│   │   └── ccnp-encor-v9-routing.json   # Banque Checkpoint Routing Modules 8–13 (45 questions)
│   └── fallback-bundle.js               # Bundle auto-généré pour utilisation locale hors-serveur (file://)
├── assets/
│   └── images/                          # Illustrations locales des questions
├── scripts/
│   └── import-itexam.mjs                # Script Node.js d'extraction automatique en JSON
└── .github/
    └── workflows/
        └── pages.yml                    # Déploiement automatique vers GitHub Pages
```

---

## 🚀 Utilisation en local

Aucun serveur ni dépendance `npm` n'est obligatoire :

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Akune122/cisco-exam-prep.git
   cd cisco-exam-prep
   ```
2. Ouvrez simplement `index.html` dans votre navigateur (double-clic), ou lancez un serveur statique local :
   ```bash
   npx serve .
   ```

---

## ➕ Ajouter un nouvel examen (CCNP / CCNA)

Toutes les questions sont stockées dans `data/exams/` au format JSON :

1. Créez votre fichier `data/exams/<id-examen>.json` (ou générez-le via `scripts/import-itexam.mjs`).
2. Déclarez le nouvel examen dans le tableau `courses` de [`data/catalog.json`](data/catalog.json).
3. Régénérez le bundle de secours local :
   ```bash
   node scripts/import-itexam.mjs --rebuild-bundle
   ```

---

## 🌍 Déploiement sur GitHub Pages

Le dépôt inclut le workflow GitHub Actions [`.github/workflows/pages.yml`](.github/workflows/pages.yml) ainsi qu'un fichier `.nojekyll` :

1. Sur GitHub, ouvrez votre dépôt **Akune122/cisco-exam-prep** → **Settings** → **Pages**.
2. Sous **Build and deployment** → **Source**, choisissez **Deploy from a branch** (branche `main` / dossier `/ (root)`) ou **GitHub Actions**.
3. Votre site sera automatiquement accessible sur :  
   👉 **`https://akune122.github.io/cisco-exam-prep/`**
