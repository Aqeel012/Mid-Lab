function addCard(){
    
    const question=document.getElementById("question").value;
    const answer=document.getElementById("answer").value;
    const box=document.getElementById("input-container");
    let paren=document.getElementById('parent');
    
        let newDiv = document.createElement('div');
        newDiv.className="faq";
    
        let headingelement=document.createElement('h3');
        headingelement.className="faq-title";
        headingelement.textContent=question;
    
        let paragrapgh=document.createElement('p');
        paragrapgh.className="faq-text";
        paragrapgh.textContent=answer;
     
    
        let newbutton=document.createElement('button');
        newbutton.className="faq-toggle";
        
        let icon1=document.createElement('i');
        icon1.className="fas fa-chevron-down";
    
        
        let icon2=document.createElement('i');
        icon2.className="fas fa-times";
    
        newbutton.appendChild(icon1);
        newbutton.appendChild(icon2);
    
        newDiv.appendChild(headingelement);
        newDiv.appendChild(paragrapgh);
        newDiv.appendChild(newbutton);
    
        paren.appendChild(newDiv);
        
    }
 
function drop()
{
    

let faqs = document.querySelectorAll('.faq');

faqs.forEach(function (faq) {

    let toggleButton = faq.querySelector('.faq-toggle');

    
    toggleButton.addEventListener('click', function () {
        
        faq.classList.toggle('active');
    });
});
    
}
