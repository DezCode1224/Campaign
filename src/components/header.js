// Header component - can be used for dynamic header generation if needed
export const getHeaderHTML = () => {
  return `
    <nav class="navbar navbar-expand-lg fixed-top" role="navigation" aria-label="Main navigation">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <span class="state-icon" style="width: 40px; height: 40px; background: white; border-radius: 2px; display: inline-block;"></span>
          <strong>DEZMOND ROSIER</strong>
        </a>
        <button 
          class="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto align-items-center">
            <li class="nav-item">
              <a class="nav-link" href="about.html">ABOUT</a>
            </li>
            <li class="nav-item dropdown">
              <a 
                class="nav-link dropdown-toggle" 
                href="#" 
                id="prioritiesDropdown" 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"
              >
                PRIORITIES
              </a>
              <div class="dropdown-menu" aria-labelledby="prioritiesDropdown">
                <a class="dropdown-item" href="priorities.html">All Priorities</a>
                <a class="dropdown-item" href="priorities/healthcare.html">Healthcare</a>
                <a class="dropdown-item" href="priorities/education.html">Education</a>
                <a class="dropdown-item" href="priorities/climate-energy.html">Climate & Energy</a>
                <a class="dropdown-item" href="priorities/economy-jobs-infrastructure.html">Economy, Jobs & Infrastructure</a>
                <a class="dropdown-item" href="priorities/gun-violence.html">Gun Violence Prevention</a>
                <a class="dropdown-item" href="priorities/housing.html">Housing</a>
                <a class="dropdown-item" href="priorities/immigration-reform.html">Immigration Reform</a>
                <a class="dropdown-item" href="priorities/lgbtq-rights.html">LGBTQ+ Rights</a>
                <a class="dropdown-item" href="priorities/national-security-veterans.html">National Security & Veterans</a>
                <a class="dropdown-item" href="priorities/criminal-justice-reform.html">Criminal Justice Reform</a>
                <a class="dropdown-item" href="priorities/seniors.html">Seniors</a>
                <a class="dropdown-item" href="priorities/campaign-finance-reform.html">Campaign Finance Reform</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="endorsements.html">2024 ENDORSEMENTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="get-involved.html">GET INVOLVED</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!" target="_blank" aria-label="Twitter">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!" target="_blank" aria-label="Facebook">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn text-white ml-2" href="donate.html">DONATE</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
};
