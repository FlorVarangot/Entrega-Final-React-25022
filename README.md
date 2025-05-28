📌 Pre-entrega React 25022
Este proyecto es una implementación de un eCommerce en React, que incluye carrito de compras, conexión con API de productos, enrutamiento dinámico y rutas protegidas.

✅ Requerimiento #1: Funcionalidad básica del carrito
Listar productos disponibles: Creación de un componente ProductList para mostrar productos desde una lista fija o una API.

Manejo del carrito con useState: Estado const [cart, setCart] = useState([]) para gestionar la compra.

Agregar productos al carrito: Botón con evento onClick para añadir productos mediante setCart().

Mostrar el carrito en otro componente: Cart recibe y muestra los productos agregados.

Diseño del layout general: Secciones organizadas con navbar, footer y vista de productos.

✅ Requerimiento #2: Conexión con una API de productos
Conectar con una API: useEffect + fetch para obtener datos de una API pública.

Manejo de carga y errores: Estados isLoading y error para gestionar la respuesta de la API.

Actualizar estado con useState: Guardar productos en const [products, setProducts] = useState([]).

Diseño responsive del eCommerce: Integración fluida de los datos en la interfaz.

Optimización con useEffect: Llamada a la API solo cuando el componente se monta.

Ampliación del carrito: Funcionalidades de eliminación y ajuste de cantidades de productos.

✅ Requerimiento #3: Implementación de rutas
Uso de react-router-dom: Configuración con BrowserRouter, Routes y Route.

Manejo de errores por ruta: Mensajes dinámicos según estado de carga o fallos.

Componentización de vistas: Creación de Home, ProductDetail, Cart, About.

Navegación entre productos: Detalles accesibles con onClick.

✅ Requerimiento #4: Rutas dinámicas y protegidas
Rutas dinámicas (/product/:id): Muestra detalles individuales de productos según su ID.

Interactividad: Componentes que reaccionan al contexto (mostrar info específica).

Rutas protegidas (/admin): Simulación de autenticación para áreas restringidas.

Navbar adaptable: Barra de navegación con accesos directos.
