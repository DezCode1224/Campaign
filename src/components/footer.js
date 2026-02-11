// Footer component
export const getFooterHTML = () => {
  return `
    <footer>
      <div class="container">
        <div class="footer-content">
          <p>&copy; ${new Date().getFullYear()} Dezmond Rosier for District 1. All rights reserved.</p>
          <p>Paid for by Dezmond Rosier for District 1</p>
          <div class="social-links">
            <a href="#!" target="_blank" aria-label="Twitter"><i class="fa fa-twitter"></i></a>
            <a href="#!" target="_blank" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
            <a href="#!" target="_blank" aria-label="Instagram"><i class="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  `;
};
