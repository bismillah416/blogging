// atOptions = {
// 		'key' : '6f46d3f11fdc3f26732f5524969d00b7',
// 		'format' : 'iframe',
// 		'height' : 50,
// 		'width' : 320,
// 		'params' : {}
// 	};

// document.write('<scr' + 'ipt type="text/javascript" src="//www.topcreativeformat.com/6f46d3f11fdc3f26732f5524969d00b7/invoke.js"></scr' + 'ipt>');


function redirectToNewDomain(newDomain) {
  // Ambil path dan query string dari URL saat ini
  const currentPath = window.location.pathname + window.location.search;

  // Buat URL baru dengan domain yang diinginkan
  const newUrl = newDomain + currentPath;

  // Lakukan redirect ke URL baru
  window.location.href = newUrl;
}


redirectToNewDomain("https://houselandscape13.pages.dev");
