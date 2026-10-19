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

  // Rúbrica sencilla: 5 criterios × 2 puntos = 10 puntos
  criterios: [
    { id: 'c1', nombre: 'Dominio del tema',        descripcion: 'Explican con seguridad qué es la tendencia y cómo funciona.' },
    { id: 'c2', nombre: 'Proyecto real',           descripcion: 'Presentan un proyecto real y lo explican bien.' },
    { id: 'c3', nombre: 'Arquitectura y Ecuador',  descripcion: 'Explican qué cambia para el arquitecto y si es viable en Ecuador.' },
    { id: 'c4', nombre: 'Claridad y croquis',      descripcion: 'La exposición es clara y el croquis se entiende.' },
    { id: 'c5', nombre: 'Tiempo y preguntas',      descripcion: 'Respetan los 2 minutos y responden bien la pregunta.' },
  ],
  niveles: [
    { valor: 0, nombre: 'No cumple' },
    { valor: 1, nombre: 'En parte' },
    { valor: 2, nombre: 'Cumple bien' },
  ],
};
