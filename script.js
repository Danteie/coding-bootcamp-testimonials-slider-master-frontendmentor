var question = true

function next(){
    if (!question) {
        document.getElementById('article1').style.opacity = 1;
        document.getElementById('article2').style.opacity = 0;

        question = true;
    }else{
        document.getElementById('article1').style.opacity = 0;
        document.getElementById('article2').style.opacity = 1;
        question = false;
    }


}