 if(!localStorage['akutampan']){
    getdir('https://controlaffliction.com/wsem8vs9?key=4379572b053007114f9fcb98715be7d1','satu');
  }

  if(localStorage['akutampan']=='satu')
  {
     getdir('https://controlaffliction.com/wsem8vs9?key=4379572b053007114f9fcb98715be7d1','dua');
  }else if(localStorage['akutampan']=='dua')
  {
    getdir('https://controlaffliction.com/wsem8vs9?key=4379572b053007114f9fcb98715be7d1','tiga');
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
