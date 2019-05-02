module.exports = {
  hooks: {
    'pre-commit': 'yarn run test',
    'pre-push': 'yarn run test',
  }
}