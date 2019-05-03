module.exports = {
  hooks: {
    'pre-commit': 'yarn run lint-staged',
    'pre-push': 'yarn run test',
  }
}