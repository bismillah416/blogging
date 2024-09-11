  var st = "master";
var audir = "off";
var type = "a";
var type_url = ""; // kalo ada prefik
var prefix_artikel = "/"
var buat_gc = "yes"; // yes atau no
var waktu_auto = 5000; // detik n x 1000
var bgcolor = "red";
var tema = '1';
var alldomain = ['https://artunion.info'];
var site_url = 'https://artunion.info';
var directads = "https://controlaffliction.com/k8is1xnj?key=a87d11975c26fc1e7d0a5e57c85944a0";
const currentUrl = window.location.search;
const host = window.location.host;
const protocol = window.location.protocol;
var baseUrl = protocol+"//"+host;
var ambila = currentUrl.replace("?search=","");
var ambil = ambila.replace("&c=1","");
var postTitle = decodeURI(ambil);
var url_run = "";
var domain = alldomain[Math.floor(Math.random() * alldomain.length)];
var url = window.location.href;
var parse = parseURL(url);
const title_save = host.toUpperCase().replaceAll(".","_");
if(parse.searchObject && parse.searchObject['id'] && parse.searchObject['title'])
{
 var isid = parse.searchObject['id'];
 var istitle = parse.searchObject['title'];
 var url_fix = domain+'/'+type_url+'/'+isid+'/'+istitle+'.html';
 var kwna = istitle;
 getContent(kwna,tema);
  if(audir=="on")
  {
    auto_direct(url_fix);
  }

}
  else  
{

    var pathname = window.location.pathname;
    var segments = pathname.split('/');
    if (segments[0] === '') {
    segments.shift();
    }
   key = window.location.href.split("?search=")[1];
  
    if(key==null||key=="")
    {
      kwna=segments[0];
    }

    if(kwna=='')
    {
      // auto_direct(domain)
    }

   // console.log("KEYNA ---- "+key+"----"+kwna);
debugger;
  if(key!=undefined)
  {
    
    kwna = key.replaceAll("+","-").replace("?m=1","").replace("#","").replaceAll('%20','-').replace("confrim","");
  
  }
    else
  {
    
    if(type=="a")
    {
      
      if(key==null||key=="")
      {
        key = window.location.href.split(type_url+"/")[3];
        keyblogspot = window.location.href.split(type_url+"/")[5];
      }


      if(keyblogspot==null)
      {
          var kwna = key.replace(".html","").replace("?m=1","").replace("#","").replace("confrim","").replaceAll('%20','-');
          getContent(kwna,tema);
          getToday(kwna);
          loadData(kwna);
      }else
      {
        var kwnablogspot = keyblogspot.replace(".html","").replace("?m=1","").replace("#","").replace("confrim","").replaceAll('%20','-');
        getContentBlogspot(kwnablogspot,tema);
        getToday(kwnablogspot);
      }

      
    

    }
      else if(type=="b")
    {
      var key_url = atob(window.location.href.split(type_url+"/"+st+"/")[1].replace("?m=1","").replace("#",""));
      var key = st+'/'+key_url; // Tambahan Untuk Nangkap Direct Pertama
      var kwna = key.split("&title=")[1].replace("#CXWH2MUHZ.html","").replace("confrim","");

      var gambook64 = atob(key.split("/")[1].split("&title=")[0]);
     // var url_gambook = site_url+"/media/get/"+gambook64;
    }
  }
 
  
  
  
 disableInspect();

    // var s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "//cdn.jsdelivr.net/gh/bismillah416/blogging@main/gan/300x250.js";
    // // Use any selector
    // $("#iklan-artikel").append(s);

  if(audir=="on")
  {
      window.setTimeout(function(){  
           direct_url(kwna);
    }, waktu_auto);
  } 

} 

function disableInspect()
{
document.addEventListener('contextmenu', (e) => e.preventDefault());
function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

}

function parseSpintax(text) {
      return text.replace( /{([^{}]+?)}/g, function(match, content) {
        var choices = content.split("|");
        return choices[Math.floor(Math.random() * choices.length)];
      });
    }

function rand_color() {
  const domain = window.location.hostname.length;
  const seed = domain;
  srand(seed);
  const randomNumber = Math.floor(Math.random() * 0xFFFFFF);
  return '#' + randomNumber.toString(16).padStart(6, '0');
}


function srand(seed) {
  // If we're passed a string, condense it down
  // into a number
  if (typeof seed === 'string') {
    str = seed
    seed = 0xFF
    for (var i = 0; i < str.length; i++) {
      seed ^= str.charCodeAt(i)
    }
  }

  return function (max, min) {
    max = max || 1
    min = min || 0
    seed = (seed * 9301 + 49297) % 233280

    return min + (seed / 233280) * (max - min)
  }
}

function generateRandomColor() {
    // Convert the keyword to a numerical value
    const domain = window.location.hostname.length;
    var seed = 0;
    for (var i = 0; i < domain.length; i++) {
        seed += domain.charCodeAt(i);
    }

    // Set the seed for consistent random color generation
    srand(seed);
    // Math.seedrandom

    // Generate random values for red, green, and blue components
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // Convert the RGB values to hexadecimal format
    var redHex = red.toString(16).padStart(2, '0');
    var greenHex = green.toString(16).padStart(2, '0');
    var blueHex = blue.toString(16).padStart(2, '0');

    // Concatenate the hexadecimal values to form the color code
    var color = '#' + redHex + greenHex + blueHex;

    return color;
}

function hitungKata(str) {
  // Menghapus spasi di awal dan akhir string, serta mengganti spasi ganda dengan spasi tunggal
  str = str.trim().replace(/\s+/g, ' ');

  // Jika string kosong setelah penghapusan spasi, kembalikan 0
  if (str === '') {
    return 0;
  }

  // Memisahkan string berdasarkan spasi dan menghitung panjang array hasil pemisahan
  const kataArray = str.split(' ');

  return kataArray.length;
}

function getContent(kw,tema,batas="")
        {
                  $('#nav-ban').attr('style','background-color:'+rand_color());
                  // document.getElementsByClassName("navbar navbar-expand-lg navbar-dark").style.backgroundColor = generateRandomColor();
                  document.getElementsByClassName("navbar-brand")[0].innerHTML=host.toUpperCase().replaceAll("."," ")+"";
                  var title_bersih = kwna.replaceAll("-"," ").replaceAll("%27","'").replace("confrim","");
                  // $('#title-detail').html("Detail Gallery "+title_bersih);
                  //$('#title-detail').html("");
                  $('#isi-galery').remove();
                  var img_head = encode_img('https://tse1.mm.bing.net/th?q='+kwna);
                  var buttonna = 'Read More';
                  var kwEncode = encodeURIComponent(kw);
                  var kwDecode = ucword(decodeURI(title_bersih));
                     if(type=="b")
                     {
                         // img_head = encode_img(gambook64);
                         if(gambook64==undefined)
                         {
                           gambook64 = encode_img('https://tse1.mm.bing.net/th?q='+kwna+'');
                         }
                         img_head = gambook64;
                        buttonna = 'Read Book Now';
                     }
                      else if(type=="m")
                     {
                         img_head = encode_img('https://tse1.mm.bing.net/th?q='+kwna+'-poster');
                     }

                     document.title = "Read "+kwDecode+" Online";
                      var spintaxText = `{stands out|shines|distinguishes itself|stands apart|is notable|is remarkable|emerges} {as|like|in the capacity of|in the role of|as if|in the same manner as} {one of|among} {the premier|the top|the foremost} {outcomes|results|consequences} {tailored specifically for|customized for|designed for|crafted for|tailored for|specially created for} ${postTitle}. {This platform|This site|This website|The platform|The site|The website|This online platform|This online site|This online website} {meticulously curates|carefully selects|painstakingly curates|meticulously selects|scrupulously curates|thoroughly curates} a {plethora|wide range|variety} of {informative|useful} {content|material|information|data|text|articles|resources}, {meticulously selected|carefully chosen} {for its|due to its|because of its|owing to its|on account of its|for the sake of its} {relevance|pertinence} {and|as well as|along with|in addition to|plus|together with} {reliability|trustworthiness}, {serving as|acting as} an {invaluable|indispensable|essential} {resource for your|asset to your|tool for your|aid for your|assistance for your|help for your} {reference needs|informational needs}. {Please|Kindly|Please kindly|If you could|Would you kindly|We kindly ask|We kindly request} {feel at liberty|feel free} to {preserve|save} {and|as well as|along with|in addition to|plus|together with} {bookmark|mark} ${title_bersih} to {facilitate|enable} {seamless|smooth} {access for|entry to|availability for|use for|usage for|utilization for} {future utilization|later use}<br/><br/>

                        {Information|Data} ${title_bersih} on a {website|webpage} refers to the {content|details} {provided|shared} with {users|visitors}. This {information|data} can {include|consist of} {text|written content}, {images|pictures}, {videos|clips}, and {other media|different types of media}. The {purpose|goal} of {providing|offering} this {information|data} is to {inform|educate} or {engage|interact with} the {audience|viewers}.<br/><br/>

                        For ${title_bersih} {instance|example}, a {website|site} about {health|wellness} <a href="">${title_bersih}</a> might {share|provide} {information|details} on {healthy eating|nutritional advice} and {exercise|physical activities}. A {business|company} {website|site} might {offer|present} {information|details} about its {services|products} and {how to contact|ways to reach} the {company|business}.<br/>

                        {Accurate|Correct} and {up-to-date|current} {information|data} is {crucial|essential} for {building|establishing} {trust|confidence} with {users|visitors}. It {helps|aids} {them|users} {make informed decisions|make knowledgeable choices}. {Moreover|Additionally}, the {layout|format} and {presentation|display} of {information|data} {play|have} a {vital|key} {role|part} in {how easily|how quickly} {users|visitors} can {find|locate} and {understand|comprehend} the {content|information}.`;
                    var hasilSpintax = parseSpintax(spintaxText);
                  // const sec = document.getElementsByClassName("main section")[0];

                  document.getElementById("isi-artikel").innerHTML += `
                <div style="background-color: white;color: black;padding: 20px 20px 10px 20px;margin-bottom: 20px;">
                <h1 style="text-align: center;text-transform: uppercase;">${title_bersih}</h1>
                <br/><center>
                <img src="${img_head}" style="padding: 10px;display: block;margin-left: auto;margin-right: auto;">
                <br/>
                 <a class="btn btn-danger" onclick="direct_url('${title_bersih}');" href="#" style="background-color: #4CAF50;border: none;color: white; padding: 15px 32px;display: inline-block;font-size: 16px;">${buttonna}</a></center><br/>
              <h3><a href="${baseUrl}?search=${kwEncode}">${kwDecode}</a></h3>
              <p align="justify">
                <b>${title_bersih}</b> ${hasilSpintax}
              </p>
                </div><section id="relatedImage" style="--width-card: 440px;margin-top: -40px;"></section><br/><section id="relatedImageSub" style="margin-top: -70px;"></section><div id="gallery-js" style="padding-top: 0px;"></div>`;



            $.ajax({
                 url: "https://suggestqueries.google.com/complete/search?hl=en&client=firefox&q="+kw.replaceAll('-',' '),
                 type: 'GET',
                  dataType: 'jsonp',
                  cors: true ,
                  contentType:'application/json',
                  secure: true,
                  headers: {
                    'Access-Control-Allow-Origin': '*',
                  },
                  beforeSend: function (xhr) {
                    xhr.setRequestHeader ("Authorization", "Basic " + btoa(""));
                  },
                 success:function(data)
                 {
                    // console.log(data[1]);
                  var out = data[1];
                  var tags = data[1];  
                console.log("Tagsna "+tags);
                // $('#img-widget').attr('src','https://tse1.mm.bing.net/th?q='+tags[2]);
                if(tags.length != 0)
                {


                            for (itag = 0; itag < tags.length; itag++) 
                            {
                                var kwtags = tags[itag];
                               
                                if(kwtags!=0)
                                {
                                  var kwEncodetags = kwtags.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
                                 var kwDecodetags = ucword(decodeURI(kwtags));
                                  document.getElementById("tags").innerHTML += ''
                                     +'<a alt="'+kwDecodetags+'" href="/'+kwEncodetags+'.html" class="btn btn-primary" style="margin: 2px;background-color: #8f8f8f;">'+kwDecodetags+'</a>'
                                  +'';

                                  if(itag==2)
                                  {
                                    
                                    // $('#img-widget').attr('src','https://tse1.mm.bing.net/th?q='+kwEncodetags);                                    
                                    // $('#desk-widget').html('"'+kwDecodetags+'" is popular blog today for reading and searching');
                                    $('[class="card-img img-fluid rounded-0 my-3 img-responsive"]').attr('src','https://tse1.mm.bing.net/th?q='+kwEncodetags);
                                    $('[class="card-text text-muted mb-5"]').html('"'+kwDecodetags+'" is popular blog today for reading and searching');
                                    $('[class="btn btn-warning text-dark py-1"]').attr('href','/'+kwEncodetags+'.html');
                                    // console.log("masuk sini bang");
                                  }

                                }


                            }
                }

                  


                  if(batas=="")
                  {
                    batas = out.length;
                  }           
                  for (i = 1; i <= batas; i++) 
                  {
                               var kw = out[i];
                              // console.log(kw);
                              // var kwEncode = encodeURIComponent(kw);
                              var extract = "";
                              // var kwEncode = encodeURIComponent(kw);
                              var kwEncode = kw.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
                              var kwDecode = ucword(decodeURI(kw));
                              var save = kwEncode;
                              var img = encode_img('https://tse1.mm.bing.net/th?q='+kwEncode);
                              var img_save = img+"&s="+save;
                             
                              // alert(tema);
                            
                              if(tema=='1')
                              {
                                   document.getElementById("tambahan-box").innerHTML += ''
                                        +'<li class="list-group-item" style="margin-bottom: 5px;">'
                                         +'<div class="media align-items-lg-center flex-column flex-lg-row p-3">'
                                          +'<div class="media-body order-2 order-lg-1">'
                                            +'<a onclick="direct_url('+"'"+kw+"'"+');" href="#" alt="Visit '+kwDecode+'" style="text-decoration:none;"><h2 class="mt-0 font-weight-bold mb-2">'+kwDecode+'</h2></a>'
                                            +'<p class="font-italic text-muted mb-0 small"><i id="desk_'+i+'"></i> <b>'+kwDecode+'</b> is one of best result for'+kwDecode+'. Everything in here is for references perpose only. Feel free to save and bookmark <b>'+kwDecode+'</b></p>'
                                            +'<div class="d-flex align-items-center justify-content-between mt-1">'
                                              +'<h6 class="font-weight-bold my-2">title: <i>'+kwEncode+'</i></h6>'
                                            +'</div>'
                                          +'</div>'
                                          +'<img src="'+img+'" alt="'+kwDecode+'" width="200" class="ml-lg-5 order-1 order-lg-2" style="object-fit: cover;width: 180px;height: 120px;">'
                                          +'<a onclick="direct_url('+"'"+kw+"'"+');" href="#" alt="Visit '+kwDecode+'" class="btn btn-success" style="background-color:'+bgcolor+'; border-color:'+bgcolor+'; position: absolute; margin-top: 80px; right: 40px;">'+buttonna+'</a>'
                                        +'</div>'
                                      +'</li>'
                                      +''
                              }
                               else
                              {
                                 document.getElementById("tambahan-box").innerHTML += ''
                               +'<div style="background-color: white;color: black;padding: 20px 20px 10px 20px;margin-bottom: 20px;">'
                                                        +'<aside>'
                                                      +'<center>'
                                                          +'<img alt="'+kwDecode+'" src="'+img+'" width="320" height="320" style="width:340px;height:auto;margin-right: 8px;margin-bottom: 8px;" />'
                                                          +'<br/>'
                                                        +'<a class="btn btn-danger" target="_blank" href="'+img_save+'" style="background-color: '+bgcolor+';border: none;color: white; padding: 15px 32px;display: inline-block;font-size: 16px;"><i class="fa fa-download"></i> Save Image</a>'
                                                      +'</center>'
                                                      +'<br/>'
                                                          +'<h2 style="text-transform: capitalize;"><a href="/'+kwEncode+'.html" style="color:blue;">'+kwDecode+'</a></h2>'
                                                          +'<small>title: <i>'+kwEncode+'</i></small>'
                                                          +'<p align="justify">'
                                                           +'<b>'+kwDecode+'</b> is one of best result for '+kwDecode+'. Everything in here is for references perpose only. Feel free to save and bookmark <b>'+kwDecode+'</b>, <i id="desk_'+i+'"></i> <br/><p align="right"><br/><a class="btn btn-danger"  href="/'+kwEncode+'.html" style="border: none;color: white; padding: 15px 32px;display: inline-block;font-size: 16px;">'+buttonna+'</a></p>'
                                                          +'</p>'
                                                      +'</aside>'
                                                  +'</div>'
                                                 +'';
                              }



        var spintaxText = "{stands out|shines|distinguishes itself|stands apart|is notable|is remarkable|emerges} {as|like|in the capacity of|in the role of|as if|in the same manner as} {one of|among} {the premier|the top|the foremost} {outcomes|results|consequences} {tailored specifically for|customized for|designed for|crafted for|tailored for|specially created for} "+kw+". {This platform|This site|This website|The platform|The site|The website|This online platform|This online site|This online website} {meticulously curates|carefully selects|painstakingly curates|meticulously selects|scrupulously curates|thoroughly curates} a {plethora|wide range|variety} of {informative|useful} {content|material|information|data|text|articles|resources}, {meticulously selected|carefully chosen} {for its|due to its|because of its|owing to its|on account of its|for the sake of its} {relevance|pertinence} {and|as well as|along with|in addition to|plus|together with} {reliability|trustworthiness}, {serving as|acting as} an {invaluable|indispensable|essential} {resource for your|asset to your|tool for your|aid for your|assistance for your|help for your} {reference needs|informational needs}. {Please|Kindly|Please kindly|If you could|Would you kindly|We kindly ask|We kindly request} {feel at liberty|feel free} to {preserve|save} {and|as well as|along with|in addition to|plus|together with} {bookmark|mark} "+kw+" to {facilitate|enable} {seamless|smooth} {access for|entry to|availability for|use for|usage for|utilization for} {future utilization|later use}";
        var hasilSpintax = parseSpintax(spintaxText);
        var kwEncodeurl = kw.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
        var img_ori_artikel = encode_img("https://tse1.mm.bing.net/th?q="+kwEncode);
        var url = "/"+kwEncodeurl+".html";
        document.getElementById("relatedImage").innerHTML += `
        <style>section {     display: flex;     flex-wrap: wrap;     justify-content: var(--justify-important); } article aside{background:var(--color-secondary-accent);border-left:4px solid var(--color-secondary);padding:.01rem .8rem} section{display:flex;flex-wrap:wrap;justify-content:var(--justify-important)} section aside{border:1px solid var(--color-bg-secondary);border-radius:var(--border-radius);box-shadow:var(--box-shadow) var(--color-shadow);margin:1rem;padding:1.25rem;width:var(--width-card)} section aside:hover{box-shadow:var(--box-shadow) var(--color-bg-secondary)} section aside img{max-width:100%}[hidden]{display:none}</style>
        `;

       
if(i<=2){
        document.getElementById("relatedImage").innerHTML += `                 
          <aside id="in-gallery">
                                  <a href="#confrim" onclick="get_detail_image('${img_ori_artikel}','${kwEncode}')"><img alt="${kwDecode}" src="https://tse1.mm.bing.net/th?q=${kwEncode}" width="320" height="320" style="object-fit: cover;width: 439px;height: 280px;margin-bottom: 10px;" /></a>
                                  <br/>
                              <center>
                              </center>
                              <br/>
                                  <h3><a href="${url}">${kwDecode}</a></h3>
                                  <p align="justify">
                                    <b>${kw}</b> ${hasilSpintax}
                                  </p>
         </aside>`;

  } 
if(i==3){
        document.getElementById("relatedImageSub").innerHTML += `                  
          <aside id="in-gallery">
                                  <center><a href="#confrim" onclick="get_detail_image('${img_ori_artikel}','${kwEncode}')"><img alt="${kwDecode}" src="https://tse1.mm.bing.net/th?q=${kwEncode}" style="object-fit: cover;width: 850px;height: 380px;margin-bottom: 10px;" /></a></center>
                                  <br/>
                              <center>
                              </center>
                              <br/>
                                  <h3><a href="${url}">${kwDecode}</a></h3>
                                  <p align="justify">
                                    <b>${kw}</b> ${hasilSpintax}
                                  </p>
         </aside>`;

  } 



                  }





                          

                
                 }
              });

  document.getElementById('gallery-js').innerHTML+=`

                    <style>
                        .zoom {
                          padding: 5px;
                          transition: transform .2s; /* Animation */
                          margin: 0 auto;
                        }
                        .zoom:hover {
                          transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
                        }
                        </style>
                        <div class="container" style="background-color: #c1c5c4;color: black;padding: 20px 20px 10px 20px;margin-bottom: 20px;">
                          <h2 style="text-transform: capitalize;" id="title-detail-js">Detail Gallery ${title_bersih} :</h2>
                        <div id="page-na-js">
                          <div class="row" id="in-gallery">
                           
                             </div>
                          </div>
                         </div>                      
               

  `;

// list_movie('popular');
}


function getContentBlogspot(kw,tema,batas="")
        {
                  $('#nav-ban').attr('style','background-color:'+rand_color());
                  // document.getElementsByClassName("navbar navbar-expand-lg navbar-dark").style.backgroundColor = generateRandomColor();
                  document.getElementsByClassName("navbar-brand")[0].innerHTML=host.toUpperCase().replaceAll("."," ")+"";
                  var title_bersih = kwnablogspot.replaceAll("-"," ").replaceAll("%27","'").replace("confrim","");
                  // $('#title-detail').html("Detail Gallery "+title_bersih);
                  //$('#title-detail').html("");
                  $('#isi-galery').remove();
                  var img_head = encode_img('https://tse1.mm.bing.net/th?q='+kwnablogspot);
                  var buttonna = 'Read More';
                  var kwEncode = encodeURIComponent(kw);
                  var kwDecode = ucword(decodeURI(title_bersih));
                     if(type=="b")
                     {
                         // img_head = encode_img(gambook64);
                         if(gambook64==undefined)
                         {
                           gambook64 = encode_img('https://tse1.mm.bing.net/th?q='+kwnablogspot+'');
                         }
                         img_head = gambook64;
                        buttonna = 'Read Book Now';
                     }
                      else if(type=="m")
                     {
                         img_head = encode_img('https://tse1.mm.bing.net/th?q='+kwnablogspot+'-poster');
                     }

                     document.title = "Read "+kwDecode+" Online";
                      var spintaxText = `{stands out|shines|distinguishes itself|stands apart|is notable|is remarkable|emerges} {as|like|in the capacity of|in the role of|as if|in the same manner as} {one of|among} {the premier|the top|the foremost} {outcomes|results|consequences} {tailored specifically for|customized for|designed for|crafted for|tailored for|specially created for} ${postTitle}. {This platform|This site|This website|The platform|The site|The website|This online platform|This online site|This online website} {meticulously curates|carefully selects|painstakingly curates|meticulously selects|scrupulously curates|thoroughly curates} a {plethora|wide range|variety} of {informative|useful} {content|material|information|data|text|articles|resources}, {meticulously selected|carefully chosen} {for its|due to its|because of its|owing to its|on account of its|for the sake of its} {relevance|pertinence} {and|as well as|along with|in addition to|plus|together with} {reliability|trustworthiness}, {serving as|acting as} an {invaluable|indispensable|essential} {resource for your|asset to your|tool for your|aid for your|assistance for your|help for your} {reference needs|informational needs}. {Please|Kindly|Please kindly|If you could|Would you kindly|We kindly ask|We kindly request} {feel at liberty|feel free} to {preserve|save} {and|as well as|along with|in addition to|plus|together with} {bookmark|mark} ${title_bersih} to {facilitate|enable} {seamless|smooth} {access for|entry to|availability for|use for|usage for|utilization for} {future utilization|later use}<br/><br/>

                        {Information|Data} ${title_bersih} on a {website|webpage} refers to the {content|details} {provided|shared} with {users|visitors}. This {information|data} can {include|consist of} {text|written content}, {images|pictures}, {videos|clips}, and {other media|different types of media}. The {purpose|goal} of {providing|offering} this {information|data} is to {inform|educate} or {engage|interact with} the {audience|viewers}.<br/><br/>

                        For ${title_bersih} {instance|example}, a {website|site} about {health|wellness} <a href="">${title_bersih}</a> might {share|provide} {information|details} on {healthy eating|nutritional advice} and {exercise|physical activities}. A {business|company} {website|site} might {offer|present} {information|details} about its {services|products} and {how to contact|ways to reach} the {company|business}.<br/>

                        {Accurate|Correct} and {up-to-date|current} {information|data} is {crucial|essential} for {building|establishing} {trust|confidence} with {users|visitors}. It {helps|aids} {them|users} {make informed decisions|make knowledgeable choices}. {Moreover|Additionally}, the {layout|format} and {presentation|display} of {information|data} {play|have} a {vital|key} {role|part} in {how easily|how quickly} {users|visitors} can {find|locate} and {understand|comprehend} the {content|information}.`;
                    var hasilSpintax = parseSpintax(spintaxText);
                  // const sec = document.getElementsByClassName("main section")[0];

                  document.getElementById("isi-artikel-blog").innerHTML += `
                <div style="background-color: white;color: black;padding: 0px 0px 20px 0px;;margin-bottom: 20px;">
                <h1 style="text-align: center;text-transform: uppercase;">${title_bersih}</h1>
                <br/><center>
                <img src="${img_head}" style="padding: 10px;display: block;margin-left: auto;margin-right: auto;">
                <br/>
                 <a class="btn btn-danger" onclick="direct_url('${title_bersih}');" href="#" style="background-color: #4CAF50;border: none;color: white; padding: 15px 32px;display: inline-block;font-size: 16px;">${buttonna}</a></center><br/>
              <h3><a href="${baseUrl}?search=${kwEncode}">${kwDecode}</a></h3>
              <p align="justify">
                <b>${title_bersih}</b> ${hasilSpintax}
              </p>
                </div><section id="relatedImage-blog" style="--width-card: 440px;margin-top: -40px;"></section><br/><section id="relatedImageSub" style="margin-top: -70px;"></section><div id="gallery-js" style="padding-top: 0px;"></div>`;



            $.ajax({
                 url: "https://suggestqueries.google.com/complete/search?hl=en&client=firefox&q="+kw.replaceAll('-',' '),
                 type: 'GET',
                  dataType: 'jsonp',
                  cors: true ,
                  contentType:'application/json',
                  secure: true,
                  headers: {
                    'Access-Control-Allow-Origin': '*',
                  },
                  beforeSend: function (xhr) {
                    xhr.setRequestHeader ("Authorization", "Basic " + btoa(""));
                  },
                 success:function(data)
                 {
                    // console.log(data[1]);
                  var out = data[1];
                  var tags = data[1];  
                console.log("Tagsna "+tags);
                // $('#img-widget').attr('src','https://tse1.mm.bing.net/th?q='+tags[2]);
                if(tags.length != 0)
                {


                            for (itag = 0; itag < tags.length; itag++) 
                            {
                                var kwtags = tags[itag];
                               
                                if(kwtags!=0)
                                {
                                  var kwEncodetags = kwtags.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
                                 var kwDecodetags = ucword(decodeURI(kwtags));
                                  document.getElementById("tags-blog").innerHTML += ''
                                     +'<a alt="'+kwDecodetags+'" href="/'+kwEncodetags+'.html" class="btn btn-primary" style="margin: 2px;background-color: #8f8f8f;">'+kwDecodetags+'</a>'
                                  +'';

                                  if(itag==2)
                                  {
                                    
                                    // $('#img-widget').attr('src','https://tse1.mm.bing.net/th?q='+kwEncodetags);                                    
                                    // $('#desk-widget').html('"'+kwDecodetags+'" is popular blog today for reading and searching');
                                    $('[class="card-img img-fluid rounded-0 my-3 img-responsive"]').attr('src','https://tse1.mm.bing.net/th?q='+kwEncodetags);
                                    $('[class="card-text text-muted mb-5"]').html('"'+kwDecodetags+'" is popular blog today for reading and searching');
                                    $('[class="btn btn-warning text-dark py-1"]').attr('href','/'+kwEncodetags+'.html');
                                    // console.log("masuk sini bang");
                                  }

                                }


                            }
                }

                  


                  if(batas=="")
                  {
                    batas = out.length;
                  }           
                  for (i = 1; i <= batas; i++) 
                  {
                               var kw = out[i];
                              // console.log(kw);
                              // var kwEncode = encodeURIComponent(kw);
                              var extract = "";
                              // var kwEncode = encodeURIComponent(kw);
                              var kwEncode = kw.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
                              var kwDecode = ucword(decodeURI(kw));
                              var save = kwEncode;
                              var img = encode_img('https://tse1.mm.bing.net/th?q='+kwEncode);
                              var img_save = img+"&s="+save;
                             
                              // alert(tema);
                            
                              if(tema=='1')
                              {
                                   document.getElementById("tambahan-box-blog").innerHTML += ''
                                        +'<li class="list-group-item" style="margin-bottom: 5px;">'
                                         +'<div class="media align-items-lg-center flex-column flex-lg-row p-3">'
                                          +'<div class="media-body order-2 order-lg-1">'
                                            +'<a onclick="direct_url('+"'"+kw+"'"+');" href="#" alt="Visit '+kwDecode+'" style="text-decoration:none;"><h2 class="mt-0 font-weight-bold mb-2">'+kwDecode+'</h2></a>'
                                            +'<p class="font-italic text-muted mb-0 small"><i id="desk_'+i+'"></i> <b>'+kwDecode+'</b> is one of best result for'+kwDecode+'. Everything in here is for references perpose only. Feel free to save and bookmark <b>'+kwDecode+'</b></p>'
                                            +'<div class="d-flex align-items-center justify-content-between mt-1">'
                                              +'<h6 class="font-weight-bold my-2">title: <i>'+kwEncode+'</i></h6>'
                                            +'</div>'
                                          +'</div>'
                                          +'<img src="'+img+'" alt="'+kwDecode+'" width="200" class="ml-lg-5 order-1 order-lg-2" style="object-fit: cover;width: 180px;height: 120px;">'
                                          +'<a onclick="direct_url('+"'"+kw+"'"+');" href="#" alt="Visit '+kwDecode+'" class="btn btn-success" style="background-color:'+bgcolor+'; border-color:'+bgcolor+'; position: absolute; margin-top: 80px; right: 40px;">'+buttonna+'</a>'
                                        +'</div>'
                                      +'</li>'
                                      +''
                              }
                               else
                              {
                                 document.getElementById("tambahan-box-blog").innerHTML += ''
                               +'<div style="background-color: white;color: black;padding: 20px 20px 10px 20px;margin-bottom: 20px;">'
                                                        +'<aside>'
                                                      +'<center>'
                                                          +'<img alt="'+kwDecode+'" src="'+img+'" width="320" height="320" style="width:340px;height:auto;margin-right: 8px;margin-bottom: 8px;" />'
                                                          +'<br/>'
                                                        +'<a class="btn btn-danger" target="_blank" href="'+img_save+'" style="background-color: '+bgcolor+';border: none;color: white; padding: 15px 32px;display: inline-block;font-size: 16px;"><i class="fa fa-download"></i> Save Image</a>'
                                                      +'</center>'
                                                      +'<br/>'
                                                          +'<h2 style="text-transform: capitalize;"><a href="/'+kwEncode+'.html" style="color:blue;">'+kwDecode+'</a></h2>'
                                                          +'<small>title: <i>'+kwEncode+'</i></small>'
                                                          +'<p align="justify">'
                                                           +'<b>'+kwDecode+'</b> is one of best result for '+kwDecode+'. Everything in here is for references perpose only. Feel free to save and bookmark <b>'+kwDecode+'</b>, <i id="desk_'+i+'"></i> <br/><p align="right"><br/><a class="btn btn-danger"  href="/'+kwEncode+'.html" style="border: none;color: white; padding: 15px 32px;display: inline-block;font-size: 16px;">'+buttonna+'</a></p>'
                                                          +'</p>'
                                                      +'</aside>'
                                                  +'</div>'
                                                 +'';
                              }



        var spintaxText = "{stands out|shines|distinguishes itself|stands apart|is notable|is remarkable|emerges} {as|like|in the capacity of|in the role of|as if|in the same manner as} {one of|among} {the premier|the top|the foremost} {outcomes|results|consequences} {tailored specifically for|customized for|designed for|crafted for|tailored for|specially created for} "+kw+". {This platform|This site|This website|The platform|The site|The website|This online platform|This online site|This online website} {meticulously curates|carefully selects|painstakingly curates|meticulously selects|scrupulously curates|thoroughly curates} a {plethora|wide range|variety} of {informative|useful} {content|material|information|data|text|articles|resources}, {meticulously selected|carefully chosen} {for its|due to its|because of its|owing to its|on account of its|for the sake of its} {relevance|pertinence} {and|as well as|along with|in addition to|plus|together with} {reliability|trustworthiness}, {serving as|acting as} an {invaluable|indispensable|essential} {resource for your|asset to your|tool for your|aid for your|assistance for your|help for your} {reference needs|informational needs}. {Please|Kindly|Please kindly|If you could|Would you kindly|We kindly ask|We kindly request} {feel at liberty|feel free} to {preserve|save} {and|as well as|along with|in addition to|plus|together with} {bookmark|mark} "+kw+" to {facilitate|enable} {seamless|smooth} {access for|entry to|availability for|use for|usage for|utilization for} {future utilization|later use}";
        var hasilSpintax = parseSpintax(spintaxText);
        var kwEncodeurl = kw.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
        var img_ori_artikel = encode_img("https://tse1.mm.bing.net/th?q="+kwEncode);
        var url = "/"+kwEncodeurl+".html";
        document.getElementById("relatedImage-blog").innerHTML += `
        <style>section {     display: flex;     flex-wrap: wrap;     justify-content: var(--justify-important); } article aside{background:var(--color-secondary-accent);border-left:4px solid var(--color-secondary);padding:.01rem .8rem} section{display:flex;flex-wrap:wrap;justify-content:var(--justify-important)} section aside{border:1px solid var(--color-bg-secondary);border-radius:var(--border-radius);box-shadow:var(--box-shadow) var(--color-shadow);margin:1rem;padding:1.25rem;width:var(--width-card)} section aside:hover{box-shadow:var(--box-shadow) var(--color-bg-secondary)} section aside img{max-width:100%}[hidden]{display:none}</style>
        `;

       
if(i<=2){
        document.getElementById("relatedImage-blog").innerHTML += `                 
          <aside id="in-gallery">
                                  <a href="#confrim" onclick="get_detail_image('${img_ori_artikel}','${kwEncode}')"><img alt="${kwDecode}" src="https://tse1.mm.bing.net/th?q=${kwEncode}" width="320" height="320" style="object-fit: cover;width: 439px;height: 280px;margin-bottom: 10px;" /></a>
                                  <br/>
                              <center>
                              </center>
                              <br/>
                                  <h3><a href="${url}">${kwDecode}</a></h3>
                                  <p align="justify">
                                    <b>${kw}</b> ${hasilSpintax}
                                  </p>
         </aside>`;

  } 
if(i==3){
        document.getElementById("relatedImageSub-blog").innerHTML += `                  
          <aside id="in-gallery">
                                  <center><a href="#confrim" onclick="get_detail_image('${img_ori_artikel}','${kwEncode}')"><img alt="${kwDecode}" src="https://tse1.mm.bing.net/th?q=${kwEncode}" style="object-fit: cover;width: 850px;height: 380px;margin-bottom: 10px;" /></a></center>
                                  <br/>
                              <center>
                              </center>
                              <br/>
                                  <h3><a href="${url}">${kwDecode}</a></h3>
                                  <p align="justify">
                                    <b>${kw}</b> ${hasilSpintax}
                                  </p>
         </aside>`;

  } 



                  }





                          

                
                 }
              });

  document.getElementById('gallery-js-blog').innerHTML+=`

                    <style>
                        .zoom {
                          padding: 5px;
                          transition: transform .2s; /* Animation */
                          margin: 0 auto;
                        }
                        .zoom:hover {
                          transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
                        }
                        </style>
                        <div class="container" style="background-color: #c1c5c4;color: black;padding: 20px 20px 10px 20px;margin-bottom: 20px;">
                          <h2 style="text-transform: capitalize;" id="title-detail-js">Detail Gallery ${title_bersih} :</h2>
                        <div id="page-na-js">
                          <div class="row" id="in-gallery">
                           
                             </div>
                          </div>
                         </div>                      
               

  `;

// list_movie('popular');
}


function list_movie(keyword){
   var buatSlide = document.getElementById("popularmovie");
   var judulSeoMovie = "";
   var movielist = "";
 $.ajax({
  url: 'https://api.themoviedb.org/3/movie/'+keyword,
  type: "GET",
  data: {"api_key":'37cbf72f710c334975e8796b1022b176', 'page':'1'},
  success: function(respon)
  {
    document.getElementById("showbiz-now").innerHTML +='<br/>';
   for(a = 0; a <= 5; a++)
   {
   judulSeoMovie =  respon.results[a].title.split(' ').join('-');
   judul_movie = "Watch "+respon.results[a].title+" ("+respon.results[a].release_date.substring(0,4)+")";
   img_poster = "http://image.tmdb.org/t/p/w185/"+respon.results[a].poster_path;
   rnd_minute = Math.floor(Math.random() * 59);
   overview = respon.results[a].overview.substring(0,90);
   u_array = ["mgeters.pages.dev","movieups.pages.dev","movieups-play.pages.dev","playon-movies.pages.dev","moviebox-office.pages.dev"];
   randomNilai = Math.floor(Math.random() * u_array.length) ;
   url_movie  = "https://"+u_array[randomNilai]+"/en/movie/"+respon.results[a].id+"/"+judulSeoMovie;


     document.getElementById("showbiz-now").innerHTML += `
        <div class="row no-gutters">
            <div class="col-md-4">
              <a href="${url_movie}"><img src="${img_poster}" class="card-img" alt="${judul_movie}"/></a>
            </div>
            <div class="col-md-8">

                <a href="${url_movie}"><h6 class="card-title">${judul_movie}</h6></a>
                <p>${overview}... </p>
                <p class="card-text"><small class="text-muted">Last updated ${rnd_minute} mins ago</small></p>

            </div>
        </div>
        <hr/>
     `;
     // +'<li class="list-group-item" style="padding-bottom: 1px;">'
;


   }
    
   
   
   // $('#popularmovie').append(
   // ''+movielist
   // );
   
  }
 });
}


 function getToday(kw)
{
           $.ajax({    
                 url: "https://suggestqueries.google.com/complete/search?hl=en&client=firefox&q="+kw.replaceAll('-',' '),
                  type: 'GET',
                  dataType: 'jsonp',
                  cors: true ,
                  contentType:'application/json',
                  secure: true,
                  headers: {
                    'Access-Control-Allow-Origin': '*',
                  },
                  beforeSend: function (xhr) {
                    xhr.setRequestHeader ("Authorization", "Basic " + btoa(""));
                  },
                 success:function(data)
                 {

                     var out =  data[1]; 
                     console.log(out);
                if(out.length != 0)
                {
                    for (i = 0; i <=out.length; i++) 
                     {
                            if(i<5)
                            {
                             var kw = out[i];
                             var kwEncode = kw.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
                             var kwDecode = ucword(decodeURI(kw));
                              document.getElementById("list-today").innerHTML += ''
                                 +'<li class="list-group-item" style="padding-bottom: 1px;"><a href="/'+kwEncode+'.html" alt="'+kwDecode+'" >'+kwDecode+'</a><br/></li>'
                              +'';


                            }

                      }
                    }


                 }
              });


        }



function direct_url(kw)
{
  url_run = url;
  if(type=="a")
  {  
    if(buat_gc=='yes')
    {
      kw = kw.replace(/[^a-zA-Z0-9]+/g, '-')+'.html';
    }
    url_run =  domain+prefix_artikel+kw;
  }
   else if(type=="m")
  {
    var title_dr = encodeURIComponent(kw);
    var url_fix = domain+'/'+type_url+'/02110/'+title_dr+'.html';
        url_run = url_fix;
  }else if(type=="b")
  {
    url_run = parseURLBook(key);
  }

  // return url_run;
    openTabDirect(url_run);
   
    // auto_direct(directads);  // auto direct link

}

 function encode_img(url, save = "", tambahan="") {
                        var path_img = site_url+"/media/get/";
                        if(tambahan!="")
                        {
                            url = url+''+tambahan;
                        }
                        var data_fix = encode_b64(url);
                        var command_save = "";
                        if (save !== "") {
                            command_save = "&s=" + save;
                        }
                        return path_img + '' + data_fix + '.jpg' + command_save;
                    }

function encode_b64(str) {
                        const skey = "KeyRahasiaGnjr99";
                         let result = '';
                        for (let i = 0; i < str.length; i++) {
                            result += String.fromCharCode(str.charCodeAt(i) ^ skey.charCodeAt(i % skey.length));
                        }
                        return btoa(result).replaceAll("=","").replaceAll("/","08092");
                        
                    }


  function ucword(str)
                    {
                        var huruf = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                        return letter.toUpperCase();});
                        return huruf;
                    }


  function openTabDirect(url){
    window.open(url, "_blank");
    }

function auto_direct(url)
{
    // openTabDirect(currentUrl);
    var meta = document.createElement('meta');
    meta.name = "referrer";
    meta.content = "no-referrer";
    document.getElementsByTagName('head')[0].appendChild(meta);
    window.location = url;
    

}


function parseURLBook(kw)
{
    
  var sc = kw;
  // var baseimg = "https://tse1.mm.bing.net/th?q="+kw+" cover";
  // var imgU = encode_img(baseimg);
 
  var u_page = "https://abookstorage.com/d/"+sc;
  // var u_page = "https://abookstorage.com/d/"+st+"/"+imgU+"&title="+sc+"#CXWH2MUHZ.html"
  return u_page;
  
}

function parseURL(url) {
var parser = window.document.createElement('a'),
 searchObject = {},
 queries, split, i;
    parser.href = url;
    queries = parser.search.replace(/^\?/, '').split('&');
    for( i = 0; i < queries.length; i++ ) {
  split = queries[i].split('=');
  searchObject[split[0]] = split[1];
    }
    return {
  protocol: parser.protocol,
  host: parser.host,
  hostname: parser.hostname,
  port: parser.port,
  pathname: parser.pathname,
  search: parser.search,
  searchObject: searchObject,
  hash: parser.hash
    };
}
function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}




 async function loadData(kw) {

             // alert(kw);
            const url = site_url+'/fatch/'+kw.replaceAll("-"," ");
            // alert(url);
            const response = await fetch(url);                
            const data = await response.json();
            const jsonData = data.contents ? JSON.parse(data.contents) : data;

                                $('#page-na-js').pagination({ // you call the plugin
                                  dataSource: jsonData.data, // pass all the data
                                  pageSize: 8, // put how many items per page you want
                                  callback: function(data, pagination) {
                                      // data will be chunk of your data (json.Product) per page
                                      // that you need to display
                                      var wrapper = $('#page-na-js .row').empty();
                                      $.each(data, function (i, f) {
                                        // var img_little = f.img;
                                        var kwEncode = f.title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
                                        var img_little = encode_img(f.img,'','?w=194&h=238&c=7&r=0&o=5&pid=1.7');
                                        var img_ori = encode_img(f.img);
                                        var save = title_save+"-"+kwEncode;
                                        var img_save = img_ori+"&s="+save;

                                         $('#page-na-js .row').append(
                                          ''
                                          // +'<ul><li>Data : ' + f.img + ' '+f.title+'</li></ul>'
                                          +'<div class="col-6 col-md-3">'
                                            +'<div class="thumbnail zoom">'
                                            +'<a href="#confrim" onclick="get_detail_image('+"'"+img_ori+"','"+kwEncode+"'"+')"><img src="'+img_little+'" height="238" width="194" class="img-responsive"></a>'
                                            +'</div>'
                                          +'</div>'
                                          );
                                      });
                                    }
                                   }); 
        }

function closeModal() {
  $('#confirm').modal('show');
  // location.reload();
  const queryString = window.location.href;
  url = queryString.replace("#confrim","");
  window.location.replace(url);


}

function get_detail_image(img_ori,title)
                {
                    // $('#confirm').modal('show');
                    $('#confirm').modal({backdrop: 'static', keyboard: false});
                     
                    $('#image_detail').attr('src',img_ori);
                    var kwEncode = title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-').replace(/[0-9]/g, '');
                    img_save = img_ori+"&s="+title_save+"-"+kwEncode;
                    $('#title-img').html(ucword(title).replace(/[^a-zA-Z0-9]+/g, ' ').replace(/[0-9]/g, ''));
                    $('#save-img-gallery').attr('href',img_save);
                    $('#confirm').modal('show');
                    // auto_direct(directads);
                    // openPopunder(directads)
                }
