# MDLINKS

MdLinks es una librería que te ayudara a conocer los links dentro de tus archivos md.
Es una herramienta creada usando [Node.js](https://nodejs.org/), que leera y analizará archivos en formato [`Markdown`](https://es.wikipedia.org/wiki/Markdown), para verificar los links que contengan y reportar
algunas estadísticas.

### Sobre el proceso de Desarrollo ⚙️
Si quieres conocer más sobre el proceso de desarrollo de esta librería visita este [Documento](https://docs.google.com/document/d/1Q_sE48pyNOQIwKq4h5UhUYJlQKK0wba6fJFHS53Sm-4/edit?usp=sharing)


## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

Antes que nada, asegúrate de tener un editor de texto en condiciones, puedes usar Atom, Sublime Text o cualquier otro de tu preferencia, yo utilicé Visual Studio Code. Para ejecutar los comandos a continuación necesitarás una UNIX Shell, que interpreta líneas de comando (command-line interpreter) así como tener git instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS, ya tienes una shell (terminal) instalada por defecto (y probablemente git también). Si usas Windows puedes usar Git bash, aunque recomendaría que consideres probar GNU/Linux como tu Sistema Operativo.

### Instalación 🔧

Haz tu propio fork de este repositorio.
Clona tu fork a tu computadora (copia local).
Instala las dependencias del proyecto con el comando npm install.
Esto asume que has instalado Node.js (que incluye npm).

### Ejecutando las pruebas ⚙️

_Las pruebas Unitarias de este proyecto están aún en desarrollo, Gracias por tu paciencia_

## Deployment 📦

_Ejecuta el comando usando mdlinks en la terminal agregando "--doc" y el nombre del archivo a revisar_

```
mdlinks --doc readme.md
```

## Construido con 🛠️

- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [Node.js](https://nodejs.org/)
- [Vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e)
- [npm](https://www.npmjs.com/) 

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://github.com/Laboratoria/curricula-js/blob/master/CONTRIBUTING.md) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [curricula](https://github.com/Laboratoria/curricula-js/tree/master/projects/04-md-links)


## Autora ✒️

* **Hameyalli Elizalde** - [AcheZeta](https://github.com/AcheZeta)

También puedes conocer los proyectos de todas las [estudiantes](https://github.com/AcheZeta/CDMX007-fe-md-links/network/members) que han participado en este proyecto. 


## Checklist

### General

- [ ] Puede instalarse via `npm install --global <github-user>/md-links`

### `README.md`

- [ ] Colocar el pseudo código o diagrama de flujo con el algoritmo que soluciona el problema.
- [ ] Un board con el backlog para la implementación de la librería.
- [] Documentación técnica de la librería.
- [ ] Guía de uso e instalación de la librería

### API `mdLinks(path, opts)`

- [ ] El módulo exporta una función con la interfaz (API) esperada.
- [ ] Implementa soporte para archivo individual
- [ ] Implementa soporte para directorios
- [ ] Implementa `options.validate`

### Pruebas / tests

- [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
      lines, y branches.
- [ ] Pasa tests (y linters) (`npm test`).

### CLI

- [ ] Expone ejecutable `md-links` en el path (configurado en `package.json`)
- [ ] Se ejecuta sin errores / output esperado
- [ ] Implementa `--validate`
- [ ] Implementa `--stats`

## Hacker Edition

- [ ] Crear un script en el package.json que transforme el codigo ES6+ a ES5.
- [ ] Puedes agregar la propiedad line a cada objeto link indicando en qué línea del archivo se encontró el link.
- [ ] Puedes agregar más estadísticas.
- [ ] Integración continua con Travis o Circle CI.
