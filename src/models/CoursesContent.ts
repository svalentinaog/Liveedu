export interface ILesson {
  id: number;
  title: string;
  description: string;
  video: string;
}

export interface IQuiz {
  id: number;
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correctAnswer: "a" | "b" | "c" | "d";
}

export interface ITopic {
  id: number;
  title: string;
  description: string;
  image: string;
  lessons: ILesson[];
  duration: number;
  quizzes: IQuiz[];
}

export interface ICoursesContent {
  id: number;
  starPoints: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  duration?: string;
  videoCount?: number;
  topicsCount?: number;
  topics?: ITopic[];
}

export const CoursesContent: ICoursesContent[] = [
  // {
  //   id: 1,
  //   starPoints: 5.5,
  //   image: "/svg/course1.svg",
  //   title: "Programación Básica",
  //   subtitle:
  //     "Domina los fundamentos esenciales para convertirte en programador desde cero",
  //   description:
  //     "Este curso de Programación Básica está diseñado para principiantes que desean aprender desde cero. Los estudiantes aprenderán conceptos fundamentales de programación, desarrollar habilidades prácticas, y construir una base sólida en el desarrollo de software.",
  //   price: 520,
  //   duration: "400 hours",
  //   videoCount: 20,
  //   topicsCount: 5,
  //   topics: [
  //     {
  //       id: 1,
  //       title: "Introducción a la Programación",
  //       description:
  //         "Conceptos básicos sobre programación y herramientas necesarias.",
  //       image: "/svg/topics/1.svg",
  //       duration: 80,
  //       lessons: [
  //         {
  //           id: 1,
  //           title: "¿Qué es la Programación?",
  //           description:
  //             "Introducción al mundo de la programación: historia y usos.",
  //           video: "https://www.youtube.com/embed/a7eznAouNak",
  //         },
  //         {
  //           id: 2,
  //           title: "Lenguajes de Programación",
  //           description:
  //             "Exploración de lenguajes de programación populares y aplicaciones.",
  //           video: "https://www.youtube.com/embed/gFMMmi-EYEM",
  //         },
  //         {
  //           id: 3,
  //           title: "Instalación del Entorno de Desarrollo",
  //           description:
  //             "Configuración del entorno y elección de un editor de código.",
  //           video: "https://www.youtube.com/embed/vy8HqYpWtPg",
  //         },
  //         {
  //           id: 4,
  //           title: "Primer Programa",
  //           description: "Escribir y ejecutar el primer programa 'Hola Mundo'.",
  //           video: "https://www.youtube.com/embed/8ClovCpjc5U",
  //         },
  //         {
  //           id: 5,
  //           title: "Resolución de Problemas y Algoritmos",
  //           description: "Introducción a la lógica algorítmica.",
  //           video: "https://www.youtube.com/embed/sQLn2asTefo",
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: "Conceptos Básicos de Programación",
  //       description:
  //         "Aprender a trabajar con variables, operadores y depuración.",
  //       image: "/svg/topics/1.svg",
  //       duration: 80,
  //       lessons: [
  //         {
  //           id: 1,
  //           title: "Variables y Tipos de Datos",
  //           description:
  //             "Tipos de datos y cómo definir variables en un programa.",
  //           video: "https://www.youtube.com/embed/_lNtSsEcnwc",
  //         },
  //         {
  //           id: 2,
  //           title: "Operadores y Expresiones",
  //           description:
  //             "Uso de operadores aritméticos, lógicos y de comparación.",
  //           video: "https://www.youtube.com/embed/YNoBAnrEScI",
  //         },
  //         {
  //           id: 3,
  //           title: "Entrada y Salida de Datos",
  //           description: "Interacción con el usuario y recepción de datos.",
  //           video: "https://www.youtube.com/embed/xfDw-4jAflQ",
  //         },
  //         {
  //           id: 4,
  //           title: "Comentarios y Buenas Prácticas",
  //           description: "Documentación de código y uso de comentarios.",
  //           video: "https://www.youtube.com/embed/zoq1Yoqmbe4",
  //         },
  //         {
  //           id: 5,
  //           title: "Errores y Depuración",
  //           description: "Cómo identificar y corregir errores en el código.",
  //           video: "https://www.youtube.com/embed/BPWpialFWvM",
  //         },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       title: "Estructuras de Control de Flujo",
  //       description: "Aplicación de condicionales y bucles en programación.",
  //       image: "/svg/topics/1.svg",
  //       duration: 80,
  //       lessons: [
  //         {
  //           id: 1,
  //           title: "Condicionales: IF, ELSE y SWITCH",
  //           description: "Uso de condicionales para control de decisiones.",
  //           video: "",
  //         },
  //         {
  //           id: 2,
  //           title: "Bucles: FOR y WHILE",
  //           description: "Repetición de tareas con bucles.",
  //           video: "",
  //         },
  //         {
  //           id: 3,
  //           title: "Control de Flujo Avanzado",
  //           description: "Uso de palabras clave como `break` y `continue`.",
  //           video: "",
  //         },
  //         {
  //           id: 4,
  //           title: "Ejercicios de Control de Flujo",
  //           description: "Práctica con ejercicios de flujo de control.",
  //           video: "",
  //         },
  //         {
  //           id: 5,
  //           title: "Aplicación Práctica",
  //           description:
  //             "Desarrollo de un programa aplicando el flujo de control.",
  //           video: "",
  //         },
  //       ],
  //     },
  //     {
  //       id: 4,
  //       title: "Funciones y Modularidad",
  //       description:
  //         "Aprende sobre funciones, modularización y alcance de variables.",
  //       image: "/svg/topics/1.svg",
  //       duration: 80,
  //       lessons: [
  //         {
  //           id: 1,
  //           title: "Introducción a Funciones",
  //           description: "Qué son las funciones y cómo se estructuran.",
  //           video: "https://www.youtube.com/embed/MiH3pbP4EFc",
  //         },
  //         {
  //           id: 2,
  //           title: "Creación de Funciones",
  //           description: "Cómo crear funciones y usar parámetros.",
  //           video: "https://www.youtube.com/embed/e3EyqGnb6XM&t=23s",
  //         },
  //         {
  //           id: 3,
  //           title: "Alcance de las Variables",
  //           description: "Entender el alcance de variables en funciones.",
  //           video: "https://www.youtube.com/embed/noTEo898-Ks",
  //         },
  //         {
  //           id: 4,
  //           title: "Funciones Integradas y Librerías",
  //           description: "Uso de funciones predefinidas y librerías.",
  //           video: "https://www.youtube.com/embed/V4ZxnSYly-Y",
  //         },
  //         {
  //           id: 5,
  //           title: "Ejercicio de Modularización",
  //           description: "Dividir un programa en funciones y módulos.",
  //           video: "https://www.youtube.com/embed/zBIG4D8KhWc",
  //         },
  //       ],
  //     },
  //     {
  //       id: 5,
  //       title: "Estructuras de Datos Básicas",
  //       description: "Uso de listas, diccionarios, conjuntos y más.",
  //       image: "/svg/topics/1.svg",
  //       duration: 80,
  //       lessons: [
  //         {
  //           id: 1,
  //           title: "Listas y Arreglos",
  //           description: "Cómo crear y manipular listas o arreglos.",
  //           video: "https://www.youtube.com/embed/_FsRvYZNbnc",
  //         },
  //         {
  //           id: 2,
  //           title: "Diccionarios y Mapas",
  //           description: "Almacenamiento de pares de clave-valor.",
  //           video: "https://www.youtube.com/embed/nkGEPGI8020",
  //         },
  //         {
  //           id: 3,
  //           title: "Conjuntos y Tuplas",
  //           description: "Estructuras de datos para programación eficiente.",
  //           video: "https://www.youtube.com/embed/vImkxi6wCN0",
  //         },
  //         {
  //           id: 4,
  //           title: "Operaciones con Estructuras de Datos",
  //           description: "Manipulación de estructuras de datos comunes.",
  //           video: "https://www.youtube.com/embed/5Y7T6ubaq04",
  //         },
  //         {
  //           id: 5,
  //           title: "Ejercicio Integrado",
  //           description:
  //             "Desarrollar un programa que combine estructuras de datos.",
  //           video: "https://www.youtube.com/embed/Df-sgxGzyTg",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   starPoints: 4.9,
  //   image: "/svg/course2.svg",
  //   title: "Programación Avanzada",
  //   subtitle:
  //     "Desarrolla habilidades avanzadas y lleva tu código al siguiente nivel",
  //   description:
  //     "Este curso de Programación Avanzada está diseñado para aquellos que ya dominan los fundamentos y buscan profundizar en técnicas y conceptos avanzados de desarrollo de software.",
  //   price: 1250,
  //   duration: "200 hours",
  //   videoCount: 20,
  //   topicsCount: 5,
  //   topics: [
  //     {
  //       id: 1,
  //       title: "Programación Orientada a Objetos (POO) Avanzada",
  //       description:
  //         "Conceptos avanzados de POO, incluyendo herencia y polimorfismo.",
  //       image: "/svg/topics/1.svg",
  //       duration: 80,
  //       lessons: [
  //         {
  //           id: 1,
  //           title: "Revisión de Conceptos de POO",
  //           description: "Repaso de conceptos básicos de POO.",
  //           video: "https://www.youtube.com/embed/I848HdWjLMo",
  //         },
  //         {
  //           id: 2,
  //           title: "Herencia",
  //           description: "Lógica de herencia.",
  //           video: "https://www.youtube.com/embed/bblFTvuk4pY",
  //         },
  //         {
  //           id: 3,
  //           title: "Polimorfismo",
  //           description: "Lógica del polimorfismo.",
  //           video: "https://www.youtube.com/embed/bblFTvuk4pY",
  //         },
  //         {
  //           id: 4,
  //           title: "Encapsulación",
  //           description: "Lógica de encapsulamiento.",
  //           video: "https://www.youtube.com/embed/8aQSD36paWU&t=345s",
  //         },
  //         {
  //           id: 5,
  //           title: "Interfaces y Clases Abstractas",
  //           description: "Implementación de interfaces y clases abstractas.",
  //           video: "https://www.youtube.com/embed/Bj2ta9xv4cM",
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: "Programación Funcional",
  //       description: "Conceptos clave y uso de la programación funcional.",
  //       image: "/svg/topics/1.svg",
  //       duration: 80,
  //       lessons: [
  //         {
  //           id: 1,
  //           title: "Introducción a la Programación Funcional",
  //           description: "Comparación entre POO y programación funcional.",
  //           video: "https://www.youtube.com/embed/EsspMNzCLMk",
  //         },
  //         {
  //           id: 2,
  //           title: "Funciones de Orden Superior",
  //           description: "Uso de `map`, `filter` y `reduce`.",
  //           video: "https://www.youtube.com/embed/tP8JiVUiyDo",
  //         },
  //         {
  //           id: 3,
  //           title: "Closures y Funciones Lambda",
  //           description: "Comprensión de closures y lambdas.",
  //           video: "https://www.youtube.com/embed/xa8lhVwQBw4",
  //         },
  //         {
  //           id: 4,
  //           title: "Inmutabilidad y Efectos Secundarios",
  //           description: "Principios de inmutabilidad en código.",
  //           video: "https://www.youtube.com/embed/Ga3XXNAIPt0",
  //         },
  //         {
  //           id: 5,
  //           title: "Ejercicio Práctico",
  //           description: "Desarrollar una app usando programación funcional.",
  //           video: "https://www.youtube.com/embed/JsDiFHT99fM",
  //         },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       title: "Estructuras de Datos y Algoritmos Avanzados",
  //       description:
  //         "Implementación y uso de estructuras y algoritmos avanzados.",
  //       image: "/svg/topics/1.svg",
  //       duration: 80,
  //       lessons: [
  //         {
  //           id: 1,
  //           title: "Listas Enlazadas",
  //           description: "Cómo implementar listas.",
  //           video: "https://www.youtube.com/embed/qk67wS7WYxo",
  //         },
  //         {
  //           id: 2,
  //           title: "Árboles Binarios",
  //           description: "Cómo implementar árboles.",
  //           video: "https://www.youtube.com/embed/tBaOQeyXYqg",
  //         },
  //         {
  //           id: 3,
  //           title: "Algoritmos de Búsqueda y Ordenamiento",
  //           description: "Búsqueda binaria, quicksort y mergesort.",
  //           video: "https://www.youtube.com/embed/79I-zJsrp4Q",
  //         },
  //         {
  //           id: 4,
  //           title: "Grafos y Algoritmos de Camino Corto",
  //           description: "Exploración de grafos con Dijkstra.",
  //           video: "https://www.youtube.com/embed/gq3cTlBMJhs",
  //         },
  //         {
  //           id: 5,
  //           title: "Recursividad",
  //           description: "La magia de la recursividad.",
  //           video: "https://www.youtube.com/embed/yX5kR63Dpdw",
  //         },
  //       ],
  //     },
  //     {
  //       id: 4,
  //       title: "Manejo de Excepciones y Depuración",
  //       description:
  //         "Control de flujo con excepciones y técnicas de depuración.",
  //       image: "/svg/topics/1.svg",
  //       duration: 80,
  //       lessons: [
  //         {
  //           id: 1,
  //           title: "Conceptos de Manejo de Excepciones",
  //           description: "Diferencias entre errores y excepciones.",
  //           video: "https://www.youtube.com/embed/njd0bZiQDm0",
  //         },
  //         {
  //           id: 2,
  //           title: "Excepciones Personalizadas",
  //           description: "Creación de excepciones propias.",
  //           video: "https://www.youtube.com/embed/B6h6pIcj0WA",
  //         },
  //         {
  //           id: 3,
  //           title: "Herramientas de Depuración",
  //           description: "Uso de herramientas de depuración.",
  //           video: "https://www.youtube.com/embed/p-9peljl1u8",
  //         },
  //         {
  //           id: 4,
  //           title: "Errores en Funciones Asíncronas",
  //           description: "Errores en funciones asíncronas.",
  //           video: "https://www.youtube.com/embed/Jmmtd7ive_w",
  //         },
  //         {
  //           id: 5,
  //           title: "Funciones Asíncronas",
  //           description: "¿Cómo funcionan las Promises y Async/Await?.",
  //           video: "https://www.youtube.com/embed/rKK1q7nFt7M",
  //         },
  //       ],
  //     },
  //     {
  //       id: 5,
  //       title: "Patrones de Diseño",
  //       description:
  //         "Aplicación de patrones de diseño en desarrollo de software.",
  //       image: "/svg/topics/1.svg",
  //       duration: 80,
  //       lessons: [
  //         {
  //           id: 1,
  //           title: "Introducción a Patrones de Diseño",
  //           description: "Qué son y cómo benefician el desarrollo.",
  //           video: "https://www.youtube.com/embed/1QUhp7QIWv0",
  //         },
  //         {
  //           id: 2,
  //           title: "Patrón Singleton",
  //           description: "Patrones creacionales en proyectos.",
  //           video: "https://www.youtube.com/embed/Z7Z-PJEIEsc",
  //         },
  //         {
  //           id: 3,
  //           title: "Patrón Factoría",
  //           description: "Patrones creacionales en proyectos.",
  //           video: "https://www.youtube.com/embed/lLvYAzXO7Ek",
  //         },
  //         {
  //           id: 4,
  //           title: "Patrón Observador",
  //           description: "Aplicación de patrones estructurales.",
  //           video: "https://www.youtube.com/embed/HFkZb1g8faA",
  //         },
  //         {
  //           id: 5,
  //           title: "Patrón MVC, MVP y MVVM",
  //           description: "Organización de aplicaciones con estos patrones.",
  //           video: "https://www.youtube.com/embed/S3h-u4M1q3w",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
