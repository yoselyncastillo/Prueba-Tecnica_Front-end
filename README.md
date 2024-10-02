# Front end test UNOW

### Tareas Realizadas

- Crea una aplicación utilizando React + SCSS.
- La aplicación debe incluir un campo de entrada de texto y un botón para capturar el
  usuario y recuperar información utilizando la API REST pública de GitHub: API
  GitHub Usuarios.
  -Muestra los primeros 10 usuarios del resultado de la búsqueda, incluyendo su
  nombre de usuario (`'user.login'`) y el id (`'user.id'`).
- Convierte cada perfil de usuario en un enlace que navegue a una ruta con la
  propiedad `'user.login'` como parámetro.
- Crea un componente independiente que obtenga y muestre datos de un usuario
  específico utilizando la API: [API GitHub Usuarios por login.](https://api.github.com/users/YOUR_NAME)
- Incluye la imagen del usuario (`'avatar_url'`) y otra información adicional en el
  componente.
- Implementa validadores que verifiquen que el texto de búsqueda tenga un mínimo
  de 4 caracteres y que no permita la búsqueda de la palabra **“iseijasunow”**.
- Integra una librería de gráficos para mostrar un gráfico de barras con el número de
  seguidores de los 10 primeros usuarios.
- Asegura que tu código CSS siga los principios de CSS Grid y/o CSS Flexbox para la
  maquetación.
- Implementar pruebas unitarias utilizando Jest y react-testing-library para los
  componentes creados.
- Asegúrate de cubrir casos relevantes como renderizado de componentes,
  validaciones, y eventos de usuario.
- Asegura un mínimo del 80% de cobertura de código.
- Adherencia a BEM (cuando aplique): Asegura que el CSS siga los principios de la
  metodología BEM para la organización de clases.

### Instalación de dependencias

```
npm install
```

### Listo para ejecutar

```
npm run dev
```

### Diseño

Me inspiré en un [UI Kit](https://www.figma.com/community/file/1020079203222518115) disponible en Figma Community, para tener una guía  de diseño, color y aportar consistencia a la web

### SCSS

Utilicé variables para los colores y asi aportar mayor orden y facilidad a la hora de hacer cambios de diseño

### Código

Opté por usar react con `'typescript'` porque es más fácil ver errores en desarrollo, hace el código mas legible y consistente
También encapsulé la lógica de peticiones y formateo de los datos pedidos por la API de Github en un Custom hook llamado `'useFetchUsers'`
