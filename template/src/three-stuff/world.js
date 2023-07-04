import {
    PerspectiveCamera,
    Mesh,
    BoxGeometry,
    WebGLRenderer,
    Scene,
    Color,
    MeshBasicMaterial,
} from 'three'

export default class World {
    constructor(container){
        this.scene = new Scene()
        this.geometry = new BoxGeometry(1, 1, 1)
        this.material = new MeshBasicMaterial({color:"#ADE643"})
        this.cube = new Mesh(this.geometry, this.material)
        this.scene.add(this.cube)

        this.fov = 35
        this.aspect = window.innerWidth / window.innerHeight
        this.near = 0.1; this.far = 100;
        this.camera = new PerspectiveCamera(this.fov, this.aspect, this.near, this.far)
        this.camera.position.z = 10

        this.renderer = new WebGLRenderer()
        this.renderer.setSize( window.innerWidth, window.innerHeight )
        container.append(this.renderer.domElement)
    }

    render() {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.renderer.render( this.scene, this.camera );
    }

}