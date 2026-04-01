# Prueba Técnica – Especialista QA 

Este proyecto contiene pruebas automatizadas del registro login. 

**Login:** https://reqres.in/api/login

## Requisitos

Antes de ejecutar las pruebas deben de tener el siguiente programa instalado:

- **Node.js** (https://nodejs.org/)

## Pasos para ejecutar

1. **Instalar dependencias**:
   
   Ejecuta el siguiente comando para instalar las dependencias necesarias:

   `npm install`
   `npm install cypress`


2. **Ejecutar las pruebas y generar el reporte**:

   Una vez instaladas las dependencias, puedes ejecutar las pruebas y generar el reporte con el siguiente comando:

   `npm run test-report`

   Este comando realizará las siguientes acciones:

    - Ejecutará las pruebas de Cypress
    - Generará un reporte visual en formato **HTML** que podrás abrir en tu navegador.


3. **Accede al archivo resultante**:

    Una vez que las pruebas hayan finalizado, el archivo HTML del reporte generado se encontrará en la siguiente ruta:

    `cypress\reports\html\cypress\reports\merged.html`


    o puedes abrirlo directamente desde la terminal con el siguiente comando:

    `start cypress/reports/html/cypress/reports/merged.html`


    Finalmente, se abrira el reporte en el navegador preterminado.


## Clonar repositorio

Para clonar el repositorio, utiliza el siguiente comando:

`git clone [https://github.com/Cumly/APIAutomation.git](https://github.com/Cumly/APIAutomationSauceSauceDemo.git)`
`cd APIAutomationSauceSauceDemo`


Después de clonar el repositorio, debes instalar las dependencias y ejecutar las pruebas siguiendo los pasos detallados anteriormente.


