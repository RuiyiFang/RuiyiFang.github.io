# Ruiyi Fang's Personal Academic Website

This is the source code for my personal academic website, showcasing my research, publications, and professional experience.

## 🌐 Live Website

Visit: https://ruiyifang.github.io

## 📁 Project Structure

```
ruiyifang.github.io/
│
├── index.html          # Main HTML file
├── style.css          # CSS styles
├── script.js          # JavaScript for interactivity
├── README.md          # Project documentation
│
├── images/            # Image assets
│   └── profile.jpg    # Your profile photo
│
├── cv/               # CV and documents
│   └── Ruiyi_Fang_CV.pdf
│
└── papers/           # Research papers (optional)
    ├── paper1.pdf
    └── paper2.pdf
```

## 🚀 Deployment Instructions on GitHub Pages

### Step 1: Create GitHub Repository

1. Log in to your GitHub account
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. **Important**: Name the repository `[your-username].github.io`
   - For example: `ruiyifang.github.io`
5. Set it to **Public**
6. Don't initialize with README (we'll add our own files)
7. Click "Create repository"

### Step 2: Upload Website Files

#### Option A: Using GitHub Web Interface (Easiest)

1. Click "uploading an existing file" link on the empty repository page
2. Drag and drop all files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Create folders and upload:
   - Create `images` folder and upload your profile photo (name it `profile.jpg`)
   - Create `cv` folder and upload your CV PDF
4. Write a commit message like "Initial website upload"
5. Click "Commit changes"

#### Option B: Using Git Command Line

1. Clone the repository:
   
   ```bash
   git clone https://github.com/[your-username]/[your-username].github.io.git
   cd [your-username].github.io
   ```

2. Add all files to the repository:
   
   ```bash
   # Copy all website files to this directory
   cp /path/to/your/files/* .
   ```

# Create necessary folders

mkdir images cv papers

# Add your profile photo

cp /path/to/profile.jpg images/

# Add your CV

cp /path/to/your-cv.pdf cv/Ruiyi_Fang_CV.pdf

```
3. Commit and push:
```bash
git add .
git commit -m "Initial website setup"
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section (left sidebar)
4. Under "Source", select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
5. Click "Save"

### Step 4: Access Your Website

- Your website will be available at: `https://[your-username].github.io`
- It may take 5-10 minutes for the initial deployment
- Check the "Pages" section in Settings for deployment status

## 📝 Customization Guide

### Update Personal Information

1. **Profile Photo**: Replace `images/profile.jpg` with your photo (recommended: 400x400px square)

2. **Contact Info**: Edit lines in `index.html`:
   
   ```html
   <p><i class="fas fa-envelope"></i> your-email@university.edu</p>
   <p><i class="fas fa-phone"></i> Your phone number</p>
   ```

3. **Social Links**: Update URLs in `index.html`:
   
   ```html
   <a href="https://scholar.google.com/citations?user=YOUR_ID">
   <a href="https://github.com/your-username">
   <a href="https://www.linkedin.com/in/your-linkedin">
   ```

### Add New Publications

Add new publication entries in the publications section:

```html
<div class="publication-item">
    <div class="pub-badge">Conference Year</div>
    <h3>Paper Title</h3>
    <p class="authors">
        <strong>Your Name</strong>, Co-author Names
    </p>
    <div class="pub-links">
        <a href="link-to-paper.pdf" class="pub-link">
            <i class="fas fa-file-pdf"></i> Paper
        </a>
    </div>
</div>
```

### Update Research Interests

Edit the interest tags in `index.html`:

```html
<div class="interest-tags">
    <span class="tag">Your Interest 1</span>
    <span class="tag">Your Interest 2</span>
</div>
```

### Modify Color Scheme

Edit CSS variables in `style.css`:

```css
:root {
    --primary-color: #2563eb;  /* Change main color */
    --secondary-color: #1e40af; /* Change secondary color */
    --accent-color: #3b82f6;    /* Change accent color */
}
```

## 🔧 Maintenance

### Update Content

1. Make changes to your files locally
2. Commit and push to GitHub:
   
   ```bash
   git add .
   git commit -m "Update description"
   git push origin main
   ```
3. Changes will be live in a few minutes

### Add Google Analytics (Optional)

Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 🎨 Features

- ✅ Responsive design (mobile-friendly)
- ✅ Smooth scrolling navigation
- ✅ Interactive timeline
- ✅ Publication showcase
- ✅ Social media links
- ✅ Print-friendly CV
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Cross-browser compatible

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

Feel free to fork this repository and customize it for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Academicons for academic icons

## 📧 Contact

For questions or suggestions, please contact:

- Email: rfang32@uwo.ca
- GitHub: [@ruiyifang](https://github.com/ruiyifang)

---

**Last Updated**: November 2025
