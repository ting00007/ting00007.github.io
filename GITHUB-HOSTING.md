# Host the TT Family website on GitHub Pages

## 1. Create the GitHub repository

1. Sign in at https://github.com.
2. Click **New repository**.
3. Name it `tt-family-homestay`.
4. Choose **Public** and click **Create repository**.
5. Do not add a README, licence, or `.gitignore` on GitHub.

## 2. Upload the website from Terminal

Replace `YOUR_GITHUB_USERNAME` below with your GitHub username, then copy and run each command:

```bash
cd "/Users/ttfamily/Documents/Codex/2026-06-28/responsibilities-develop-direct-national-oem-accounts/outputs/haven-home"
git init
git add .
git commit -m "Publish TT Family homestay website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/tt-family-homestay.git
git push -u origin main
```

If GitHub asks you to sign in, follow the browser prompt. GitHub no longer accepts account passwords in Terminal; use its browser sign-in or a personal access token.

## 3. Turn on GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Open the **Actions** tab and wait for the green check mark beside the deployment.

Your website will be available at:

```text
https://YOUR_GITHUB_USERNAME.github.io/tt-family-homestay/
```

## Updating the website later

After changing any files, run:

```bash
cd "/Users/ttfamily/Documents/Codex/2026-06-28/responsibilities-develop-direct-national-oem-accounts/outputs/haven-home"
git add .
git commit -m "Update TT Family website"
git push
```

GitHub Pages will publish the new version automatically.
