function escapeHtml(value) {
  if (typeof value !== 'string') {
    return value
  }
  return value.replace(/[&<>`"'\/]/g, function(result) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '`': '&#x60;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2f;',
    }[result]
  })
}
