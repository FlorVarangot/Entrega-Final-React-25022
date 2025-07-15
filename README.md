# 🛍️ Entrega Final - Proyecto eCommerce React 25022

Este proyecto es la entrega final del módulo React en Talento Tech. Simula la presentación del producto a un cliente y cumple con los cinco requerimientos técnicos establecidos para la evaluación final.

---

## 📌 Requerimiento #1: Gestión del Carrito y Autenticación de Usuarios

🔒 **Objetivo:** Crear un carrito de compras funcional y restringir acceso a secciones privadas mediante autenticación.

### ✅ Carrito con Context API
- Implementación de `CartContext` para manejar productos agregados.
- Funcionalidades: agregar, eliminar y vaciar productos.
- Estado persistente y compartido en toda la app con Context API.

### ✅ Autenticación de Usuarios
- Creación de `AuthContext` para manejar el estado de autenticación.
- Login simulado con `localStorage`.
- Restricción de rutas privadas (por ejemplo, `/admin`) si el usuario no está logueado.

---

## 📌 Requerimiento #2: CRUD de Productos con MockAPI

🛠️ **Objetivo:** Permitir administración completa del catálogo de productos.

### ✅ Formulario para Agregar Productos
- Formulario controlado con `useState`.
- Validaciones:
  - ✅ Nombre obligatorio
  - ✅ Precio mayor a 0
  - ✅ Descripción mínima de 10 caracteres
- Envío de datos mediante POST a [MockAPI](https://mockapi.io/).

### ✅ Edición y Eliminación
- Edición de productos con PUT/PATCH hacia MockAPI.
- Eliminación segura con `Modal` de confirmación.
- Gestión de errores y estados con mensajes visibles para el usuario.

---

## 📌 Requerimiento #3: Optimización de Diseño y Responsividad

🎨 **Objetivo:** Mejorar apariencia, accesibilidad e interacción con herramientas modernas.

### ✅ Diseño Responsivo con Bootstrap
- Uso del sistema de grillas para adaptar contenido a móviles, tablets y escritorio.

### ✅ Interactividad con React Icons y Toastify
- Iconos visibles en botones y elementos interactivos.
- Notificaciones automáticas de éxito/error con `React Toastify`.

---

## 📌 Requerimiento #4: Búsqueda y Paginación

🔎 **Objetivo:** Mejorar usabilidad y navegación del catálogo.

### ✅ Barra de Búsqueda (obligatoria)
- Permite filtrar por nombre o categoría.
- Resultados dinámicos conforme se escribe.

### ✅ Paginador de Productos (opcional)
- Divide productos en páginas.
- Navegación fluida entre secciones del catálogo.

---

## 📌 Requerimiento #5: Preparación para el Despliegue

🚀 **Objetivo:** Publicar la app en un servidor con optimización final.

### ✅ Pruebas de Compatibilidad
- Testeado en múltiples dispositivos.
- Verificación de tiempos de carga y navegación.

### ✅ Optimización del Código
- Refactorización y limpieza de componentes innecesarios.
- Gestión eficiente del estado global (`CartContext`, `AuthContext`, etc).

---

## 💡 Tecnologías Utilizadas

| Herramienta        | Uso                                           |
|--------------------|-----------------------------------------------|
| React              | Framework principal                           |
| Vite               | Bundler moderno y ágil                        |
| Context API        | Estado global compartido                      |
| React Router DOM   | Navegación entre rutas                        |
| Bootstrap 5        | Diseño responsivo y grillas                   |
| React Icons        | Iconografía interactiva                       |
| React Toastify     | Alertas y notificaciones                      |
| SweetAlert2        | Confirmaciones visuales                       |
| EmailJS            | Simulación de envíos automáticos por email    |
| MockAPI            | Backend falso para catálogo y autenticación   |
| GitHub Pages       | Hosting estático final                        |

---

## 🎯 Vista previa

El sitio representa una tienda artesanal llamada **QueSea de Barro**, enfocada en la venta de piezas de cerámica hechas a mano, insumos y talleres. La estética, funcionalidad y estructura están diseñadas para ofrecer una experiencia profesional y cálida.

Este proyecto fue desarrollado como parte del entrenamiento en Talento Lab y refleja una solución completa, funcional y profesional para un sitio de eCommerce. 

¡Gracias por visitar QueSea de Barro! 🧡




