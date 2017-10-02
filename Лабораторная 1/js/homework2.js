window.onload = function () {init();};
    var camera, scene, renderer;
    var geometry, material, mesh;
	var Animated = false;
	var request;
	mesh.rotation.x = 0;
		mesh.rotation.y=0;
    
    
    // base value init
    function init() {
        // создаем камеру - перспективная проекция
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        // установка z-координаты камеры
        camera.position.z = 700;
        // настройка сцены
        scene = new THREE.Scene();
        // настройка геометрии - в качестве геометрии будет куб
        // настроим его ширину, высоту и длину по оси z
        geometry = new THREE.CubeGeometry(400, 200, 100);
        // настройка материала - установка цвета
        material = new THREE.MeshBasicMaterial({color: 0x0000088, wireframe: false});
        // настраиваем меш, который будет отображать куб
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        // создаем объект для рендеринга сцены
        renderer = new THREE.CanvasRenderer();
        // установка размеров
        renderer.setSize(1066, 466);
        renderer.setClearColorHex(0xffffff, 1);
        // встраиваем в DOM-структуру страницы
        document.getElementsByClassName("container")[0].appendChild(renderer.domElement);
		// рендеринг сцены - метод, производящий по сути отрисовку
        renderer.render(scene, camera);
    }
    // функция анимации
    function animation() {
		if(Animated === true){
			Animated = false;
			document.getElementById("btnAnimation").innerHTML="Старт";
			stop();
		}else{
			Animated = true;
			document.getElementById("btnAnimation").innerHTML = "Стоп";
			start();
		}
                
    }
	function stop(){
		cancelAnimationFrame(request);
	}
	function start() {		
		request = requestAnimationFrame(start);
		mesh.rotation.x += 0.01;
		mesh.rotation.y += 0.02;
		renderer.render(scene, camera);
	}

	function accelerate() {
		if (Animated) {
			if((mesh.rotation.x>0)||(mesh.rotation.y>0)){
				requestAnimationFrame(accelerate);
				mesh.rotation.x += 0.01;
				mesh.rotation.y += 0.02;
				renderer.render(scene, camera);
			}
			
			
			
			
			
			
		}
	}
	function decelerate() {
		if (Animated) {
			if((mesh.rotation.x>0)||(mesh.rotation.x>0))
			{			
			
			requestAnimationFrame(decelerate);
			mesh.rotation.x -= 0.01;
			mesh.rotation.y -= 0.02;			
			renderer.render(scene, camera);
			}
			
			
		}
	}
