// function getApi(){
//     var xhttp = new XMLHttpRequest;
//     xhttp.onreadystatechange = function(){
//         if(this.readyState ==4&&this.status ==200){
//             var element = this.responseText;
//             var data = JSON.parse(element);
//             console.log(data);
//         }
//     }
//     xhttp.open("GET","https://jsonplaceholder.typicode.com/photos",true);
//     xhttp.send();
// }



// function getApi(){
//     fetch('https://jsonplaceholder.typicode.com/photos')
// .then (function(element){
// return element.json()
// })
// .then(function(data){
//     console.log(data);

// })
// }
// ----------------------------------------------------





// async function getApi(){
//     var element = await fetch('https://jsonplaceholder.typicode.com/photos');
//     var data = await element.json();
//     console.log(data);
// }



async function getApi(){ 
    var element = await fetch ("https://jsonplaceholder.typicode.com/photos")
    var data  = await element.json();
    var myText = "";
    for(var i=0 ; i<data.length; i++){

      
     var cartoona = `
    <div class="col-md-4 mb-4 text-center">
             <img src="${data[i].url}" class= 'img-fluid'>
                    <h2> ${ data[i].title}</h2>
                     <h3>${data[i].id}</h3>
                     
    
    
            </div>`;
            myText = myText + cartoona;
    }

    document.querySelector(".test").innerHTML = myText;
    }
    // document.querySelector("test.img").?src = data[0].url;
//     document.querySelector("test.img").innerHTML = data[2].id;

// }
