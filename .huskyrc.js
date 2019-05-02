module.exports = {
  hooks: {
    'pre-commit': 'yarn run typecheck',
    'pre-push': 'yarn run test',
  }
}