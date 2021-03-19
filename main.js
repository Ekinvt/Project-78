var images=[
    "https://thumbs.dreamstime.com/b/cartoon-happy-family-reading-book-illustration-139041623.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNe3WicsSlb1j4s9S0Jt9xxHQwITviD2xDA&usqp=CAU",
    "https://www.pngitem.com/pimgs/m/157-1576261_free-png-chef-mothers-day-transparent-mom-clip.png",
    "https://webstockreview.net/images/clap-clipart-boy-8.png"
    ];
    var para=["My Family","Dr Mahendra Pal","Dr Sunita Mohan","Mst Ekin Pal"
  
      ];
    var i= 0;
    function nextslide() {
      if(i==4)
        {
          i=0;
        }
      
     document.getElementById("Book").src=images[i];
     
      document.getElementById("675").innerHTML=para[i];
      i++;
    }