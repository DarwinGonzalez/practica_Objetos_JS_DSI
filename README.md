# Practica2 Desarrollo de Sistemas Infórmaticos

## Práctica 2: Objetos en JavaScript

![captura](https://github.com/DarwinGonzalez/Practica2DSI/blob/master/img/captura.png?raw=true)

* La práctica consiste en programar un pequeño script que pongan objetos en pantalla (representados mediante pequeños rectángulos).
* Estos objetos deben moverse en pantalla tanto de forma horizontal como vertical (deben tener velocidad en x e y).
* Por supuesto la práctica debe estar orientada a objetos, cada rectángulo será un objeto con sus propiedades (x, y, velocidad, …) y métodos (moverse, chocar, etc).
* Al chocar contra los bordes de la pantalla deben invertir el sentido de su movimiento, pero pueden conservar la velocidad.
* Una posible mejora es detectar colisiones con el resto de objetos y cambiar de sentido según corresponda.
* Se puede definir un borde fijo, no hace falta que ocupe toda la pantalla.
* El número inicial de objetos puede ser 50, es decir debes tener un array de 50 instancias del objeto y se instanciará con velocidades aleatorias (tanto horizontal como vertical) dentro de un rango que definirá el alumno haciendo pruebas.
* Cuando todo funcione, se creará un segundo script, esta vez en NodeJS que esté a la escucha en el puerto 3000 y ejecute la práctica.
* Una posible mejora es pasar por parámetro (en la URL) el numero de objetos a pintar en pantalla.

