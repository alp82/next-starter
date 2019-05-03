module.exports = {
  // '*.{json,css,scss,html}': ['prettier --write', 'git add'],
  // '*.md': ['prettier --write', 'markdownlint', 'git add'],
  '*.{ts,tsx}': ['eslint --fix', 'tsc', 'git add'],
};