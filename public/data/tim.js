 function tim_tukang_ngoding() {
           var myObj, i, j, x = "";
            myObj = {
                "name":"tim",
                "data": [
                    {"id":"hariririski.html","name":"Hariririski","foto":"images/tim/hariririski.png","skill":"Developer"},
                    {"id":"yusran.html","name":"Teuku Yusransyah Tandi","foto":"images/tim/hariririski.png","skill":"Developer"},
                    {"id":"surya.html","name":"Surya Darma Putra","foto":"images/tim/hariririski.png","skill":"Developer"}
                ]
            }
            for (i in myObj.data) {
              x+= "<div class='freelancer'>"+
      						"<div class='freelancer-overview'>"+
      							"<div class='freelancer-overview-inner'>"+
      								"<span class='bookmark-icon'></span>"+
      									"<div class='freelancer-avatar'>"+
      									"<div class='verified-badge'></div>"+
      									"<a href='"+myObj.data[i].id+"'><img src='"+myObj.data[i].foto+"' width='10px'></a>"+
      								"</div>"+

      								"<div class='freelancer-name'>"+
      									"<h4><a href='"+myObj.data[i].id+"'>"+myObj.data[i].name+"</a></h4>"+
      									"<span>"+myObj.data[i].skill+"</span>"+
      								"</div>"+

      								"<div class='freelancer-rating'>"+
      									"<div class='star-rating' data-rating='5.0'></div>"+
      								"</div>"+
      							"</div>"+
      						"</div>"+

      						"<div class='freelancer-details'>"+
      								"<a href='"+myObj.data[i].id+"' class='button button-sliding-icon ripple-effect'>View Profile <i class='icon-material-outline-arrow-right-alt'></i></a>"+
      						"</div>"+
      					"</div>";
            	document.write(x);
              x="";
            }
         };
