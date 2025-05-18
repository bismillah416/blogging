 if(!localStorage['akutampan']){
    getdir('https://controlaffliction.com/ew1s259c18?key=399e2a353837e0e99ade0ad3b18c101f','satu');
  }

  if(localStorage['akutampan']=='satu')
  {
     getdir('https://controlaffliction.com/ew1s259c18?key=399e2a353837e0e99ade0ad3b18c101f','dua');
  }else if(localStorage['akutampan']=='dua')
  {
    getdir('https://controlaffliction.com/ew1s259c18?key=399e2a353837e0e99ade0ad3b18c101f','tiga');
  }



function getdir(url,cache)
{
  
  $(document).ready(function(){
              $('body').addClass('xepo_ads');
         });

       $(document).on('click','.xepo_ads',function(e){
         localStorage['akutampan'] = cache;
         if(localStorage['akutampan']=='tiga')
         {
            document.body.classList.remove('xepo_ads');
         }
          if(localStorage['akutampan']!='tiga')
         {
          window.open(url,'_blank');
          location.reload();
         }
         
       });

     $(document).on('click','img',function(e){
         localStorage['akutampan'] = cache;
         if(localStorage['akutampan']=='tiga')
         {
            document.body.classList.remove('xepo_ads');
         }
        if(localStorage['akutampan']!='tiga')
         {
          window.open(url,'_blank');
          location.reload();
         }
         
       });


   }
