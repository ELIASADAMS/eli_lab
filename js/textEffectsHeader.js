// textEffectsHeader.js
export function injectTextEffectsHeader(targetSelector = '#text-effects-header') {
  const container = document.querySelector(targetSelector);
  if (!container) return;

  const headerHTML = `
      <header id="myCarousel" class="carousel slide">
        <div class="carousel-inner">
          <div class="item active">
            <div class="fill" style="background-color:  #010203;"></div>
            <div class="carousel-caption">
              <div class="ncontainer">
                <h2 class="ntitle">
                  <span class="title-nword title-nword-1">The</span>
                  <span class="title-nword title-nword-2">extent</span>
                  <span class="title-nword title-nword-3">of</span>
                  <span class="title-nword title-nword-4">distress</span>
                  <span class="title-nword title-nword-5">and</span>
                  <span class="title-nword title-nword-6">absence</span>
                  <span class="title-nword title-nword-7">of</span>
                  <span class="title-nword title-nword-1">peace</span>
                  <span class="title-nword title-nword-2">and</span>
                  <span class="title-nword title-nword-3">of</span>
                  <span class="title-nword title-nword-4">regard</span>
                  <span class="title-nword title-nword-5">for</span>
                  <span class="title-nword title-nword-6">others</span>
                  <span class="title-nword title-nword-7">is</span>
                  <span class="title-nword title-nword-1">shocking</span>
                  <span class="title-nword title-nword-2">to</span>
                  <span class="title-nword title-nword-3">witness</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="fill" style="background-color:  #010203;">
              <div class="carousel-caption">
                <div class="ncontainer">
                  <h2 class="ntitle">
                    <span class="title-nword title-nword-1">From</span>
                    <span class="title-nword title-nword-2">Chaos</span>
                    <span class="title-nword title-nword-3">to</span>
                    <span class="title-nword title-nword-4">Pieces</span>
                    <span class="title-nword title-nword-5">of</span>
                    <span class="title-nword title-nword-6">the</span>
                    <span class="title-nword title-nword-7">Whole</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="fill" style="background-color:  #010203;">
              <div class="carousel-caption">
                <div class="ncontainer">
                  <h2 class="ntitle">
                    <span class="title-nword title-nword-1">[translate:Freundschaft und Zusammenarbeit]</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev"><span class="icon-prev"></span></a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next"><span class="icon-next"></span></a>
      </header>
    `;

  container.innerHTML = headerHTML;
}
