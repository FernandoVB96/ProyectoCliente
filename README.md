
# Portfolio - Frontend (React)

**Ciclo Formativo:** Desarrollo de Aplicaciones Web (DAW)  
**Alumno:** Fernando Vaquero Buzón

---

## Índice

1. [Introducción](#introducción)  
2. [Características](#características)  
3. [Instrucciones de Instalación](#instrucciones-de-instalación)  
4. [Cómo Usarlo](#cómo-usarlo)  
5. [Prototipo en Figma](#prototipo-en-figma)  
6. [Conclusiones](#conclusiones)  
7. [Créditos y Reconocimientos](#créditos-y-reconocimientos)  
8. [Licencia](#licencia)  
9. [Información de Contacto](#información-de-contacto)

---

## Introducción

Este proyecto consiste en un **portfolio interactivo** desarrollado con **React**, orientado a presentar de manera profesional información sobre educación, experiencia laboral, habilidades y proyectos. Toda la información se gestiona dinámicamente desde archivos JSON y a través de peticiones a una API REST.  

### Objetivos principales:

- Diseñar una interfaz intuitiva y responsiva.  
- Integrar datos dinámicos cargados desde un servidor o archivos locales.  
- Mostrar proyectos y habilidades de manera clara y organizada.  
- Aplicar buenas prácticas de desarrollo frontend con React.

---

## Características

1. **Perfil Personal:**  
   - Muestra detalles como nombre, fotografía, profesión y una breve introducción.  

2. **Historial Académico:**  
   - Información sobre la educación obtenida desde un archivo JSON.  

3. **Experiencia Profesional:**  
   - Lista de experiencias laborales con detalles relevantes, cargada dinámicamente.  

4. **Proyectos Realizados:**  
   - Sección que detalla proyectos con descripción, tecnologías empleadas y enlaces.  
   - Los datos se cargan desde un backend basado en Spring Boot.  

5. **Habilidades Técnicas:**  
   - Visualización de las principales tecnologías y herramientas dominadas.  

6. **Formulario de Contacto:**  
   - Permite a los usuarios enviar un mensaje. Incluye validaciones básicas, aunque no tiene integración backend activa.  

### Tecnologías utilizadas

- React con JSX  
- CSS para diseño y estilos  
- Hooks como `useState` y `useEffect`  
- Fetch API para consumir datos JSON y APIs externas  

---

## Instrucciones de Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

1. **Crear el Proyecto React con Vite:**  
   Ejecuta en la terminal:  
   ```bash
   npm create vite@latest nombre-del-proyecto
   ```  
   Selecciona **React** y **JavaScript** durante la configuración.  

2. **Configurar el Proyecto:**  
   Navega a la carpeta creada:  
   ```bash
   cd nombre-del-proyecto
   ```  
   Instala las dependencias iniciales:  
   ```bash
   npm install
   ```  

3. **Clonar el Repositorio (si aplica):**  
   Si tienes el código en GitHub, clónalo:  
   ```bash
   git clone https://github.com/FernandoVB96/ProyectoPortfolio.git
   ```  
   Asegúrate de trabajar en el directorio correcto.  

4. **Instalar Dependencias Adicionales:**  
   Si el proyecto utiliza librerías adicionales, instálalas con:  
   ```bash
   npm install
   ```  

5. **Ejecutar el Proyecto:**  
   Inicia el servidor de desarrollo con:  
   ```bash
   npm run dev
   ```  

---

## Cómo Usarlo

Una vez ejecutada la aplicación, podrás interactuar con varias secciones del portfolio:

- **Sección "Perfil":** Información personal básica y presentación.  
- **Sección "Educación":** Lista de instituciones educativas, obtenida desde un archivo `education.json`.  
- **Sección "Experiencia":** Información laboral obtenida desde `work.json`.  
- **Sección "Proyectos":** Proyectos desarrollados, conectados a un backend en Spring Boot.  
- **Sección "Habilidades":** Visualización de competencias técnicas.  
- **Formulario de Contacto:** Opción para enviar mensajes al desarrollador.  

### Ejemplo de Estructura de Datos JSON

Los archivos JSON tienen una estructura similar a esta:  

```json
{
  "education": [
    {
      "title": "Técnico Superior en Desarrollo de Aplicaciones Web",
      "subtitle": "Centro Vedruna",
      "date": "2023-2025",
      "imageSrc": "/img/vedruna-logo.png",
      "link": "https://vedrunasevilla.org/"
    }
  ]
}
```

---

## Prototipo en Figma

Puedes consultar el diseño del proyecto en el siguiente enlace:  
[Prototipo en Figma](https://www.figma.com/design/DnfduzkqMXkxqPcwXpYeMF/Proyecto_final?node-id=2-2&t=mszMoTUrVfAokj9P-1)  

---

## Conclusiones

Este portfolio es un ejemplo funcional de cómo construir una interfaz frontend dinámica y responsiva con React. Utiliza buenas prácticas de desarrollo y una estructura modular que facilita su mantenimiento y escalabilidad. Además, demuestra habilidades en la integración con backend y la gestión de datos dinámicos.  

---

## Créditos y Reconocimientos

Agradecimientos especiales a:  
- **Joaquín Borrego Fernández** y **José Carlos Moreno**, por su guía en este proyecto.  
- Compañeros de clase, por su apoyo y feedback constructivo.  

---

## Licencia

Este proyecto está protegido bajo la licencia **MIT**, lo que permite su uso, modificación y distribución bajo los términos especificados en la misma.  

---

## Información de Contacto

Para más detalles o consultas:  
- **Correo:** fernandovaquero96@gmail.com  
- **GitHub:** [Mi perfil de GitHub](https://github.com/FernandoVB96)  
