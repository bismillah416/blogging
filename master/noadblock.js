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
