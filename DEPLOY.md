# Deployment instructions

1) Prepare the build

- We already produce `site_build.zip` and a `build/` folder with optimized files. Confirm `build/` contains `index.html`, `css/style.min.css`, `js/main.min.js`, and `.htaccess` if needed.

2) Upload via SFTP/FTP (recommended: SFTP)

- Using `lftp` (script provided): set environment variables and run the script:

```bash
export FTP_HOST=ftp.example.com
export FTP_USER=youruser
export FTP_PASS=yourpass
export REMOTE_DIR=/public_html
./upload.sh
```

- The script mirrors the local `build/` contents into `REMOTE_DIR` and preserves timestamps.

3) Panel steps (Fasthosts)

- In the Fasthosts Control Panel, ensure the domain is assigned to the hosting package and the document root is the same as `REMOTE_DIR` used above (often `/public_html` or `/www`).
- Enable SSL for the domain (Let's Encrypt or Fasthosts certificate) and wait for issuance.

4) Post-deploy checks

- Open your site at `https://yourdomain` and fix any mixed-content issues.
- Submit `https://yourdomain/sitemap.xml` to Google Search Console.
