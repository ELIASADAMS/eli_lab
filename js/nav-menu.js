document.addEventListener("DOMContentLoaded", function () {
  const navHTML = `
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="../../index.html">Eli</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="../../html/nav/about.html">About</a></li>
          <li><a href="../../html/nav/contact.html">Contact</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Projects <b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li><a href="../../html/projects/animation.html">Animation</a></li>
              <li><a href="../../html/projects/interactive.html">Interactive Art</a></li>
              <li><a href="../../html/projects/audio.html">Audio</a></li>
              <li><a href="../../html/projects/collaborations.html">Collaborations</a></li>
              <li><a href="../../html/projects/games.html">Games</a></li>
              <li><a href="../../html/projects/all.html">All</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Extra <b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li><a href="../../html/extra/live_events.html">Live Events</a></li>
              <li><a href="../../html/extra/exhibitions.html">Exhibitions</a></li>
              <li><a href="../../html/extra/performances.html">Performances</a></li>
              <li><a href="../../html/extra/art_practice.html">Art Practice</a></li>
              <li><a href="../../html/extra/brief_history.html">Brief History</a></li>
              <li><a href="../../html/extra/videoart.html">Videoart</a></li>
            </ul>
          </li>
          <li><a href="../../html/workinprogress.html"><span style="color: #656466;">NXT</span></a></li>
        </ul>
      </div>
    </div>
  `;

  const navContainer = document.getElementById("main-nav");
  if (!navContainer) return;
  navContainer.innerHTML = navHTML;

  const currentPath = location.pathname.toLowerCase();

  function normalizePath(href) {
    const a = document.createElement("a");
    a.href = href;
    return a.pathname.toLowerCase();
  }

  const links = navContainer.querySelectorAll("a[href]");
  links.forEach(link => {
    let href = link.getAttribute("href").trim();
    if (href === "#" || href === "") return;

    if (normalizePath(href) === currentPath) {
      const li = link.closest("li");
      if (li) {
        li.classList.add("active");
      }
    }
  });
});
