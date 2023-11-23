- INSTRUCCIONES
    1. Pegar todo el contenido del ZIP en una app en blanco de Ionic con Angular. 
    2. En la carpeta "data" (se encuentra dentro de "src/app/...") abrir la línea de comandos e ingresar: "json-server --watch tareas.json --host 0.0.0.0 --port 3300".
    3. Se debe abrir la línea de comandos en la carpeta raíz e ingresar: 
        1. npm install angularx-qrcode --save
        2. npm install --save-dev @types/qrcode
        3. npm install date-fns
        4. "ionic lab" o "ionic serve" (modo escritorio).

- FALLOS
    1. Existe solo un bug el cual consiste en iniciar sesión con un usuario después de haber cerrado sesión con un usuario distinto e ingresar al perfil. Se mostrarán las credenciales del usuario anterior, sin embargo esto se soluciona al salir del perfil y volver a ingresar o refrescar la page. Esto no sucede siempre.
    2. La app no es capaz de abrir la cámara y leer el QR para almacenar la asistencia debido a varios problemas con la implementación. 
    3. No se puede editar el usuario (a pesar de existir las pages para ello). 
    4. La APK pudo ser exportada, sin embargo esta no interactua con el servidor JSON (se encuentra en "MyApp\android\app\build\outputs\apk\debug"). 
    Lo sentimos.

Testeado en navegador Firefox. Pueden existir problemas con otros navegadores (no se probó).
Codificado con Visual Studio Code.
