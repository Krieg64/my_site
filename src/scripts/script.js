var bar = document.getElementById('bar')
var bars = document.getElementById('bars')
var close = document.getElementById('close')
var menu = document.getElementById('menu')
var divmenu = document.getElementById('divmenu')



// function Open() {
//     bars.style.width = "250px";
//     bars.style.height = "95vh";
//     bars.style.transition = "2s";
//     close.style.display = "flex";
//     bar.style.display = "none";
//     menu.style.display = "block";
//     divmenu.style.transition = "2s"
//     divmenu.style.transitionDelay = ".8s"
//     divmenu.style.opacity = "1";
// }
// function Closed() {
//     bars.style.width = "60px";
//     bars.style.height = "60px"
//     bars.style.transition = "1.2s";
//     close.style.display = "none";
//     bar.style.display = "flex";
//     menu.style.display = "none";
//     divmenu.style.transition = "1s"
//     divmenu.style.opacity = "0";
// }

//skills

var array =   [
    {
        name: 'JavaScript',
        loading: '50',
        img: './src/files/ico_js.png'
    },
    {
        name: 'HTML',
        loading: '20',
        img: './src/files/ico_html5.png'
    },
    {
        name: 'CSS',
        loading: '70',
        img: './src/files/ico_css3.png'
    },
    {
        name: 'Nodejs',
        loading: '70',
        img: './src/files/ico_nodejs.png'
    },
    {
        name: 'React',
        loading: '70',
        img: './src/files/ico_react.png' 
    },
    {
        name: 'UX',
        loading: '70',
        img: './src/files/ico_ux.png'
    },
]

var viewskills = document.getElementById('view-skill-component')

array.forEach(skill => {
    viewskills.innerHTML += `
        <div class="skill-box">
				<img src=${skill.img} alt=${skill.name} class="logo-skill">
			<div class="title-progress-skill">
				<h2 class="title-skill">${skill.name}</h2>
				<progress value=${skill.loading} max="100" class="skill-loading"></progress>
			</div>
		</div>
    `
})

    
