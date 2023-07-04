import World from "./world"
const container = document.getElementById("webgl")
const myWorld = new World(container)


function animate(){
    requestAnimationFrame(animate)
    myWorld.cube.rotateX += 0.01
    myWorld.cube.rotateY += 0.01

    myWorld.render()
}
animate()
console.log('its up')