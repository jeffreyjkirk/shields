'use strict'

const { deprecatedService } = require('..')

module.exports = deprecatedService({
  category: 'other',
  url: {
    base: 'cauditor',
    format: '(?:mi|ccn|npath|hi|i|ca|ce|dit)/(?:[^/]+)/(?:[^/]+)/(?:.+)',
  },
  label: 'cauditor',
})
