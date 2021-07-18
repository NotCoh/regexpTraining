function find () {
    const text = document.getElementById('text').textContent.split(' ');
    const text_searchable = document.getElementById('text_searchable').value.split('');
    if(text.lengh!=0 && text_searchable.length!=0){
        for ( let i = 0 ; i<text_searchable.length ; i++){
            
            let text_searchableSumm = ''
            for (let summValue = 0; summValue <= i; summValue++) {
                text_searchableSumm += text_searchable[summValue];
                for (let i = 0; i<=text.length;i++){
                         
                    if (text[i] == text_searchableSumm){
                        text[i] = `<span class = "marked">${text[i]}</span>`
                        document.getElementById('text').innerHTML =""
                        for (let j = 0;j<=text.length-1;j++){
                            document.getElementById('text').innerHTML +=  text[j] +' ';
                        }
                    }
                }
            }         
        }
    }  
}


function findViaRegExp(){
    const text = document.getElementById('text').textContent;
    const text_searchable = document.getElementById('text_searchable').value;
    
    if(text.lengh!=0 && text_searchable.length!=0){
        if(text_searchable =="." || text_searchable.length>=2 && text_searchable[0]=="." && text_searchable[1]=="."){
            document.getElementById('text_searchable').value = "please ,do not search dots ,it will cause a critical bug"
            return 
        }
        let regexp = new RegExp (text_searchable , "gmi")    
        if(text.match(regexp)){
            const newMarked = document.createElement('span');
            newMarked.innerHTML = `<span class="marked">${regexp.toString().slice(1,-4)}</span>`
            document.getElementById('text').innerHTML=text.replace(regexp , newMarked.innerHTML)
        }
    }
}