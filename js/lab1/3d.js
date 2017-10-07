window.onload = function () {
    var camera, scene, renderer;
    var geometry, material, mesh;

    init();
    animate();
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
    }
    // функция анимации
    function animate() {
        requestAnimationFrame(animate);
        // вращение меша вокруг осей
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
        // рендеринг сцены - метод, производящий по сути отрисовку
        renderer.render(scene, camera);
    }
};