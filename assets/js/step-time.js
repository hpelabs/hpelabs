// Automatically calculate and update per-step reading time
// Replaces static ~N min values in .step-meta paragraphs
(function () {
  'use strict';

  // Only run on post pages
  const postContent = document.querySelector('.post-content');
  if (!postContent) return;

  // Technical reading pace (words per minute)
  const WPM = 140;

  // Gather all top-level h1 headings inside the post content
  const headings = Array.from(postContent.querySelectorAll('h1'));
  if (!headings.length) return;

  headings.forEach(function (h1, index) {
    // The .step-meta paragraph must immediately follow the h1
    const meta = h1.nextElementSibling;
    if (!meta || !meta.classList.contains('step-meta')) return;

    // Collect all sibling nodes between this h1 and the next h1
    const nextH1 = headings[index + 1] || null;
    let wordCount = 0;
    let node = meta.nextElementSibling;

    while (node && node !== nextH1) {
      // Count words in visible text, skip the Back-to-Top link
      const text = (node.innerText || node.textContent || '').trim();
      if (text) {
        wordCount += text.split(/\s+/).filter(Boolean).length;
      }
      node = node.nextElementSibling;
    }

    // Add words from the step-meta itself and the heading
    wordCount += (meta.innerText || '').split(/\s+/).filter(Boolean).length;
    wordCount += (h1.innerText || '').split(/\s+/).filter(Boolean).length;

    // Calculate time: minimum 1 minute
    const mins = Math.max(1, Math.ceil(wordCount / WPM));

    // Replace only the time portion (e.g. ~3 min or ~15 min)
    meta.innerHTML = meta.innerHTML.replace(/~\d+\s*min/, '~' + mins + ' min');
  });
})();
