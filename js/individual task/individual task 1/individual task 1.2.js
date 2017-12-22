window.onload=function(){
    var camera, scene, renderer;
    var geometry, material, mesh;

    init();
    animate();
    // инициализация начальных значений
    function init() {
        // создаем камеру - перспективная проекция
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        // установка z-координаты камеры
        camera.position.z = 600;

        var radius_top = 120;
        var radius_bot = 120;
        var heigth = 240;
        var segments = 5;
        // настройка сцены
        scene = new THREE.Scene();

        geometry = new THREE.CylinderGeometry(radius_top, radius_bot, heigth, segments);

        //geometrySpher = new THREE.PlanGeomtry(60, 20);
        // настройка материала - установка цвета
        material = new THREE.MeshNormalMaterial({ color: 0x00FF00, wireframe: false});

        //planeMaterial = new THREE.MeshBasicMaterial({color: 0xcccccc});
        // настраиваем меш, который будет отображать куб
        mesh = new THREE.Mesh(geometry, material);

        //meshPlane = new THREE.Mesh(geometrySpher, planeMaterial);
        scene.add(mesh);

        //scene.add(meshPlane);
        // создаем объект для рендеринга сцены
        renderer = new THREE.WebGLRenderer();
        // установка размеров
        renderer.setSize(window.innerWidth, window.innerHeight);
        // встраиваем в DOM-структуру страницы
        document.body.appendChild(renderer.domElement);
    }
    // функция анимации
    function animate() {

        requestAnimationFrame(animate);
        // вращение меша вокруг осей
        mesh.rotation.x += 0.03;
        mesh.rotation.y += 0.02;


        // рендеринг сцены - метод, производящий по сути отрисовку
        renderer.render(scene, camera);
    }
}