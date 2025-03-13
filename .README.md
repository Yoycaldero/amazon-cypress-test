# Prueba Automática de Amazon con Cypress

Este proyecto contiene una serie de pruebas automatizadas realizadas sobre la página de Amazon usando **Cypress**. Los casos de prueba automatizados incluyen la capacidad de cambiar el nombre del propietario de la cuenta, modificar la dirección de entrega y realizar acciones sobre productos en el carrito de compras.

## Casos de Prueba Automatizados

1. **Cambiar el Nombre del Propietario de la Cuenta**
   - Iniciar sesión en Amazon con cookies predefinidas para evitar la necesidad de ingresar manualmente las credenciales.
   - Navegar a la sección "Cuenta y Listas".
   - Acceder al perfil de usuario y cambiar el nombre del propietario a **YoyCaalderon**.
   - Guardar los cambios realizados.

2. **Editar la Dirección de Entrega**
   - Navegar a la sección de dirección de entrega.
   - Modificar o agregar una nueva dirección de entrega.

3. **Agregar un Producto al Carrito**
   - Seleccionar un producto específico (iPhone 13 Pro Max de 512GB color plateado).
   - Agregar el producto al carrito de compras.

## Requisitos

Antes de ejecutar las pruebas, asegúrate de tener lo siguiente instalado:

- **Node.js**: Puedes instalarlo desde [aquí](https://nodejs.org/).
- **Cypress**: Se instalará automáticamente a través de npm.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Yoycaldero/amazon-cypress-test.git
