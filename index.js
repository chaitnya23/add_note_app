var addbtn = document.getElementById("addbtn");
let text = document.getElementById("input_txt");
let search_btn = document.getElementById("search_btn");
let search_txt = document.getElementById("search");
shownote();

addbtn.addEventListener('click' ,()=>{
   
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.push(text.value);
    localStorage.setItem("notes" ,JSON.stringify(notesobj));
    text.value="";
    shownote();
});

function shownote(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach((element ,index) => {
        let i =index;
        html+=`<div class="col-md-2 notecard">
    <div class="card  card-hover shadow-lg" >
        <div class="card-body">

            <div class="card-title">
                <h3>Note ${index+1}</h3>
            </div>
            <p class="card-text" id="note_text">
               ${element}
            </p>
            <button class="btn btn-primary" onclick="deletenote(${i})">Delete Note</button>
        </div>
    </div>
</div>`;

 let note_element = document.getElementById("notes");
 note_element.innerHTML = html;
    });

}

function deletenote(index){
    if(index==0){
        let note_element = document.getElementById("notes");
        note_element.innerHTML="<h3>No Notes Added</h3>"
    }
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
        
    }
    notesobj.splice(index ,1);
    localStorage.setItem("notes" ,JSON.stringify(notesobj));
    shownote();
}

search_btn.addEventListener("click" ,()=>{

    let s_txt = search_txt.value;
    let cards = document.getElementsByClassName("notecard");
    
    Array.from(cards).forEach((element) => {
          //cheack the text of each cards first p tag
        
          //searching the perticuler p of the iterated div block
          let cardtxt = element.getElementsByTagName("p")[0].innerText;
             
        
          
          if(cardtxt.includes(s_txt)){
              element.style.display = "block";
            }
            else{
                element.style.display = "none";
                
            }
          
            
    });
   

});