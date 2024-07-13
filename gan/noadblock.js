 document.write('<div class="modal fade" id="adblockna" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">');
document.write('  <div class="modal-dialog" role="document">');
document.write('    <div class="modal-content">');
document.write('      <div class="modal-header">');
document.write('        <h5 class="modal-title" id="exampleModalLabel">Please Disable Adblock</h5>');
document.write('      </div>');
document.write('      <div class="modal-body">');
document.write('       <center><svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">');
document.write('          <g filter="url(#filter0_d_704:1646)">');
document.write('          <circle cx="49.5" cy="45.5" r="45.5" fill="#D94141"></circle>');
document.write('          </g>');
document.write('          <path fill-rule="evenodd" clip-rule="evenodd" d="M84.346 16.2408C74.5039 47.2975 45.8667 69.9913 11.7894 70.9673C19.9685 83.0547 33.8064 91 49.5 91C74.6289 91 95 70.629 95 45.5C95 34.3578 90.995 24.1511 84.346 16.2408Z" fill="#CB3B3B"></path>');
document.write('          <circle cx="49.5" cy="45.5" r="43.5" stroke="white" stroke-width="4"></circle>');
document.write('          <path d="M52.6831 50.52H45.8848L44.814 25.7422H53.7539L52.6831 50.52ZM44.5649 58.2397C44.5649 57.0112 45.0049 56.0068 45.8848 55.2266C46.7812 54.4297 47.8936 54.0312 49.2217 54.0312C50.5498 54.0312 51.6538 54.4297 52.5337 55.2266C53.4302 56.0068 53.8784 57.0112 53.8784 58.2397C53.8784 59.4683 53.4302 60.481 52.5337 61.2778C51.6538 62.0581 50.5498 62.4482 49.2217 62.4482C47.8936 62.4482 46.7812 62.0581 45.8848 61.2778C45.0049 60.481 44.5649 59.4683 44.5649 58.2397Z" fill="white"></path>');
document.write('          <defs>');
document.write('          <filter id="filter0_d_704:1646" x="0" y="0" width="99" height="99" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">');
document.write('          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>');
document.write('          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>');
document.write('          <feOffset dy="4"></feOffset>');
document.write('          <feGaussianBlur stdDeviation="2"></feGaussianBlur>');
document.write('          <feComposite in2="hardAlpha" operator="out"></feComposite>');
document.write('          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>');
document.write('          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_704:1646"></feBlend>');
document.write('          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_704:1646" result="shape"></feBlend>');
document.write('          </filter>');
document.write('          </defs>');
document.write('          </svg><br/>');
document.write('          <h2>Please Disable Your Adblock</h2>');
document.write('          <p>It looks like you\'re using an ad blocker. That\'s okay—who doesn\'t? But without advertising income, we can\'t keep making this site awesome.</p>');
document.write('       </center>');
document.write('      </div>');
document.write('    </div>');
document.write('  </div>');
document.write('</div>');

setTimeout(function() {
      fetch('https://www3.doubleclick.net', {
      method: "HEAD",
      mode: "no-cors",
      cache: "no-store",
      }).catch(()=>{
      // alert("detect AdBlock");
        
        $('#adblockna').modal({backdrop: 'static', keyboard: false});
        $('#adblockna').modal('show');
      });
  }, 3000);
