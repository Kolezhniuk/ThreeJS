window.onload = function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var canvas = document.getElementById('canvas');
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);




    var renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setClearColor(0x000000);

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
    camera.position.set(0, 0, 1000);

    var light = new THREE.AmbientLight('#ffffff');
    scene.add(light);

    var geometry = new THREE.SphereGeometry(200, 12, 12);
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00,   wireframe: true});
    var mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);
    var ball = {
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        wirefarmeColor: [ 0, 128, 255 ]

    };
    var gui = new dat.GUI();
    gui.add(ball, 'rotationX').min(-0.2).max(0.2).step(0.001);
    gui.add(ball, 'rotationY').min(-0.2).max(0.2).step(0.001);
    gui.add(ball, 'rotationZ').min(-0.2).max(0.2).step(0.001);
    gui.add(ball, 'positionX').min(-5).max(5).step(0.1);
    gui.add(ball, 'positionY').min(-5).max(5).step(0.1);
    gui.add(ball, 'positionZ').min(-5).max(5).step(0.1);
    gui.addColor(ball, 'wirefarmeColor');

    canvas.onclick = function (e) {
        var r = parseInt(ball.wirefarmeColor[0]);
        console.log(r);

        var g = parseInt(ball.wirefarmeColor[1]);
        var b = parseInt(ball.wirefarmeColor[2]);
        console.log(g);
        console.log(b);
         // material = new THREE.MeshBasicMaterial({color: 0x00ff00,   wireframe: true});
        if(mesh){
            meshmaterial.color.setRGB(r, g, b);
        }

    };

    function loop() {
        mesh.rotation.x +=  ball.rotationX;
        mesh.rotation.y +=  ball.rotationY;
        mesh.rotation.z +=  ball.rotationZ;
        mesh.position.x += ball.positionX;
        mesh.position.y += ball.positionY;
        mesh.position.z += ball.positionZ;
        renderer.render(scene, camera);
        requestAnimationFrame(function () {
            loop();
        })
    }

    loop();
};

