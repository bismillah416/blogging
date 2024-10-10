 if(!localStorage['akutampan']){
    getdir('https://controlaffliction.com/j4q8pc0v?key=becf874ddf28e7a87c797bd5128a5314','satu');
  }

  if(localStorage['akutampan']=='satu')
  {
     getdir('https://controlaffliction.com/j4q8pc0v?key=becf874ddf28e7a87c797bd5128a5314','dua');
  }else if(localStorage['akutampan']=='dua')
  {
    getdir('https://controlaffliction.com/j4q8pc0v?key=becf874ddf28e7a87c797bd5128a5314','tiga');
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
