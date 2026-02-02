# Reto técnico - QA- TCS Ecuador - Ejercicio 2 – APIs - Giuliana Rivera

Este proyecto contiene pruebas automatizadas del registro (signup) y login. Utilizando Cypress para realizar una prueba de cada uno de estos servicios:

**Signup:** https://api.demoblaze.com/signup 
**Login:** https://api.demoblaze.com/login


## Criterios

- El archivo conclusiones se encuentra adjunto al proyecto como **Conclusiones.txt**
- El proyecto se encuentra en subido en GitHub en el repositorio **Conclusiones.txt**


## Requisitos

Antes de ejecutar las pruebas deben de tener el siguiente programa instalado:

- **Node.js** ( link de descarga (https://nodejs.org/))

## Pasos para ejecutar


1. **Instalar dependencias**:
   
   Ejecuta el siguiente comando para instalar las dependencias necesarias:

   `npm install`
   `npm install cypress`


2. **Ejecutar las pruebas y generar el reporte**:

   Una vez instaladas las dependencias, puedes ejecutar las pruebas y generar el reporte con el siguiente comando:

   `npm run test-report`

   Este comando realizará las siguientes acciones:

    - Ejecutará las pruebas de Cypress para los servicios **signup** y **login**.
    - Generará un reporte visual en formato **HTML** que podrás abrir en tu navegador.


3. **Accede al archivo resultante**:

Una vez que las pruebas hayan finalizado, el archivo HTML del reporte generado se encontrará en la siguiente ruta:

`cypress\reports\html\cypress\reports\merged.html`


o puedes abrirlo directamente desde la terminal con el siguiente comando:

`start cypress/reports/html/cypress/reports/merged.html`


Finalmente, se abrira el reporte en el navegador preterminado.


## Clonar repositorio

Para clonar el repositorio, utiliza el siguiente comando:

`git clone <URL del repositorio>`
`cd <nombre_del_repositorio>`


Después de clonar el repositorio, debes instalar las dependencias y ejecutar las pruebas siguiendo los pasos detallados anteriormente.


