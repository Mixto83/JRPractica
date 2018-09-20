# GAME DESIGN DOCUMENT

## CONCEPTO
### TÍTULO 
**Völva's Chronicle**
### ESTUDIO
**Edda Games**
### PLATAFORMA
**PC**
### VERSION DEL DOCUMENTO
**1.2**
### GENERO
Plataformas de scroll vertical.
### SINOPSIS DE JUGABILIDAD Y CONTENIDO
Cada jugador tiene como objetivo alcanzar el final del nivel antes que su contrincante. Cada uno comenzará la partida en su pantalla y no podrá interactuar con el personaje de su oponente, sino que solo verá una silueta que indique dónde se encuentra y qué acciones está realizando.
### LICENCIA
El videojuego está ambientado en la mitología nórdica, por lo que se busca realizar una representación de esta tanto a nivel de historia como a nivel artístico. Los acontecimientos que ocurren en el juego, así como los personajes involucrados, están extraídos de los poemas y leyendas de esta mitología, adaptándolos de la manera más fiel posible, pero con las licencias necesarias para adaptar ciertas situaciones a la jugabilidad escogida.

### HISTORIA
La historia, narrada por una völva a Odín, cuenta cómo la ardilla **Ratatösk** está desatando un conflicto entre el **águila sin nombre** y el dragón **Nidhögg**, provocando una disputa entre ellos que da lugar a una competición en la que ambos parten de la zona intermedia del árbol **Yggdrasil**: Nidhögg intenta llegar a las raíces de para roerlas y con ello producir el Ragnarök, mientras que el águila busca llegar a la copa del árbol para comunicar a Freyja las intenciones de Nidhögg, la cual intervendrá explicando al dragón que todo es un engaño orquestado por Ratatösk. De esta manera, la conclusión de la historia será diferente en función de qué jugador se haga con la victoria: la victoria de Nidhögg desatará el Ragnarök, mientras que la del aguila solucionará el malentendido y pondrá fin al conflicto.

### MECANICAS
La mecánica principal de la que se valdrán los jugadores es, como en todos los videojuegos del género, del salto. Cada personaje podrá realizar hasta tres saltos seguidos antes de aterrizar en el suelo, consiguiendo así impulsarse hacia plataformas más elevadas y acercarse a la meta. Además de saltar, los personajes se podrán mover lateralmente por el escenario, así como hacer uso de la habilidad del _dash_: esta servirá para dar un mayor impulso y velocidad a las acciones, permitiendo llegar a sitios que de otra manera serían imposibles de alcanzar.

Para que no se abuse de ellos, tanto el _dash_ como la posibilidad de hacer dobles y triples saltos no se pueden utilizar de manera gratuita, sino que consumen una determinada cantidad de estamina, la cual se recargará de manera progresiva cuando el personaje se encuentre en reposo. De esta manera se establece un **sistema de riesgo-recompensa-castigo**, incentivando a los jugadores a aprovechar estas habilidades para ganar la carrera, pero obligándolos a ser cautos y gestionar sus recursos de forma moderada para obtener ventaja. Un ejemplo de cómo puede impactar el sistema de estamina: en un tramo donde todas las plataformas pueden ser superadas mediante el uso del salto simple, un jugador puede verse tentado a pasar rápido por ahí haciendo uso del triple salto y el dash, obteniendo ventaja sobre el jugador que decida no gastar parte de su estamina tan rápido. Pero tras este tramo, puede presentarse otro donde haya una plataforma que solo pueda ser alcanzada mediante un triple salto: el jugador que ha gastado parte de su estamina se ve obligado a esperar a que esta se recargue, mientras que el otro podrá seguir su recorrido en cuanto llegue a esa zona, equilibrando así la partida.

Además de los saltos aéreos y el _dash_, los personajes podrán hacer uso de un salto de pared, mediante el cual chocarán con una pared (los escenarios siempre contarán con paredes a ambos lados de la pantalla) y se podrán impulsar más que como lo harían con un salto normal o cambiar la dirección a la que impulsarse (por ejemplo, un personaje puede saltar contra la pared e impulsarse lateralmente o en diagonal). Este salto de pared consume uno de los 3 saltos consecutivos que puede utilizar el personaje. Esta mecánica permite al jugador interactuar con el entorno donde se encuentra, probar diferentes formas de alcanzar determinadas plataformas y enriquece el diseño de niveles.

Las plataformas no serán todas iguales ni en forma, ni en tamaño ni en funcionalidad. Habrá plataformas que se rompan a los pocos segundos de posarse sobre ellas, otras con movimientos verticales u horizontales, otras con trampas y otras permitirán dar un salto más alto. Habrá tramos con plataformas más pequeñas y otros donde tengan mayor longitud o sean lo suficientemente anchas como para realizar en ellas un salto de pared. Algunas plataformas, también, serán rectangulares, mientras otras pueden tener forma de T, estar escalonadas…

En resumen, las mecánicas del juego buscan que los jugadores tengan varias formas de afrontar los niveles y que todas ellas den lugar a una jugabilidad balanceada donde se recompense jugar de manera ágil pero cautelosa, así como también se recompensa al jugador experimentado que pueda conocer los mejores caminos y estrategias a realizar en el desarrollo de un nivel.

### TECNOLOGIA
Implementación mediante los lenguajes de programación Javascript y Java apoyados en el motor Phaser.

### PUBLICO
El juego está dirigido a jugadores competitivos que disfruten de plataformas que exijan habilidad para superar los retos. Además, gracias a su ambientación, puede atraer a un público que tenga interés en la mitología nórdica.

## HISTORIAL DE VERSIONES
v1.0 - Publicación del documento con ideas iniciales

v1.1 - Extensión del documento de acuerdo con el esquema previamente acordado y establecido

v1.2 - Enlace al Trello de proyecto y modificación del apartado _miembros_

## MECANICA DEL JUEGO

### CAMARA
La cámara será de vista lateral, alejada lo suficiente de los personajes para poder ver parte del escenario y permitir a maniobrar al jugador. Aún así, esta cámara sigue al personaje que controla el jugador, desplazándose lateralmente hasta alcanzar uno de los bordes del escenario.

### CONTROLES
El jugador controlar los movimientos, así como el salto y sus direcciones, mediante las habituales teclas W, A, S y D. Además, con el botón de espacio activará la habilidad del dash.

### PUNTUACION
No se establecerá un sistema de puntuación. Solo existen los estados en el que un jugador pierde y otro gana cada uno de los distintos niveles.

### SISTEMA DE GUARDADO
El juego no cuenta con ningún sistema de guardado, ya que está pensado para partidas rápidas entre dos jugadores, que puedan resolverse entre 8 y 12 minutos, dependiendo de la habilidad de estos.

## ESTADOS DEL JUEGO Y PANTALLAS
La secuencia de pantallas del juego es sencilla. De la pantalla de título inicial se pasa a la introducción de la historia mediante imágenes estáticas (secuencia omisible mediante la pulsación de un botón) y tras ello inicia la partida para los dos jugadores en dos pantallas divididas. Al finalizar cada nivel se muestra una pequeña secuencia de historia y se notifica la recompensa al ganador. Al terminar el último nivel se reproducirá el final de juego.

## INTERFAZ
Se implementará una interfaz diegética, donde los elementos relevantes para el desarrollo de la partida, como la estamina restante de un jugador, se reflejarán en el propio mundo del juego en lugar de simplemente mostrarse por pantalla.

## PERSONAJES

### PERSONAJES CONTROLABLES

**Nidhögg**: El dragón que vive en Niflheim y que se dedica a roer las raíces de Yggdrasil hasta que llegue el Ragnarök y destruya todo.

**Águila**: El águila sin nombre, en cuyos ojos reside el halcón **Veðrfölnir**, que reside en lo más alto de Yggdrasil.

### PERSONAJES NO CONTROLABLES

**Ratatösk**: La ardilla que se dedica a recorrer Yggdrasil comunicando a Nidhögg con el águila. Es la desencadenante de la disputa entre ambos en la historia.

**Odín**: El Dios de la sabiduría, residente en Asgard y Dios supremo de la mitología nórdica. Es el receptor de la historia que se cuenta en el juego.

**Völva**: La vidente que narra la historia a Odín.

## ITEMS Y HABILIDADES
En adición a las mecánicas de los propios personajes, a lo largo de los niveles se encontrarán repartidos diferentes elementos que otorgarán pequeñas ventajas en forma de power-ups que harán ciertas modificaciones durante un periodo de tiempo. Estos power-ups pueden ser de dos tipos: runas y ayudantes.

### RUNAS
Rocas místicas repartidas por el escenario. Se distinguen por símbolos, que representan a diferentes dioses de la mitología nórdica, presentando hasta 5 tipos diferentes:

**Runa de Hermodr**: Aumenta la velocidad del jugador que la obtiene.

**Runa de Njord**: Permite saltar más alto al jugador que la obtiene.

**Runa de Skadi**: Ralentiza al oponente del jugador que la obtiene.

**Runa de Tir**: Proporciona un escudo de invulnerabilidad para el próximo golpe que reciba.

**Runa de Bragi**: Incrementa la estamina del jugador que la obtiene

### AYUDANTES
Manifestación de ciertos personajes de la mitología nórdica que aplicarán un efecto más poderoso que el de las runas.

**Ratatösk**: la ardilla confundirá a los personajes y permitirá invertir los controles del oponente. La primera vez que un jugador interactúa con esta ardilla, se intercambiarán las teclas _A_ y _D_ del contrario. La segunda vez que ese mismo jugador encuentre a la ardilla, se intercambiarán las teclas _W_ y _S_.

**Los 4 ciervos**: En la Edda poética se menciona a 4 ciervos que habitan en Yggdrasil, cada uno de estos podrá aparecer en el escenario y aplicar un efecto propio. **Dáinn** impulsará al jugador a una gran altura, **Dvalinn** hará lo mismo, pero con los dos jugadores, **Duneyrr** impulsará al adversario hacia la izquierda y **Duraþrór** lo hará hacia la derecha. Estos ciervos serán totalmente indistinguibles a nivel estético, por lo que el jugador no sabrá qué efecto se va a aplicar hasta que interactúe con el, añadiendo factor azar y reforzando el sistema de riesgo-recompensa-castigo.

**Heimdall**: En un punto concreto de cada nivel, estará presente este conocido personaje de la mitología nórdica, el guardián de la entrada Asgard. Heimdall otorgará al jugador la capacidad de abrir un portal dimensional que le llevará a la pantalla del oponente, pudiendo interactuar con él. Si el jugador invasor se acerca lo bastante a su oponente, le golpeará (de manera automática y sin necesidad de pulsar ninguna tecla adicional) pudiendo impulsarlo contra las paredes o el suelo, lo cual dejará al rival noqueado unos instantes y permitirá al jugador invasor obtener gran ventaja en la carrera. El teletransporte durará unos cuantos segundos, y pasado ese tiempo (o tras noquear al rival) el jugador volverá a su pantalla. Se refuerza así el sistema de riesgo-recompensa-castigo, ya que en caso de no poder golpear al oponente, el invasor habrá perdido un tiempo considerable sin avanzar por su nivel.

## ENEMIGOS
Además de ayudas, a lo largo de los niveles también habrá esparcidos campamentos enemigos que atacarán al jugador lanzándole objetos arrojadizos como flechas. Si uno de estos objetos impacta sobre el jugador, le hará retroceder y, por tanto, perder tiempo. Pero si el jugador consigue esquivar a estos enemigos y acercarse lo suficiente, tendrá lugar una secuencia de combate (también automática, como en la invasión), eliminando a los enemigos y obteniendo un beneficio en forma de runa o de ayudante. La dificultad para esquivar a los enemigos y alcanzarlos irá en función de lo poderosa que sea la recompensa por derrotarlos.

## PROGRESO DEL JUEGO
Al comenzar la partida, a cada jugador se le asignará uno de los dos personajes controlables: el dragón Nidhogg o el águila sin nombre. El objetivo de ambos es llegar al final nivel antes que el otro. Ambos jugadores comienzan en el punto medio del árbol Yggdrasil y cada uno de los 3 niveles inicialmente propuestos, cuya dificultad aumentará gradualmente, serán simétricos en cuanto a la distribución de las plataformas para ambos jugadores, solamente diferenciándose en ambientación y estética. Esta diferencia se justifica a nivel de historia: uno de los personajes está ascendiendo hasta la copa de Yggdrasil, mientras que el otro está descendiendo a las raíces, por lo que acaban en dos lugares diferentes.
### NIVEL 1
Servirá a modo de introducción para que los jugadores se familiaricen poco a poco con las mecánicas. Ambas pantallas comenzarán con una estética similar que se irá diferenciando conforme se alcance mayor altura. La dificultad no será muy exigente, para poder desarrollar una correcta curva de aprendizaje. Al finalizar el nivel, el ganador obtendrá una runa cuyo efecto se le aplicará al comienzo del siguiente nivel.
### NIVEL 2
Contará con tramos más complicados, una distribución de plataformas que premie el uso y la gestión de los saltos extra y el dash, así como varias bifurcaciones con dificultad diferente y con varias runas y asistentes distribuidos en diferentes zonas. En este nivel las diferencias estéticas serán mucho más notables: el jugador 1 se está acercando a la copa, por lo que la luz, los colores cálidos y suaves y un acabado más limpio estarán presentes, mientras que el jugador 2 se encontrará con un entorno más sucio y oscuro, debido al descenso hacia las raíces del árbol. Al finalizar el nivel, el ganador obtendrá una runa cuyo efecto se le aplicará al comienzo del siguiente nivel.
### NIVEL 3
Aumentará la complejidad de las plataformas y presentará bifurcaciones donde pueda no haber salida, obligando a retroceder lo más rápido posible y premiando tanto al jugador experimentado que conoce los caminos como al jugador habilidoso que domine los controles lo suficiente como para recortar tiempo en estos retrocesos. Estéticamente se continuará lo presentado en el nivel anterior, encontrándose el jugador 1 con colores propios de la naturaleza y la vida, mientras que el jugador 2 estará en una zona oscura, con predominancia del negro y el rojo, la presencia de raíces muertas y mucha suciedad. Al finalizar el nivel, el jugador que haya llegado antes será el ganador definitivo de la partida y se reproducirá el final correspondiente a su personaje, independientemente del resultado de los dos niveles anteriores.

## GUION
El guion contará con la introducción del juego donde la völva narra a Odín los acontecimientos, así como con las secuencias entre niveles.

## LOGROS
Los logros que se obtienen son las recompensas de final de nivel, es decir, una runa para el jugador que sale vencedor de cada nivel.

## MUSICA Y SONIDO
Se utilizarán sonidos y melodías de licencia libre que sean apropiados para la ambientación del juego. Aún por concretar.

## ARTE
Se ha optado por un diseño artístico con personajes de baja estatura y rasgos sin excesivo detalle. Este estilo permite realizar animaciones simples, pero fluidas y con buen acabado.

Los personajes principales, Nidhogg y el águila, no serán jugables en su forma animal, sino en unas representaciones antropomórficas controladas por los jugadores. Serán similares en cuanto a complexión y tamaño, justificando así que sean iguales jugablemente, pese a que estéticamente se diferenciarán mediante sus cabezas y sus colores. Se seguirá el estilo de Puppet Animation con flash, similar al de juegos como Rayman Origins o Dust: An Elysian Tail.

En cuanto a los escenarios, estos se representarán de manera que sean fieles con la ambientación escogida. El árbol de Yggdrasil es de gran longitud y se rodea de diferentes reinos, por lo que en el escenario predominarán diferentes colores y detalles en función de en qué lugar se encuentren los personajes.

## IMAGENES DE CONCEPTO
Las imágenes se añadirán en la próxima versión del documento.

## POSIBLES AMPLIACIONES
Gracias a lo inmenso que es el universo desarrollado en la Mitología Nórdica y a la propia naturaleza del videojuego como plataformas, este puede verse ampliado de muchas formas diferentes.

En Yggdrasil existen 9 reinos diferentes, todos ellos con sus civilizaciones, clima y estética diferente, lo que daría lugar a muchos más niveles donde se pudiera dar variedad en la ambientación de los escenarios e incluso introducir mecánicas exclusivas, como power-ups propios e identificativos de cada reino.

Los reinos, a su vez, pueden contar diferentes historias alternativas a la principal a modo de ampliación, pudiendo narrar, por ejemplo, la guerra entre los Aesir (pertenecientes al reino de Asgard) y los Vanir (pertenecientes al reino de Vanaheim) o el Fimbulvetr como presagio de la llegada del Ragnarok. 

Asimismo, se podrían añadir enemigos a modo de jefes finales del nivel donde los personajes tuviesen que cooperar para derrotarlos. Estos enemigos pueden ser criaturas del folklore nórdico, como el dragón de Midgard Jörmungandr, los gigantes de Jötunheim, el no-muerto Draugr o el ciervo del Valhalla Eikþyrnir.

También existe la posibilidad de aumentar el número de personajes jugables y diferenciarlos más allá de lo estético con habilidades especiales. Estos personajes podrían ser pertenecientes a diferentes razas de los reinos de Yggdrasil, como los elfos oscuros o las valquirias.

Finalmente, y como idea prioritaria a implementar, de cara a mejorar la rejugabilidad del título los niveles podrían no estar dispuestos siempre de la misma forma, sino diviéndolos en tramos y que algunos de estos tramos presenten una disposición de plataformas y power-ups diferente en cada iteración del juego. No se trata de aleatorizar los elementos del escenario, sino de tener varios módulos distintos para un mismo tramo del nivel y que en cada iteración de un nivel se escoja uno aleatoriamente, haciendo que no todas las partidas sean iguales y alargando la vida útil del juego para el usuario.

## MIEMBROS DEL EQUIPO
Mario Aceituno Cordero - Arte - m.aceituno.2016@alumnos.urjc.es

Javier Albaráñez Martínez - Diseño, Arte, Programación - j.albaranez@alumnos.urjc.es

César Carbajo García - Diseño - c.carbajo.2016@alumnos.urjc.es

Juan Antonio Martín García - Diseño, Documentación - ja.martin.2016@alumnos.urjc.es

Los roles están abiertos.

## DETALLES DE PRODUCCIÓN
**Fecha de inicio**: 11/09/2018

**Fecha de finalización** (estimada): 09/12/2018
