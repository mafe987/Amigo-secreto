Sorteo de Amigo Secreto
Este proyecto es una aplicación web simple desarrollada con JavaScript, HTML y CSS para realizar el sorteo de un amigo secreto entre varios participantes.

🧩 Funcionalidades
- Añadir nombres de amigos a una lista.
- Validar que los nombres no estén vacíos ni sean números.
- Sortear aleatoriamente un amigo secreto entre los nombres agregados.
- Limpiar la lista automáticamente después de realizar el sorteo.
- Permitir reiniciar el sorteo al agregar un nuevo nombre.

📋 Requisitos
Solo necesitas un navegador web moderno (Chrome, Firefox, Edge, etc.) para ejecutar este proyecto. No requiere instalación ni dependencias externas.

🚀 ¿Cómo usarlo?
1. Escribe el nombre de un amigo en el campo de texto.
2. Haz clic en "Añadir" para incluirlo en la lista.
3. Repite el proceso para al menos dos personas.
4. Haz clic en "Sortear amigo" para elegir un amigo secreto.

Si agregas un nuevo nombre después del sorteo, la lista se reinicia automáticamente.

📁 Estructura del código principal
agregarAmigo()
- Valida el nombre ingresado.
- Reinicia la lista si ya se había sorteado.
- Agrega el nombre a listaAmigos.

actualizarListaAmigos()
- Muestra la lista de amigos en pantalla.

sortearAmigo()
- Valida que haya al menos dos amigos.
- Elige un nombre al azar y lo muestra como resultado.
- Limpia la lista visible para mostrar solo el resultado.

