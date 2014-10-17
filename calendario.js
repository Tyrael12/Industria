var t = document.getElementsByTagName('td');
var inputDay1= document.getElementById('checkin');
var inputDay2= document.getElementById('checkout');


    for (i=0; i<t.length; i++){
      t[i].onclick = addElement;

};

function addElement(e){

      
      var text=document.createTextNode(e.target.textContent+"-10-2014");
      
    if(inputDay1.childNodes/*==p*/){
      var p = document.createElement('p');
      p.appendChild(text);
      inputDay1.appendChild(p);
    }else{
      inputDay1.remove(p);
    };
      selectday(e);
    };
    

function selectday(e){
    var marcar=e.target.classList;
    if(marcar.contains("select1")){
      marcar.remove("select1");
    }else{
      marcar.add("select1");
    };
};
/*    var p= document.createElement('p');
      var text=document.createTextNode(t[i]+"-10-2014");
      p.appendChild(text);
      inputDay1.appendChild(p);*/