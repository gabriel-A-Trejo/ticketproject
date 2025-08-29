module.exports = {
  'pre-commit':
    'pnpm format && pnpm sort-imports && pnpm lint && pnpm type-check',
  'pre-push': 'pnpm build && pnpm test',
};
