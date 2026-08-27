document.querySelectorAll('.opblock-tag-section')
  .forEach(section => {
    const tag = section.querySelector('.opblock-tag');
    const content = section.querySelector('.operation-tag-content');

    if (tag && content && getComputedStyle(content).display === 'none') {
      tag.click();
    }
  });