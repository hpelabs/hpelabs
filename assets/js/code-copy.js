// Add copy button to code blocks
document.addEventListener('DOMContentLoaded', function() {
  function updateHScrollState(pre) {
    const wrapper = pre.parentElement;
    if (!wrapper || !wrapper.classList.contains('code-block-wrapper')) return;
    const hasHScroll = pre.scrollWidth > pre.clientWidth;
    wrapper.classList.toggle('has-hscroll', hasHScroll);
  }

  document.querySelectorAll('pre').forEach(function(pre) {
    if (pre.parentElement.classList.contains('code-block-wrapper')) return;

    // Wrap pre in a container (for consistent styling)
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    // Skip copy button for .no-copy blocks
    if (pre.closest('.no-copy')) {
      updateHScrollState(pre);
      return;
    }

    // Create and add button to wrapper
    const btn = document.createElement('button');
    btn.className = 'copy-code-button';
    btn.textContent = 'Copy';
    
    btn.addEventListener('click', function() {
      const code = pre.querySelector('code');
      const text = code ? code.textContent : pre.textContent;
      navigator.clipboard.writeText(text).then(function() {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(function() {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      });
    });
    
    wrapper.appendChild(btn);
    updateHScrollState(pre);
  });

  window.addEventListener('resize', function() {
    document.querySelectorAll('.code-block-wrapper pre').forEach(updateHScrollState);
  });

  window.addEventListener('load', function() {
    document.querySelectorAll('.code-block-wrapper pre').forEach(updateHScrollState);
  });
});
