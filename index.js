const colors = {
	blue: 'background: blue;',
	gray: 'background: gray;',
	green: 'background: green;',
	red: 'background: red;',
	yellow: 'background: yellow;',
	white: 'background: white;',
	black: 'background: black;',
}

// 1
const div = document.querySelector('divka')
// divka.style.cssText = div
document.addEventListener('keydown', e => {
	if (e.key === 'g') {
		divka.style.cssText += colors.green
	} else if (e.key === 'b') {
		divka.style.cssText += colors.blue
	} else if (e.key === 'r') {
		divka.style.cssText += colors.red
	} else if (e.key === 'w') {
		divka.style.cssText += colors.white
	} else if (e.shiftKey && e.key === 'B') {
		divka.style.cssText += colors.black
	} else if (e.shiftKey && e.key === 'G') {
		divka.style.cssText += colors.gray
	}
})
// 2
let i = 1
task2.addEventListener('click', e => {
	i *= 2
	const results = document.querySelector('#results')
	results.innerHTML = i
})
// 3
div2.addEventListener('mousedown', e => {
	let x = e.offsetX
	let y = e.offsetY
	coor.innerHTML = `<b><i>Координаты:</i></b><br>X-${x}<br>Y-${y}`
	// console.log(`X -- ${e.clientX} -- Y - ${e.clientY}`) //1 способ
	console.log(x, y) //2 способ
})
// 4
input.addEventListener('input', () => {
	let color = input.value
	//не смог
})
