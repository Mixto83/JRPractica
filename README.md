# GAME DESIGN DOCUMENT

## CONCEPTO
### TÍTULO 
**Völva's Chronicle**
### ESTUDIO
**Edda Games**
### PLATAFORMA
**PC**
### VERSION DEL DOCUMENTO
**3.0**
### ENLACES DE INTERES
[Trello del proyecto](https://trello.com/b/MT0ZZwHT/v%C3%B6lvas-chronicle)

[Google Drive del proyecto](https://drive.google.com/drive/folders/1p9iw1i5qh0eXT77hDkHL0a910geTfe1M?usp=sharing)
### GENERO
Plataformas de scroll vertical.
### SINOPSIS DE JUGABILIDAD Y CONTENIDO
Cada jugador tiene como objetivo alcanzar el final del nivel antes que su contrincante. Cada uno comenzará la partida en su pantalla y no podrá interactuar con el personaje de su oponente, sino que verá la pantalla del otro, pudiendo monitorizar su posición, el camino que toma o los objetos que consigue.
### LICENCIA
El videojuego está ambientado en la mitología nórdica, por lo que se busca realizar una representación de esta tanto a nivel de historia como a nivel artístico. Los acontecimientos que ocurren en el juego, así como los personajes involucrados, están extraídos de los poemas y leyendas de esta mitología, adaptándolos de la manera más fiel posible, pero con las licencias necesarias para adaptar ciertas situaciones a la jugabilidad escogida.
### HISTORIA
La historia, narrada por una völva a Odín, cuenta cómo la ardilla **Ratatösk** está desatando un conflicto entre el **águila sin nombre** y el dragón **Nidhögg**, provocando una disputa entre ellos que da lugar a una competición en la que ambos parten de la zona intermedia del árbol **Yggdrasil**: Nidhögg intenta llegar a las raíces para roerlas y con ello producir el Ragnarök, mientras que el águila busca llegar a la copa del árbol para comunicar a Freyja las intenciones de Nidhögg, la cual intervendrá explicando al dragón que todo es un engaño orquestado por Ratatösk. De esta manera, la conclusión de la historia será diferente en función de qué jugador se haga con la victoria: la victoria de Nidhögg desatará el Ragnarök, mientras que la del aguila solucionará el malentendido y pondrá fin al conflicto.
### MECANICAS
La mecánica principal de la que se valdrán los jugadores es, como en todos los videojuegos del género, el salto. Cada personaje podrá realizar hasta tres saltos seguidos antes de aterrizar en el suelo, consiguiendo así impulsarse hacia plataformas más elevadas y acercarse a la meta. Además de saltar, los personajes se podrán mover lateralmente por el escenario, así como podrán hacer uso de la habilidad del dash: esta servirá para dar un mayor impulso y velocidad a las acciones, permitiendo llegar a sitios que de otra manera serían imposibles de alcanzar.

Para que no se abuse de ello, el _dash_ no se puede utilizar de manera gratuita, sino que consume una determinada cantidad de estamina, la cual se recargará de manera progresiva cuando el personaje se encuentre en reposo. De esta manera se establece un **sistema de riesgo-recompensa-castigo**, incentivando a los jugadores a aprovechar esta habilidad para ganar la carrera, pero obligándolos a ser cautos y gestionar sus recursos de forma moderada para obtener ventaja. Un ejemplo de cómo puede impactar el sistema de estamina: en un tramo donde todas las plataformas pueden ser superadas mediante el uso del salto simple, un jugador puede verse tentado a pasar rápido por ahí haciendo uso del triple salto y el dash, obteniendo ventaja sobre el jugador que decida no gastar parte de su estamina tan rápido. Pero tras este tramo, puede presentarse otro donde haya una plataforma que solo pueda ser alcanzada mediante un _dash_ y varios saltos: el jugador que ha gastado parte de su estamina se ve obligado a esperar a que esta se recargue, mientras que el otro podrá seguir su recorrido en cuanto llegue a esa zona, equilibrando así la partida.

![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Bocetos_en_sucio/Boceto_mecanicas_movimiento_basicas.jpg "Mecánicas principales")

En resumen, las mecánicas del juego buscan que los jugadores tengan varias formas de afrontar los niveles y que todas ellas den lugar a una jugabilidad balanceada donde se recompense jugar de manera ágil pero cautelosa, así como también se recompensa al jugador experimentado que pueda conocer los mejores caminos y estrategias a realizar en el desarrollo de un nivel.
### TECNOLOGIA
Implementación mediante los lenguajes de programación Javascript y Java apoyados en el motor Phaser.
### PUBLICO
El juego está dirigido a jugadores competitivos que disfruten de plataformas que exijan habilidad para superar los retos. Además, gracias a su ambientación, puede atraer a un público que tenga interés en la mitología nórdica.

## HISTORIAL DE VERSIONES
v1.0 - Publicación del documento con ideas iniciales

v1.1 - Extensión del documento de acuerdo con el esquema previamente acordado y establecido

v1.2 - Enlace al Trello de proyecto y modificación del apartado _miembros_

v1.3 - Especificación de las características online

v1.4 - Adición de imágenes de muestra y revisión de redacción, maquetación y ortografía

v2.0 – Enlace al Google Drive del proyecto, redacción del guion, reporte de bugs y créditos de assets externos.

v2.1 - Diagrama de transición de escenas, inserción de imágenes _ingame_ y corrección de erratas.

v2.2 - Descripción de las escenas e inserción de varias imágenes.

v3.0 - Descripción del comportamiento del juego con APIREST, inserción del diagrama de la APIREST, actualización de capturas de pantalla y del diagrama de transición de escenas.

## MECANICA DEL JUEGO
### CAMARA
La cámara es de vista lateral, alejada lo suficiente de los personajes para poder ver parte del escenario y permitir a maniobrar al jugador. Aún así, esta cámara sigue al personaje que controla el jugador, desplazándose lateralmente hasta alcanzar uno de los bordes del escenario.
### CONTROLES
El jugador controlará los movimientos, así como el salto y sus direcciones, mediante las habituales teclas W, A, S y D. Además, con la tecla B activará la habilidad del dash.

En la implementación en modo local y de manera provisional en el modo online, el segundo jugador usará las flechas de dirección y la tecla 0 del numpad.
### PUNTUACION
No se establecerá un sistema de puntuación. Solo existen los estados en el que un jugador pierde y otro gana en cada uno de los distintos niveles. Sí se guardará el tiempo que ha tardado en terminarse el nivel.
### SISTEMA DE GUARDADO
El juego no cuenta con ningún sistema de guardado, ya que está pensado para partidas rápidas entre dos jugadores, que puedan resolverse entre 8 y 12 minutos, dependiendo de la habilidad de estos.

## ESTADOS DEL JUEGO Y PANTALLAS
Se adjunta el diagrama de secuencia de escenas:

![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Documentacion/Diagrama_Escenas.png "Diagrama de Escenas")

**Boot y Preload**: Escenas iniciales por las que solo se pasa cuando arranca el juego. Se cargan los assets mientras se le indica al jugador que debe esperar y se le sugiere poner el juego en pantalla completa.
![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Documentacion/Screens/LoadingScene.png "Pantalla de carga")

**Menu**: Pantalla inicial, donde se muestra el logo tanto del juego como del estudio. Al pulsar cualquier botón, se hace un fundido a negro y aparecen los botones de "Local" y "Online".
![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Documentacion/Screens/MenuSceneButtons.png "Pantalla de menú")

**Waiting**: Pantalla de espera, a la que solo accede el primer jugador que inicia una partida en el modo Online. Se le explica que va a manejar al águila y que está esperando a que entre el segundo jugador.
![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Documentacion/Screens/waiting.png "Pantalla de espera")

**Intro**: Escena introductoria que sirve para presentar la historia a los jugadores. Se puede omitir pulsando cualquier botón. Las partículas que adornan la escena se generan en posiciones aleatorias en cada pasada. En caso de jugar Online, no se omite la escena hasta que ambos jugadores hayan pulsado para saltarla, mostrándose un aviso en caso de haber pulsado.
![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Documentacion/Screens/avisoIntro.png "Pantalla de Intro")

**Niveles 1, 2, 3**: Las diferentes escenas donde se desarrolla el gameplay. Se va aumentando la dificultad y el número de enemigos y objetos progresivamente. En el apartado _Progreso del juego_ se explican en profundidad.
![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Documentacion/Screens/Nivel3Scene.png "Pantalla del Nivel 3")

**Reward**: Al terminar los niveles 1 y 2, el juego se dirige a la escena de recompensa, donde se anuncia el ganador, el tiempo que ha tardado en completar el nivel y el power-up que obtiene como recompensa. Se sale de esta escena pulsando la tecla Z (tendrán que pulsarla ambos jugadores en la partida Online)
![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Documentacion/Screens/RewardScene.png "Pantalla de Reward")

**Ending 1 y 2**: Cinemáticas finales del juego, en función del ganador. Se pueden omitir pulsando la tecla Z (tendrán que pulsarla ambos jugadores en la partida Online). Las partículas se generan aleatoriamente, como en la Intro.
![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Documentacion/Screens/Ending1Scene.png "Pantalla de Ending 1")
![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Documentacion/Screens/Ending2Scene.png "Pantalla de Ending 2")

**Credits**: Escena de créditos. Cuando estos terminan, se reinicia el juego y se vuelve a la pantalla de menú.
![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Documentacion/Screens/CreditsScene.png "Pantalla de Créditos")

## PERSONAJES
### PERSONAJES CONTROLABLES

![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Arte/dise%C3%B1o_nidhogg.png "Diseño Nidhögg")**Nidhögg**: El dragón que vive en Niflheim y que se dedica a roer las raíces de Yggdrasil hasta que llegue el Ragnarök y destruya todo.

![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Arte/dise%C3%B1o_aguila.png "Diseño águila")**Águila**: El águila sin nombre, en cuyos ojos reside el halcón **Veðrfölnir**, que reside en lo más alto de Yggdrasil.
### PERSONAJES NO CONTROLABLES

**Ratatösk**: La ardilla que se dedica a recorrer Yggdrasil comunicando a Nidhögg con el águila. Es la desencadenante de la disputa entre ambos en la historia.

**Odín**: El Dios de la sabiduría, residente en Asgard y Dios supremo de la mitología nórdica. Es el receptor de la historia que se cuenta en el juego.

**Völva**: La vidente que narra la historia a Odín.

**Freyja**: Una misteriosa diosa capaz de calmar a Nidhögg y evitar la tragedia del Ragnarök.

## ITEMS Y HABILIDADES
En adición a las mecánicas de los propios personajes, a lo largo de los niveles se encuentran repartidos diferentes elementos que otorgarán pequeñas ventajas en forma de power-ups que harán ciertas modificaciones durante un periodo de tiempo. Estos power-ups pueden ser de dos tipos: runas y ayudantes.
### RUNAS
Rocas místicas repartidas por el escenario. Se distinguen por símbolos, que representan a diferentes dioses de la mitología nórdica, presentando hasta 5 tipos diferentes:

![](https://github.com/AlbaranezJavier/JRPractica/blob/master/V%C3%B6lva%20Chronicle/assets/sprites/Runa_Hemodr.png "Runa de Hemodr")**Runa de Hermodr**: Aumenta la velocidad del jugador que la obtiene.

![](https://github.com/AlbaranezJavier/JRPractica/blob/master/V%C3%B6lva%20Chronicle/assets/sprites/Runa_Njord.png "Runa de Njord")**Runa de Njord**: Permite saltar más alto al jugador que la obtiene.

![](https://github.com/AlbaranezJavier/JRPractica/blob/master/V%C3%B6lva%20Chronicle/assets/sprites/Runa_Skadi.png "Runa de Skadi")**Runa de Skadi**: Ralentiza al oponente del jugador que la obtiene.

![](https://github.com/AlbaranezJavier/JRPractica/blob/master/V%C3%B6lva%20Chronicle/assets/sprites/Runa_Tir.png "Runa de Tir")**Runa de Tir**: Proporciona un escudo de invulnerabilidad para evitar el próximo ataque del jugador oponente.

![](https://github.com/AlbaranezJavier/JRPractica/blob/master/V%C3%B6lva%20Chronicle/assets/sprites/Runa_Bragi.png "Runa de Bragi")**Runa de Bragi**: Incrementa la estamina del jugador que la obtiene.


### AYUDANTES
Manifestación de ciertos personajes de la mitología nórdica que aplicarán un efecto más poderoso que el de las runas.

![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Arte/dise%C3%B1o_ratatosk.png "Diseño Ratatösk")**Ratatösk**: la ardilla confundirá a los personajes y permitirá invertir los controles del oponente. La primera vez que un jugador interactúa con esta ardilla, se intercambiarán las teclas _A_ y _D_ del contrario. La segunda vez que ese mismo jugador encuentre a la ardilla, se intercambiarán las teclas _W_ y _S_.

![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Arte/dise%C3%B1o_ciervos.png "Diseño Ciervos")**Los 4 ciervos**: En la Edda poética se menciona a 4 ciervos que habitan en Yggdrasil, cada uno de estos podrá aparecer en el escenario y aplicar un efecto propio. **Dáinn** impulsará al jugador a una gran altura, **Dvalinn** hará lo mismo, pero con los dos jugadores, **Duneyrr** impulsará al adversario hacia la izquierda y **Duraþrór** lo hará hacia la derecha. Estos ciervos serán totalmente indistinguibles a nivel estético, por lo que el jugador no sabrá qué efecto se va a aplicar hasta que interactúe con el, añadiendo factor azar y reforzando el sistema de riesgo-recompensa-castigo.

![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Arte/dise%C3%B1o_heimdall.png "Diseño Heimdall")**Heimdall**: En un punto concreto de cada nivel, estará presente este conocido personaje de la mitología nórdica, el guardián de la entrada Asgard. Heimdall otorgará al jugador la capacidad de abrir un portal dimensional que le llevará a la pantalla del oponente, pudiendo interactuar con él. Si el jugador invasor se acerca lo bastante a su oponente, le golpeará (de manera automática y sin necesidad de pulsar ninguna tecla adicional) pudiendo impulsarlo contra las paredes o el suelo, lo cual dejará al rival noqueado unos instantes y permitirá al jugador invasor obtener gran ventaja en la carrera. El teletransporte durará unos cuantos segundos, y pasado ese tiempo (o tras noquear al rival) el jugador volverá a su pantalla. Se refuerza así el sistema de riesgo-recompensa-castigo, ya que en caso de no poder golpear al oponente, el invasor habrá perdido un tiempo considerable sin avanzar por su nivel.

## ENEMIGOS
Además de ayudas, a lo largo de los niveles también hay esparcidos enemigos que atacarán al jugador lanzándole objetos arrojadizos como flechas. Si uno de estos objetos impacta sobre el jugador, le hará retroceder y, por tanto, perder tiempo. Pero si el jugador consigue esquivar a estos enemigos y acercarse lo suficiente, tendrá lugar una secuencia de combate, eliminando a los enemigos y obteniendo un beneficio en forma de runa o de ayudante. La dificultad para esquivar a los enemigos y alcanzarlos irá en función de lo poderosa que sea la recompensa por derrotarlos.

![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Arte/dise%C3%B1o_enemigo_1.png "Enemigo 1")![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Arte/dise%C3%B1o_enemigo_2.png "Enemigo 2")

## PROGRESO DEL JUEGO
Al comenzar la partida, a cada jugador se le asigna uno de los dos personajes controlables: el dragón Nidhogg o el águila sin nombre. El objetivo de ambos es llegar al final del nivel antes que el otro. Ambos jugadores comienzan en el punto medio del árbol Yggdrasil y cada uno de los 3 niveles inicialmente propuestos, cuya dificultad aumenta gradualmente, siendo simétricos en cuanto a la distribución de las plataformas para ambos jugadores, solamente diferenciándose en ambientación y estética. Esta diferencia se justifica a nivel de historia: uno de los personajes está ascendiendo hasta la copa de Yggdrasil, mientras que el otro está descendiendo a las raíces, por lo que acaban en dos lugares diferentes.

Las imágenes que se muestran a continuación son imágenes _ingame_ del desarrollo de una partida, mostrando además elementos como el _dash_ o cómo funciona el power-up de Heimdall.

![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Documentacion/Screens/dash.png)

![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Documentacion/Screens/invasion.png )

### NIVEL 1
Servirá a modo de introducción para que los jugadores se familiaricen poco a poco con las mecánicas. Ambas pantallas comenzarán con una estética similar que se irá diferenciando conforme se alcance mayor altura. La dificultad no será muy exigente, para poder desarrollar una correcta curva de aprendizaje. Al finalizar el nivel, el ganador obtendrá una runa cuyo efecto se le aplicará al comienzo del siguiente nivel.
![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Documentacion/Screens/Nivel1Scene.png )

### NIVEL 2
Contará con tramos más complicados, una distribución de plataformas que premie el uso y la gestión de los saltos extra y el dash, así como varias bifurcaciones con dificultad diferente y con varias runas y asistentes distribuidos en diferentes zonas. En este nivel las diferencias estéticas serán mucho más notables: el jugador 1 se está acercando a la copa, por lo que la luz, los colores cálidos y suaves y un acabado más limpio estarán presentes, mientras que el jugador 2 se encontrará con un entorno más sucio y oscuro, debido al descenso hacia las raíces del árbol. Al finalizar el nivel, el ganador obtendrá una runa cuyo efecto se le aplicará al comienzo del siguiente nivel.
![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Documentacion/Screens/Nivel2Scene.png )

### NIVEL 3
Aumentará la complejidad de las plataformas y presentará bifurcaciones donde pueda no haber salida, obligando a retroceder lo más rápido posible y premiando tanto al jugador experimentado que conoce los caminos como al jugador habilidoso que domine los controles lo suficiente como para recortar tiempo en estos retrocesos. Estéticamente se continuará lo presentado en el nivel anterior, encontrándose el jugador 1 con colores propios de la naturaleza y la vida, mientras que el jugador 2 estará en una zona oscura y en presencia de raíces muertas y mucha suciedad. Al finalizar el nivel, el jugador que haya llegado antes será el ganador definitivo de la partida y se reproducirá el final correspondiente a su personaje, independientemente del resultado de los dos niveles anteriores.
![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Documentacion/Screens/Nivel3Scene.png )

## GUION
El guion se ha redactado para las escenas de introducción y de los dos finales.

### GUION DE ESCENA DE INTRODUCCIÓN
ODÍN: ¿A qué es debida vuestra presencia, Völva?

VÖLVA: Gran Odín, ¿querríais vos escuchar la historia de cómo cambió para siempre el destino del árbol Yggdrasil y de todos los reinos que existen en él?

ODÍN: Tienes mi atención. Es mi deber conocer todo lo que acontece en estos reinos para protegerlos.

VÖLVA: Todo comenzó por obra de la ardilla Ratatösk, que con sus maquinaciones consiguió engañar al dragón Nidhögg y al águila sin nombre. Consiguió enemistarlos e involucrarlos en una competición.

ODÍN: ¿En qué consistió dicha competición?

VÖLVA: Con el objetivo de roer las raíces de Yggdrasil para desatar el Ragnarök y acabar con todo, Nidhögg comenzó a descender por el árbol. A su vez, el águila inició su ascenso para avisar a la diosa Freyja y que esta evitase la catástrofe.

ODÍN: ¿Y quién salió victorioso en estos eventos que me estás relatando, Völva?

VÖLVA: Eso, Gran Odín, es lo que os procedo a contar…

### GUION DE ENDING DEL ÁGUILA
VÖLVA: Y así concluye nuestra historia. El águila llegó a la copa de Yggdrasil con tiempo suficiente para poner al tanto a la diosa Freyja.

ODÍN: ¿Cuál es el papel de Freyja en todo esto y por qué no se me ha informado a mí, dios de Asgard, de esta situación?

VÖLVA: Oh, gran Odín. No solo el poder puede cambiar el destino del mundo. El águila avisó a Freyja a sabiendas de que ella es la única que puede calmar a Nidhögg.

ODÍN: Puedo llegar a entenderlo… ¿Qué ocurrió después?

VÖLVA: Freyja y el águila se transportaron a lo más bajo de Yggdrasil. Ahí encontraron a Nidhögg, royendo desesperadamente las raíces. Freyja le instó a parar y le explicó que no podía desatar el Ragnarök, que todo había sido una treta de Ratatösk.

VÖLVA: Y gracias al ímpetu del águila, hoy puedo presentarme ante vos para contar esta historia de cómo Yggdrasil y todos sus reinos fueron salvados… sin su ayuda, gran Odín.

ODÍN: Ya entiendo cuáles eran tus intenciones presentándote aquí, Völva. Debo ser un gobernante más atento y protector si quiero evitar futuras desgracias en estos reinos. Gracias por tu crónica.

VÖLVA: Es un honor, gran Odín. Velo y velaré siempre por la seguridad de Yggdrasil y sus reinos. Al igual que hacéis vos.

### GUION DE ENDING DE NIDHÖGG
VÖLVA: Y así fue como Nidhögg consiguió alcanzar las raíces de Yggdrasil antes de que el águila pudiese hacer algo para impedirlo.

ODÍN: Pero Völva, eso significa que…

VÖLVA: Sí, gran Odín. Nidhögg ha conseguido su objetivo: ha desatado el Ragnarök. La sangre se derrama, el suelo se agrieta, los cielos se abren y toda vida existente en estos reinos tendrá fin en breves momentos.

ODÍN: ¡Debo ir a luchar! Völva, tú que todo conoces, ¡dime que podemos salvar a los reinos de esta catástrofe!

VÖLVA: No lo creo, gran Odín. La vida está condenada y todo va a llegar a su fin. Cualquier esfuerzo es inútil.

ODÍN: ¡Mientes! ¡Tengo que salvar a todos!

VÖLVA: Con toda mi sinceridad, gran Odín, no hay nada que podáis hacer. Disfrutad de vuestros últimos momentos antes de que sea demasiado tarde.

ODÍN: ¡No! ¡Soy Odín, dios de Asgard! ¡Y moriré defendiéndola si es preciso!

VÖLVA: Adelante, gran Odín. Luchad por la vida… aunque sea demasiado tarde.


## INTERFAZ
La estamina se ve reflejada oscureciéndose la pantalla (de azul en la del águila, de rojo en la de Nidhögg) cuando queda poca cantidad, restableciendo su estado normal cuando se recupera dicha estamina, presentando así una interfaz diegética para no distraer al jugador de los elementos _ingame_.

![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Documentacion/Screens/estamina.png "Interfaz diegética")

## CARACTERISTICAS ONLINE
### IMPLEMENTACION DEL MULTIJUGADOR CON APIREST
Se ha decidido que el servidor recoja la información de los jugadores relativa a posición, velocidad, control de teclas pulsadas, estamina, salto y control de los parámetros de los que depende la animación. 

Esta información relativa a cada uno de los jugadores se envía al servidor cada vez que se ha pulsado una tecla (arriba, abajo o _dash_) o se ha pulsado/soltado derecha o izquierda, así como cuando se comience un nivel. Se descarga esta información en cada frame, aunque gracias a una variable de estado (que incrementa en cada subida de información al servidor) se controla que esta se escriba en las propiedades del jugador, así como también se evitan problemas de pérdida de paquetes.

Los jugadores activos (es decir, el jugador 1 en la pantalla 1 y el jugador 2 en la pantalla 2) serán los que envíen información al servidor, mientras que los pasivos (jugador 1 en la pantalla 2 y jugador 2 en la pantalla 1) se encargarán de recoger esta información y calcular sus movimientos y animaciones gracias a ello, reflejando el mismo movimiento que se está produciendo en la pantalla inicial.

Al terminar una partida, cuando se produce el reseteo del juego, se borra la lista de jugadores del servidor, permitiendo iniciar una nueva partida.

En adición al control de los jugadores, también se sube información referente a la pulsación de teclas en las pantallas de cutscenes y reward, con el objetivo de que no se salte a las siguientes pantallas hasta que ambos jugadores hayan decidido hacerlo.


![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Documentacion/Untitled%20Diagram.png "Diagrama UML de la APIREST")

### COMUNICACION ENTRE JUGADORES
Al ser un juego dinámico, en el que no hay un instante en el que distraerse, se ha optado por no implementar un chat, sino de utilizar un sistema de expresiones. Este sistema sería similar al visto en juegos como Super Smash Bros, donde un jugador pulsa una tecla específica y su personaje ejecuta una animación en la que se burla del otro, pero en este caso, además de burlas, habría otras expresiones como saludar o intimidar. De esta forma, los jugadores pueden comunicarse de forma muy breve, pero sin perder tiempo ni distraerse de la jugabilidad.
### MATCHMAKING
El juego se encargará de encontrar oponentes con un nivel de habilidad similar. Para ello, se llevará el registro del tiempo que tarda cada jugador en terminar un nivel, y se calculará un tiempo medio en base a las últimas diez partidas. Se emparejará a jugadores con un tiempo medio similar, con un margen de 10 segundos de diferencia, permitiendo así que los jugadores menos habilidosos o poco experimentados tengan una curva de aprendizaje placentera y sin enormes frustraciones, además de tener satisfechos a los jugadores veteranos o que dominen los controles, ya que tendrán que esforzarse para vencer al rival.

Además, para que dos jugadores no se encuentren en partidas consecutivas, se guardará un historial en forma de lista de los últimos 10 usuarios con los que ha jugado cada jugador, no pudiendo ser emparejado con ninguno de ellos hasta que se hayan jugado como mínimo 10 partidas.

En adición a estas restricciones, los jugadores nuevos (o jugadores que no hayan ganado suficientes partidas) que aún no tengan registros serán emparejados con los que peor tiempo medio tengan. Cualquier jugador cuyo tiempo se salga del margen de 10 segundos será emparejado en función del tiempo de los jugadores inmediatamente inferiores (por ejemplo, el mejor jugador de un nivel tiene un tiempo medio de 45 segundos, mientras que el segundo mejor lo tiene de 1 minuto y 10 segundos. Como el primero no encontraría rival con el criterio especificado anteriormente, se realiza una excepción y será emparejado con jugadores que entren en el rango de tiempo del segundo mejor) hasta que otros jugadores se acerquen a su récord.
### CONTROL DE ACTIVIDAD
En caso de que un jugador no haga ningún _input_ en el intervalo de un minuto, se le concederá automáticamente la victoria a su oponente. De esta manera, se otorga un tiempo suficiente para reincorporarse a la partida en caso de haber parado momentáneamente, pero también se evita que entren _trolls_ o jugadores con mal perder que busquen estropear el reto al rival.

## LOGROS
Los logros que se obtienen son las recompensas de final de nivel, es decir, una runa para el jugador que sale vencedor de cada nivel.

## MUSICA
Rynos Theme – Kevin Macleod (Incompetech.com)

Black Vortex – Kevin Macleod (Incompetech.com)

Curse of the Scarab – Kevin Macleod (Incompetech.com)

Undaunted – Kevin Macleod (Incompetech.com)

 
Eternal Terminarl – Kevin Macleod (Incompetech.com)

Americana – Kevin Macleod (Incompetech.com)

Killers – Kevin Macleod (Incompetech.com)

Industrious Ferret – Kevin Macleod (Incompetech.com)

Licensed Under Creative Commons: By Attribution 3.0

## SONIDO
Annulet of Absorption – CosmicCD

Punch_02 – TheFSoundMan

Arrow Impact 4 – Ali_6868

Shield Guard – nekoninja

Chillido Ardilla – checholio

Mystic Flutter – SoughtafterSounds (“Copyright 2011 Varazuvi www.varazuvi.com”)

Wooden Horn – Vendarro

Efectos de sonido obtenidos de https://freesound.org/

## ARTE
Se ha optado por un diseño artístico con personajes de baja estatura y rasgos sin excesivo detalle. Este estilo permite realizar animaciones simples, pero fluidas y con buen acabado.

Los personajes principales, Nidhogg y el águila no son jugables en su forma animal, sino en unas representaciones antropomórficas controladas por los jugadores. Son similares en cuanto a complexión y tamaño, justificando así que sean iguales jugablemente, pese a que estéticamente se diferenciarán mediante sus cabezas y sus colores. 

Estéticamente, por tanto, se sigue el estilo de Puppet Animation con flash, similar al de juegos como _Rayman Origins_ o _Dust: An Elysian Tail_. Las animaciones se han hecho interpolando _keyframes_ dibujados en flash. Como muestra inicial, en la siguiente imagen se pueden apreciar los _spritesheets_ de las poses estáticas de Nidhögg y de un enemigo.

![](https://github.com/AlbaranezJavier/JRPractica/blob/master/V%C3%B6lva%20Chronicle/assets/spritesheets/spritesheet_Nidhogg.png "Spritesheet Nidhögg")

![](https://github.com/AlbaranezJavier/JRPractica/blob/master/V%C3%B6lva%20Chronicle/assets/spritesheets/spritesheet_enemigo2.png "Spritesheet Enemigo 2")

En cuanto a los escenarios, estos se han representado buscando ejemplificar Yggdrasil. El árbol de Yggdrasil es de gran longitud y se rodea de diferentes reinos, por lo que en el escenario predominarán diferentes colores y detalles en función de en qué lugar se encuentren los personajes. Para muestra, se adjunta la imagen del árbol Yggdrasil, que se utilizará como _background_ del escenario. Se verá una parte u otra del árbol en diferentes niveles y tramos, dando así la sensación de progreso.

![](https://github.com/AlbaranezJavier/JRPractica/blob/master/Bocetos_en_sucio/arbol_calidad_baja.jpg "Background: Yggdrasil")

## INSTRUCCIONES DE USO
Para comenzar una partida al juego, se deberán seguir los siguientes pasos:
1.	Abrir Spring Tool Suite o Eclipse con su extensión para STS
2.	Abrir carpeta VolvaChronicles con la opción File -> Open Projects from File System
3.	Seleccionar en src/main/java el archivo App.java y escoger “Run As Java Application”, para iniciar el servidor APIREST.
4.	Escribir en la URL del navegador de preferencia localhost:8080
5.	Al iniciar el menú, pulsar en el botón Local para jugar offline o en el botón Online para jugar online.
6.	En caso de jugar Online, se llevará al jugador a la pantalla de espera hasta que otro jugador (desde otra ventana o desde otro PC conectado a la misma IP) pulse en el botón Online e inicie la partida.

## POSIBLES AMPLIACIONES
Gracias a lo inmenso que es el universo desarrollado en la Mitología Nórdica y a la propia naturaleza del videojuego como plataformas, este puede verse ampliado de muchas formas diferentes.

En Yggdrasil existen 9 reinos diferentes, todos ellos con sus civilizaciones, clima y estética diferente, lo que daría lugar a muchos más niveles donde se pudiera dar variedad en la ambientación de los escenarios e incluso introducir mecánicas exclusivas, como power-ups propios e identificativos de cada reino.

Los reinos, a su vez, pueden contar diferentes historias alternativas a la principal a modo de ampliación, pudiendo narrar, por ejemplo, la guerra entre los Aesir (pertenecientes al reino de Asgard) y los Vanir (pertenecientes al reino de Vanaheim) o el Fimbulvetr como presagio de la llegada del Ragnarök. 

Asimismo, se podrían añadir enemigos a modo de jefes finales del nivel donde los personajes tuviesen que cooperar para derrotarlos. Estos enemigos pueden ser criaturas del folklore nórdico, como el dragón de Midgard Jörmungandr, los gigantes de Jötunheim, el no-muerto Draugr o el ciervo del Valhalla Eikþyrnir.

También existe la posibilidad de aumentar el número de personajes jugables y diferenciarlos más allá de lo estético con habilidades especiales. Estos personajes podrían ser pertenecientes a diferentes razas de los reinos de Yggdrasil, como los elfos oscuros o las valquirias.
Las plataformas no serán todas iguales ni en forma, ni en tamaño ni en funcionalidad. Habrá plataformas que se rompan a los pocos segundos de posarse sobre ellas, otras con movimientos verticales u horizontales, otras con trampas y otras permitirán dar un salto más alto. Habrá tramos con plataformas más pequeñas y otros donde tengan mayor longitud o sean lo suficientemente anchas como para realizar en ellas un salto de pared. Algunas plataformas, también, serán rectangulares, mientras otras pueden tener forma de T, estar escalonadas…

Otra opción interesante es aumentar el número de jugadores en una misma partida. Se deberían regular elementos, como las invasiones a través de los portales o el control de actividad, así como rediseñar ligeramente ciertos tramos de los niveles. Pero la jugabilidad se podría enriquecer y dar lugar a partidas más caóticas, dando mucho valor a la rejugabilidad.

Idea añadidas para la jugabilidad: el uso del _dash_ hará que se recargue la estamina del rival más rápido, de manera que cuantos más _dashes_ use un jugador, más podrá usar el otro. Las ventajas de esta mecánica serían reforzar el sistema de riesgo-recompensa-castigo y aumentar la interacción multijugador, aunque supondría un problema de cara a reflejarlo mediante la interfaz diegética.

Alternativa para la interfaz diegética: se puede reflejar la estamina restante en el propio personaje, dejando un pequeño rastro tras finalizar un salto u otro tipo de acción en caso de que conserve poca estamina, señalando al jugador que debería parar pronto para recargar.

Finalmente, y como idea prioritaria a implementar, de cara a mejorar la rejugabilidad del título los niveles podrían no estar dispuestos siempre de la misma forma, sino diviéndolos en tramos y que algunos de estos tramos presenten una disposición de plataformas y power-ups diferente en cada iteración del juego. No se trata de aleatorizar los elementos del escenario, sino de tener varios módulos distintos para un mismo tramo del nivel y que en cada iteración de un nivel se escoja uno aleatoriamente, haciendo que no todas las partidas sean iguales y alargando la vida útil del juego para el usuario.

## BUGS CONOCIDOS
### BUGS RESUELTOS
Anteriormente la interfaz de la estamina opacaba toda la pantalla. Esto ya se ha balanceado y el efecto es mucho más suave y momentáneo.

En el nivel 3 había un foso en el que, si el personaje caía, resultaba imposible salir. Se ha modificado el tilemap de manera que se pueda salir de ahí.

### BUGS PRESENTES
En algunas ocasiones, si un objeto coge excesiva velocidad, atraviesa alguna pared o suelo. Este efecto se ha paliado controlando la velocidad máxima, pero aún se manifiesta ocasionalmente.

Por errores de comunicación no resueltos, el power up de los ciervos no funciona correctamente en la ventana que recibe la información del servidor.

La animación de los efectos de dash se muestra de manera intermitente en la ventana que recibe la información del servidor.

## MIEMBROS DEL EQUIPO
Mario Aceituno Cordero – Arte, Programación, Cinemáticas, Diseño de personajes - m.aceituno.2016@alumnos.urjc.es

Javier Albaráñez Martínez – Diseño de mecánicas, Arte, Programación - j.albaranez@alumnos.urjc.es

César Carbajo García – Diseño de mecánicas, Animación, Programación - c.carbajo.2016@alumnos.urjc.es

Juan Antonio Martín García – Diseño de niveles, Guion, Documentación, Programación, Animación, Cinemáticas - ja.martin.2016@alumnos.urjc.es

## DETALLES DE PRODUCCIÓN
**Fecha de inicio**: 11/09/2018

**Fecha de finalización** (estimada): 09/12/2018
