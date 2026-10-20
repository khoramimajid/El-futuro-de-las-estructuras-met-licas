// Datos del taller: grupos, temas y rúbrica.
// Si cambia una pareja, edítela aquí Y en apps-script/Code.gs (lista GRUPOS).
window.TALLER = {
  asignatura: 'Taller Estructural II: Estructuras Metálicas',
  titulo: 'El futuro de las estructuras metálicas',
  docente: 'Dr. Majid Khorami',

  grupos: [
    { n: 1,  tema: 'Acero reciclado, economía circular y huella de carbono',              integrantes: ['Castillo Zumba José Luis', 'Ortiz Martinez Alisson Nicole'] },
    { n: 2,  tema: 'Diseño para el desmontaje y la reutilización',                         integrantes: ['Flores Jiménez Yanina Cristel', 'Chuquirima Torres Mao Sebastian'] },
    { n: 3,  tema: 'Estructuras híbridas acero–madera y acero–hormigón',                   integrantes: ['Rueda Joel', 'Vargas Cueva Albert Sebastian'] },
    { n: 4,  tema: 'Fabricación robotizada y soldadura automatizada',                      integrantes: ['Bastidas Encalada Freddy David', 'Lopez Espinoza Francisco Andres'] },
    { n: 5,  tema: 'Impresión 3D en metal aplicada a la construcción',                     integrantes: ['Apolo Totoy Genesis Ainhoa', 'Aguilar Camacho Pablo David'] },
    { n: 6,  tema: 'Diseño paramétrico y optimización de la forma estructural',            integrantes: ['Vargas Ceron Sahid Fabian', 'Ulloa Carvajal Cinthya Elizabeth'] },
    { n: 7,  tema: 'Construcción modular y prefabricada en acero',                         integrantes: ['Melo Chiliquinga Dylan Patricio', 'Roldán Reyes Ángel Daniel'] },
    { n: 8,  tema: 'Grandes luces: cubiertas, estadios, aeropuertos',                      integrantes: ['Ramos Agreda Maria Jose', 'Sanchez Carchipulla Melany Sofia'] },
    { n: 9,  tema: 'Resiliencia sísmica: BRB, disipadores y fusibles reemplazables',       integrantes: ['Rodriguez Mina Alexander Fabrizio', 'Tolagasi Zambrano Jose Sebastian'] },
    { n: 10, tema: 'BIM, gemelos digitales y monitoreo con sensores',                      integrantes: ['Lamina Pillajo Damiano Ricardo', 'Toalombo Marlon'] },
    { n: 11, tema: 'Acero en vivienda social y de emergencia en Ecuador',                  integrantes: ['Velastegui Chauza Wendy Fernanda', 'Sevilla Llori Carolina Walesca'] },
    { n: 12, tema: 'Rehabilitación y ampliación vertical de edificios con acero',          integrantes: ['Moreira Cajas Jennifer Evelyn', 'Borja Molina Tatiana Abigail'] },
  ],

  // ---------------- RÚBRICA ----------------
  // 5 criterios × 5 niveles. Cada criterio vale 2 puntos:
  // nivel 5 = 2,0 · nivel 4 = 1,6 · nivel 3 = 1,2 · nivel 2 = 0,8 · nivel 1 = 0,4
  // Nota final = suma de niveles × 0,4  →  máximo 25 × 0,4 = 10
  // Puede cambiar los textos de "niveles" y "descriptores" sin tocar el Apps Script.
  niveles: [
    { valor: 5, nombre: 'Excelente' },
    { valor: 4, nombre: 'Muy bueno' },
    { valor: 3, nombre: 'Bueno' },
    { valor: 2, nombre: 'Regular' },
    { valor: 1, nombre: 'Insuficiente' },
  ],
  criterios: [
    { id: 'c1', nombre: 'Dominio del tema',
      descriptores: {
        5: 'Explican con total seguridad qué es la tendencia y cómo funciona, sin leer.',
        4: 'Explican bien la tendencia, con pequeñas dudas.',
        3: 'Explican lo básico; leen en algunos momentos.',
        2: 'Explicación confusa o incompleta; leen casi todo.',
        1: 'No se entiende qué es la tendencia.' } },
    { id: 'c2', nombre: 'Proyecto real',
      descriptores: {
        5: 'Proyecto real bien elegido, con nombre, lugar, año y por qué es relevante.',
        4: 'Proyecto real bien explicado; falta algún dato.',
        3: 'Mencionan un proyecto real con poca explicación.',
        2: 'Ejemplo genérico, dudoso o sin datos.',
        1: 'No presentan un ejemplo real.' } },
    { id: 'c3', nombre: 'Arquitectura y Ecuador',
      descriptores: {
        5: 'Explican qué cambia para el arquitecto y analizan con argumentos si es viable en Ecuador (sismo, costo, mano de obra).',
        4: 'Relación clara con la arquitectura y con Ecuador, con poco análisis.',
        3: 'Mencionan la arquitectura o Ecuador de forma general.',
        2: 'Relación débil o superficial.',
        1: 'No lo relacionan con la arquitectura ni con Ecuador.' } },
    { id: 'c4', nombre: 'Claridad y croquis',
      descriptores: {
        5: 'Exposición muy ordenada; el croquis explica el concepto por sí solo.',
        4: 'Exposición clara; croquis correcto.',
        3: 'Se entiende, pero con algo de desorden; croquis básico.',
        2: 'Difícil de seguir; croquis confuso.',
        1: 'Desordenada y sin croquis.' } },
    { id: 'c5', nombre: 'Tiempo y preguntas',
      descriptores: {
        5: 'Respetan los 2 minutos, responden con seguridad y participan ambos.',
        4: 'Tiempo adecuado y buenas respuestas; participación algo desigual.',
        3: 'Se pasan un poco del tiempo o responden a medias.',
        2: 'Se pasan mucho del tiempo o responden mal.',
        1: 'No respetan el tiempo ni responden la pregunta.' } },
  ],
  puntosPorNivel: 0.4,   // 5 niveles × 0,4 = 2 puntos por criterio
};
