# [fbanitz.fr](https://fbanitz.fr)

My personal website and blog built with Sculpin, Bootstrap 5, and Webpack Encore.

## Prerequisites

- PHP 7.4 or higher
- Composer
- Node.js 18 or higher
- Yarn

## Local Development Setup

1. Clone the repository
```bash
git clone https://github.com/fbanitz/fbanitz.fr.git
cd fbanitz.fr
```
https://getcomposer.org/y
```bash
composer install
```
https://yarnpkg.com/
```bash
yarn install
```
2. generate files

For development
```bash
yarn encore:dev
vendor/bin/sculpin generate
```
For development with watch mode
```bash
yarn encore:watch
composer run sculpin-watch
```
For production
```bash
yarn encore:prod
vendor/bin/sculpin generate --env=prod
```
3. Create a post
> source/_posts/yourpost.md
```markdown
---
title: Your Post Title
tags: [tag1, tag2]
categories: [category1]
---
Your content here...
```
The production-ready site will be available in the `output_prod/` directory.

## Deployment

The site is automatically deployed via GitHub Actions when:
- A new tag is pushed
- The workflow is manually triggered

The deployment process:
1. Builds assets with Webpack Encore
2. Generates the static site with Sculpin
3. Uploads the built site via SFTP

## Project Structure

- `source/_posts/` - Blog posts in Markdown
- `source/_layouts/` - Twig templates
- `source/assets/` - CSS, JavaScript, and images
- `app/config/` - Sculpin configuration
- `output_dev/` - Development build output
- `output_prod/` - Production build output

## Technologies Used

- [Sculpin](https://sculpin.io/) - Static site generator
- [Bootstrap 5](https://getbootstrap.com/) - Frontend framework
- [Webpack Encore](https://symfony.com/doc/current/frontend.html) - Asset management
- [Twig](https://twig.symfony.com/) - Template engine
- [Markdown](https://daringfireball.net/projects/markdown/) - Content formatting
