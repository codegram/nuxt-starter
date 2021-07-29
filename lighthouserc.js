module.exports = {
  ci: {
    collect: {
      staticDistDir: 'dist',
      autodiscoverUrlBlocklist: ['/admin/index.html'],
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'categories:performance': ['warn', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }],
        'uses-text-compression': 'off',
        'csp-xss': 'off',
        'unused-javascript': 'off',
        'legacy-javascript': 'off',
        'largest-contentful-paint': ['error', { minScore: 0.8 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: 'lighthouse-report',
    },
  },
}
