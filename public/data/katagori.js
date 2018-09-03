 function katagori() {
           var myObj, i, j, x = "";
            myObj = {
                "name":"tim",
                "data": [
                  {"name":"Web Developer","foto":"images/katagori/developer.jpg"},
                  {"name":"Wordpress","foto":"images/katagori/wordpress.jpg"},
                  {"name":"Joomla","foto":"images/katagori/joomla.png"},
                  {"name":"Ionic","foto":"images/katagori/ionic.jpeg"}
                ]
            }
            for (i in myObj.data) {
                x += "<div class='col-xl-3 col-md-6'>"+
                	"<a href='#' class='photo-box small' data-background-image='" + myObj.data[i].foto + "'>"+
                		"<div class='photo-box-content'>"+
                			"<h3>" + myObj.data[i].name + "</h3>"+

              		"</div>"+
              	"</a>"+
              "</div>";
            	document.write(x);
              x="";
            }
         };
