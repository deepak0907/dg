console.log('it works😊')

updatecolor = function(){
    console.log('good work')
}

function doSomething(){
    alert('i am doing something')
}
animation_botton = ()=>[
    console.log('i am thinking about')
]

changeMassage=(e)=>[
    e.target.innerText=' button Clicked'
]

let btnul = document.querySelector('#btn-uplink')
let allLinks = document.querySelectorAll('a')
btnul.addEventListener('click', (e) => {
    allLinks.forEach((link,idx)=>{
        link.textContent = `Good Work Click Again 😉 ${idx}`
    })

})