// Enhanced dropdown functionality for accessibility
document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  dropdownToggles.forEach(toggle => {
    const dropdown = toggle.nextElementSibling;
    
    if (!dropdown) return;
    
    // Desktop: Show on hover
    if (window.innerWidth > 991) {
      toggle.addEventListener('mouseenter', function() {
        $(this).dropdown('show');
      });
      
      const dropdownMenu = $(dropdown);
      dropdownMenu.on('mouseenter', function() {
        $(toggle).dropdown('show');
      });
      
      dropdownMenu.on('mouseleave', function() {
        $(toggle).dropdown('hide');
      });
      
      toggle.addEventListener('mouseleave', function(e) {
        if (!dropdown.contains(e.relatedTarget)) {
          $(this).dropdown('hide');
        }
      });
    }
    
    // Keyboard navigation
    toggle.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        $(this).dropdown('toggle');
      } else if (e.key === 'Escape') {
        $(this).dropdown('hide');
        this.focus();
      }
    });
    
    // Handle dropdown item keyboard navigation
    const items = dropdown.querySelectorAll('.dropdown-item');
    items.forEach((item, index) => {
      item.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          const next = items[index + 1] || items[0];
          next.focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          const prev = items[index - 1] || items[items.length - 1];
          prev.focus();
        } else if (e.key === 'Escape') {
          $(toggle).dropdown('hide');
          toggle.focus();
        }
      });
    });
  });
});
