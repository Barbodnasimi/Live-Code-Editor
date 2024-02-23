const textarea = document.querySelectorAll('textarea')

function run() {
    let htmlCode = document.querySelector('#html-code')
    let cssCode = document.querySelector('#css-code')
    let jsCode = document.querySelector('#js-code')
    let output = document.querySelector('#output')
    
   output.contentDocument.body.innerHTML = htmlCode.value + "<style>" + cssCode.value + "</style>" 
   
   output.contentWindow.eval(jsCode.value)
}

textarea.forEach((item)=>{
    item.addEventListener("keyup",run)
})