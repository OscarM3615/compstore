import categories from 'core/mocks/categories';
import type Product from 'shared/models/product';

const products: Product[] = [
	{
		id: 1,
		name: 'Laptop Lenovo IdeaPad 15IML05',
		price: 11999,
		category: categories[3],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_740069-MLA47751021497_102021-O.webp',
		description: `Procesador Intel Core i3
Memoria RAM de 8 GB
Pantalla LCD de 15.6"
Resolución de 1366x768 px
Es antireflejo
Tarjeta gráfica Intel UHD Graphics 620
Conexión wifi y bluetooth
Cuenta con 3 puertos USB y puerto HDMI
Incluye lector de tarjeta de memoria
Modo de sonido Dolby Audio, Stereo`
	},
	{
		id: 2,
		name: 'Laptop Acer Aspire 5',
		price: 15999,
		category: categories[3],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_727563-MLM47622060622_092021-O.webp',
		description: `Memoria RAM DDR4 de 8 GB con pantalla Full HD de 15.6"
Duración de la batería: 8 h
Disco duro de 1 TB y SSD de 256 GB
Procesador i5-1135G7 de 11 generación
Sistema operativo Windows 10 Home`
	},
	{
		id: 3,
		name: 'Disco sólido SSD Interno Adata Ultimate SU650 ASU650SS-120GT-R',
		price: 464,
		category: categories[1],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_703126-MLA42153281002_062020-O.webp',
		description: `Utiliza tecnología NAND. Útil para guardar programas y documentos con capacidad de 120 GB, resistente a golpes fuertes.
Tamaño de 2.5"
Interfaz de conexión SATA III
Apto para PC y laptop`
	},
	{
		id: 4,
		name: 'Laptop HP 240 G7 plateado ceniza oscuro',
		price: 10669,
		category: categories[3],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_676542-MLA46706886097_072021-O.webp',
		description: `Procesador Intel Core i3 1005G1
Memoria RAM de 4 GB
Pantalla LED de 14"
Resolución de 1366x768 px
Antirreflejo
Tarjeta gráfica Intel UHD Graphics G1
3 puertos USB y 1 HDMI
Modo de sonido Stereo`
	},
	{
		id: 5,
		name: 'Laptop Dell Inspiron 3505 gris',
		price: 17265,
		category: categories[3],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_845211-MLA47215230893_082021-O.webp',
		description: `Procesador AMD Ryzen 5
Memoria RAM de 16 GB
Pantalla LED de 15.6" antirreflejo
Resolución de 1366x768 px
Tarjeta gráfica AMD Radeon Vega 8
3 puertos USB y 1 HDMI
Posee pad numérico
Modo de sonido Stereo`
	},
	{
		id: 6,
		name: 'Laptop Huawei Matebook gris',
		price: 13499,
		category: categories[3],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_893704-MLM47180608937_082021-O.webp',
		description: `HUAWEI MateBook D 14 está equipada con una pantalla IPS de 1920x1080.
Con un peso de solo 1.38 kg y un grosor de 15.9 mm2, el diseño aerodinámico no solo se ve genial, significa que puede empujar la bisagra hasta casi 180°.
Cuenta con cámara retráctil escondida dentro del teclado.
HUAWEI MateBook D 14 funciona con el procesador Intel® Core™ i3-10110U de décima generación3, que acelera y mejora el rendimiento. Equipada con un SSD PCIe y con hasta 8 GB en RAM DDR4, sus velocidades de lectura y escritura son increíblemente rápidas.`
	},
	{
		id: 7,
		name: 'Disco sólido SSD interno Kingston SA400S37/480G negro',
		price: 1056,
		category: categories[1],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_717956-MLA46221874690_052021-O.webp',
		description: `Con tecnología 3D NAND.
Útil para guardar programas y documentos con su capacidad de 480 GB.
Resistente a fuertes golpes.
Tamaño de 2.5".
Interfaz de conexión: SATA III.
Apto para PC y Laptop.`
	},
	{
		id: 8,
		name: 'Ratón silencioso inalámbrico de carga portátil 2.4g',
		price: 157,
		category: categories[7],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_740349-MLM43735920376_102020-O.webp',
		description: `Parámetros del ratón:
Batería: batería garantía de litio recargable
Capacidad de la batería: 500 mAh.
Resolución fotoeléctrica: interruptor de tres velocidades 800-1200-1600 (ppp)
Número de llaves: 4 (llaves)
Receptor: conector USB inalámbrico enchufar y usar
Tamaño: 112 * 758 * 25 mm
Peso del producto: 0,09 (KG)
Frecuencia de transmisión inalámbrica: 2,4 GHz
Distancia de trabajo: dentro de los 10 m`
	},
	{
		id: 9,
		name: 'Monitor Samsung Curvo Con Diseño Sin Bordes',
		price: 5399,
		category: categories[6],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_845633-MLM46572065313_062021-O.webp',
		description: `32" FHD Curved Monitor con diseño sin bordes
Curvatura envolvente 1500R
Tecnología AMD FreeSync
Panel VA y Eye Saver Mode`
	},
	{
		id: 10,
		name: 'Pack Gamer Tapete, Teclado, Mouse, Audífonos, Luz Led Tedge',
		price: 1000,
		category: categories[0],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_805582-MLM45183570421_032021-O.webp',
		description: `Mouse:
Número de teclas: 4
Largo del cable: 1.4 m
Resolución: 800 - 1200 - 1500 DPI
Luz con efecto respiración.
Diseño ergonómico con superficie antideslizante, cabe perfecto en la palma y no genera fatiga al usarlo durante largos períodos.

Teclado
Cantidad de teclas: 104
Largo del cable: 1.4M±5%
Dimensiones: 430 mm x 131 mm x 22 mm
Sistemas compatibles: Windows 2000/XP/Vista/Windows7/Windows8/Windows 10/Linux/Mac.

Audífonos
Resistencia: 32 ± 10%
Sensibilidad: 108 dB ± 3dB
Respuesta en frecuencia: 20 hz a 20 khz
Micrófono: 6 mm x 50 mm
Largo del cable: 1.8 m ± 10%

Tapete para Mouse
Dimensiones: 250 mm x 210 mm x 2 mm
Material: Tela de malla fina`
	},
	{
		id: 11,
		name: 'Memoria RAM Premier Series 8 GB Adata ADDS1600W8G11-S',
		price: 886,
		category: categories[3],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_2X_931087-MLA40194584468_122019-F.webp',
		description: `Optimiza el rendimiento de tu máquina con la tecnología DDR3L DRAM.
Memoria con formato SODIMM.
Alcanza una velocidad de 1600 MHz.
Apta para Laptops.
Línea Premier Series.
Cuenta con una tasa de transferencia de 12800 MB/s.`
	},
	{
		id: 12,
		name: 'Auriculares Gamer con luz LED Superbass Gaon Innovación',
		price: 227,
		category: categories[0],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_804655-MLM46950057600_082021-O.webp',
		description: `Tamaño de bocina: 50mm
Impendencia: 16 + 15%
Sensibilidad: 108 + 3dB
Largo de línea: 2.1 M + 0.15
Voltaje de trabajo de LED: DC5V + 5%
Corriente de trabajo:500mA
Interfaz de auricular: USB + 3.5 mm
Largo del cable: 224 cm
Micrófono Retráctil 120o de movimiento
Sonido Estéreo 360o, calidad plus de agudos y graves
Luz Led Playstation 4, nuevo Xbox One, PC, laptop, tableta, etc.
Multiplataforma Para una experiencia de un gamer profesional
Controles En el cable para una mejor experiencia.`
	},
	{
		id: 13,
		name: 'Laptop Lenovo IdeaPad 14IGL05 platinum gray',
		price: 7999,
		category: categories[3],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_955573-MLA47751707037_102021-O.webp',
		description: `Procesador Intel Celeron.
Memoria RAM de 4 GB.
Pantalla LED de 14".
Resolución de 1366x768 px.
Es antirreflejo.
Tarjeta gráfica Intel HD Graphics 600.
Conexión wifi y bluetooth.
Cuenta con 2 puertos USB y puerto HDMI.
Incluye lector de tarjeta de memoria.
Modo de sonido Stereo.`
	},
	{
		id: 14,
		name: 'Ratón Silencioso Recargable 2.4g',
		price: 178,
		category: categories[7],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_928983-CBT47900288317_102021-O.webp',
		description: `Amplia compatibilidad: compatible con Windows 7/8/10 / XP, Vista, Mac OS X 10.10 o posterior. Adecuado para todos los dispositivos tipo C, tabletas, teléfonos móviles, Macbook, Macbook Pro, iMac, iMac Pro, Chromebook, etc.
Ratón inalámbrico recargable: batería de litio de 500 mAh incorporada, el mouse inalámbrico se puede cargar fácilmente a través del cable USB incluido o el cable USB C, batería de larga duración, sin necesidad de reemplazar la batería.`
	},
	{
		id: 15,
		name: 'Audífonos Gaming Onikuma K9 rosa',
		price: 519,
		category: categories[0],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_719453-MLM44215558470_122020-O.webp',
		description: `Modelo: ONIKUMA K9
Tamaño del altavoz: 50mm
Sensibilidad: 106dB 3dB
Rango de frecuencia: 20 HZ-20 KHZ
Impedancia del micrófono: 2,2 K
Sensibilidad del micrófono: -38dB 3dB`
	},
	{
		id: 16,
		name: 'Cable Ethernet Lan Red Cat 5 30 metros',
		price: 134,
		category: categories[4],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_851957-MLM47875158083_102021-O.webp',
		description: `CAT5 / CAT5e: Este producto es compatible con aplicaciones CAT5 / CAT5e, por lo que el conector RJ45 para este cable es ideal para los puertos CAT5 y CAT5e.
Este cable conecta todos los objetivos de hardware en el área local (LAN) para 10 Base-T, 100 Base-T y 1000 conectores chapados en oro de red Base-T.`
	},
	{
		id: 17,
		name: 'Repetidor Wifi Amplificador Señal 1200mbps',
		price: 603,
		category: categories[4],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_798042-CBT45410532274_042021-O.webp',
		description: `Elimina las zonas muertas de Wi-Fi - Los repetidores WiFi amplían la cobertura WiFi existente para proporcionar una conectividad de banda ancha de hasta 1200Mbps en toda la casa. La transmisión en alta definición, los juegos en línea y otras actividades que requieren mucho ancho de banda ya no son un problema.`
	},
	{
		id: 18,
		name: 'Nvidia Gigabyte GeForce 10 Series GTX 1050 Ti',
		price: 5999,
		category: categories[2],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_624044-MLA41350524401_042020-O.webp',
		description: `Interfaz PCI-Express 3.0.
Bus de memoria: 128bit.
Cantidad de núcleos: 768.
Resolución máxima: 7680x4320.
Compatible con DirectX y OpenGL.
Requiere de 300W de alimentación.
Doble ventilación resistente al polvo.
Diseñada con tecnología Auto-Extreme que garantiza calidad y rendimiento.
Admite hasta 3 monitores.
Formatos de conexión: DL-DVI-D, HDMI 2.0b, DisplayPort 1.4.`
	},
	{
		id: 19,
		name: 'Tarjeta madre Gigabyte Ga-e6010n AMD Dual Core',
		price: 1119,
		category: categories[2],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_657419-MLM43149659619_082020-O.webp',
		description: `APU AMD E1-6010 Dual-Core incorporada con SoC de gráficos Radeon R2
DDR3 sin búfer sin ECC de canal único, 2 DIMM
Puertos USB 3.1 Gen1 integrados e interfaz PCI para mejorar la capacidad de expansión
HDMI, puertos D-sub para pantallas múltiples
Realtek Gigabit LAN con alta protección ESD
Todos los condensadores sólidos con protección contra la humedad Nuevo diseño de PCB de tela de vidrio
Tecnología GIGABYTE UEFI DualBIOS`
	},
	{
		id: 20,
		name: 'Toallas limpiadoras antiestáticas',
		price: 69.5,
		category: categories[5],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_932371-MLM44495842550_012021-O.webp',
		description: `Manten limpia la pantalla de tu computadora, monitor LCD, TV de pantalla plana, con estas toallas limpiadoras.
Desintegran suciedad y grasa.
Cuentan con poder de absorción y brindan protección antiestática.
Absorbencia total, elimina el 99.99 de los germenes.`
	},
	{
		id: 21,
		name: 'Kit limpiador multiusos y pantallas paño líquido cepillo',
		price: 70,
		category: categories[5],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_852291-MLM47459731939_092021-O.webp',
		description: `Ideal para limpiar pantallas, discos, tablets, pcs, monitores, aparatos, etc.
Limpieza profunda para tus pantallas y TV.`
	},
	{
		id: 22,
		name: 'Office 365 Home Premium 5 Usuarios',
		price: 1595,
		category: categories[0],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_754794-MLM31231946829_062019-O.webp',
		description: `Licencia para 5 Usuarios, cada usuario lo registra con su correo propio, cada usuario puede instalar en 5 ordenadores, en una tablet y en un smartphone, para tener el control de la licencia utilizas la página de Microsoft, con esto comprobarás la legalidad de la licencia.`
	},
	{
		id: 23,
		name: 'McAfee Total Protection 2 años',
		price: 119,
		category: categories[8],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_632063-MLM47839266497_102021-O.webp',
		description: `Antivirus galardonado
Navegación segura en la web
Optimización del rendimiento
Administrador de contraseñas
Almacenamiento cifrado`
	},
	{
		id: 24,
		name: 'Lentes antifatiga para computadora',
		price: 62,
		category: categories[9],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_819875-MLM46520944059_062021-O.webp',
		description: `Lentes diseñados para proteger la vista del daño causado por mirar constantemente la pantalla, asimismo, mejora el contraste, confort y enfoque al visualizar el monitor dándole a los ojos el descanso que merecen y poder durar varias horas sin malestares.`
	},
	{
		id: 25,
		name: 'Mini ventilador plástico USB para laptop',
		price: 45,
		category: categories[9],
		imageUrl:
			'https://http2.mlstatic.com/D_NQ_NP_866750-MLM41283460324_032020-O.webp',
		description: `Es un mini ventilador pequeño y portátil, compacto y liviano. Se puede usar tanto en el escritorio como en la mesita de noche, o salir, muy conveniente.
Su cuerpo flexible es adecuado para todas las ocasiones. Es compatible con el banco de energía, tableta, computadora portátil también se puede conectar al puerto USB de la PC.
Se puede usar en cualquier lugar, con la alimentación de cualquier dispositivo con puerto USB. Plug and play, no requiere instalación de controlador.`
	}
];

export default products;
