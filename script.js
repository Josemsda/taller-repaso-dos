const productos = [
  {
    id: 1,
    nombre: "Auriculares Bluetooth",
    descripcion: "Auriculares inalámbricos con cancelación de ruido.",
    precio: 75.99,
    imagen: "https://picsum.photos/200/200?random=1",
    reseñas: [
      { usuario: "Ana Ruiz", texto: "¡Excelente calidad de sonido!", fecha: "2025-09-01" }
    ]
  },
  {
    id: 2,
    nombre: "Reloj Inteligente",
    descripcion: "Reloj con monitor de actividad física y notificaciones.",
    precio: 120.00,
    imagen: "https://picsum.photos/200/200?random=2",
    reseñas: [
      { usuario: "Carlos Pérez", texto: "Me encanta, super útil para el día a día.", fecha: "2025-09-02" },
      { usuario: "Sofía Gómez", texto: "Muy elegante y funcional.", fecha: "2025-09-03" }
    ]
  },
  {
    id: 3,
    nombre: "Webcam HD",
    descripcion: "Cámara web de alta definición para videollamadas.",
    precio: 45.50,
    imagen: "https://picsum.photos/200/200?random=3",
    reseñas: []
  },
  {
    id: 4,
    nombre: "Mouse Gamer",
    descripcion: "Mouse ergonómico con iluminación LED RGB.",
    precio: 55.00,
    imagen: "https://picsum.photos/200/200?random=4",
    reseñas: [
      { usuario: "Juan Cárdenas", texto: "Preciso y cómodo para jugar por horas.", fecha: "2025-09-04" }
    ]
  },
  {
    id: 5,
    nombre: "Teclado Mecánico",
    descripcion: "Teclado con switches de alta respuesta para gaming.",
    precio: 99.99,
    imagen: "https://picsum.photos/200/200?random=5",
    reseñas: []
  },
  {
    id: 6,
    nombre: "Micrófono USB",
    descripcion: "Micrófono profesional para streaming y grabación.",
    precio: 85.00,
    imagen: "https://picsum.photos/200/200?random=6",
    reseñas: [
      { usuario: "Luisa Botero", texto: "Excelente calidad de sonido, lo recomiendo.", fecha: "2025-09-05" },
      { usuario: "Pablo Dávila", texto: "Fácil de configurar y funciona de maravilla.", fecha: "2025-09-06" }
    ]
  },
  {
    id: 7,
    nombre: "Monitor 4K",
    descripcion: "Monitor de 27 pulgadas con resolución Ultra HD.",
    precio: 350.00,
    imagen: "https://picsum.photos/200/200?random=7",
    reseñas: []
  },
  {
    id: 8,
    nombre: "Impresora Multifuncional",
    descripcion: "Imprime, escanea y copia con tecnología inalámbrica.",
    precio: 150.00,
    imagen: "https://picsum.photos/200/200?random=8",
    reseñas: [
      { usuario: "Laura Pineda", texto: "Muy rápida y los cartuchos son económicos.", fecha: "2025-09-07" }
    ]
  },
  {
    id: 9,
    nombre: "Disco Duro Externo 1TB",
    descripcion: "Almacenamiento portátil de alta velocidad.",
    precio: 60.00,
    imagen: "https://picsum.photos/200/200?random=9",
    reseñas: [
      { usuario: "Felipe Ospina", texto: "Perfecto para respaldar mis archivos.", fecha: "2025-09-08" },
      { usuario: "Marta Giraldo", texto: "Pequeño y con gran capacidad.", fecha: "2025-09-09" }
    ]
  },
  {
    id: 10,
    nombre: "Router Wi-Fi 6",
    descripcion: "Mejora la velocidad y cobertura de tu red.",
    precio: 110.00,
    imagen: "https://picsum.photos/200/200?random=10",
    reseñas: []
  },
  {
    id: 11,
    nombre: "Altavoz Inteligente",
    descripcion: "Asistente de voz para controlar dispositivos del hogar.",
    precio: 70.00,
    imagen: "https://picsum.photos/200/200?random=11",
    reseñas: [
      { usuario: "Ricardo Soto", texto: "Muy útil, la calidad de sonido es buena.", fecha: "2025-09-10" }
    ]
  },
  {
    id: 12,
    nombre: "Lámpara de Escritorio LED",
    descripcion: "Luz ajustable con diferentes intensidades.",
    precio: 30.50,
    imagen: "https://picsum.photos/200/200?random=12",
    reseñas: [
      { usuario: "Andrea Morales", texto: "Ideal para estudiar, no cansa la vista.", fecha: "2025-09-11" }
    ]
  },
  {
    id: 13,
    nombre: "Cargador Portátil",
    descripcion: "Batería externa de 10000 mAh para dispositivos móviles.",
    precio: 25.00,
    imagen: "https://picsum.photos/200/200?random=13",
    reseñas: []
  },
  {
    id: 14,
    nombre: "Cable HDMI 4K",
    descripcion: "Cable de alta velocidad para conectar monitores y TV.",
    precio: 15.00,
    imagen: "https://picsum.photos/200/200?random=14",
    reseñas: [
      { usuario: "Diego Sánchez", texto: "Excelente, la imagen es muy nítida.", fecha: "2025-09-12" }
    ]
  },
  {
    id: 15,
    nombre: "Tarjeta Gráfica",
    descripcion: "Tarjeta para gaming de alto rendimiento.",
    precio: 450.00,
    imagen: "https://picsum.photos/200/200?random=15",
    reseñas: []
  },
  {
    id: 16,
    nombre: "Hub USB-C",
    descripcion: "Adaptador multi-puertos para laptops modernas.",
    precio: 40.00,
    imagen: "https://picsum.photos/200/200?random=16",
    reseñas: [
      { usuario: "Isabel Herrera", texto: "Funciona a la perfección con mi MacBook.", fecha: "2025-09-13" },
      { usuario: "Jorge Mesa", texto: "Todos los puertos funcionan bien, lo recomiendo.", fecha: "2025-09-14" }
    ]
  },
  {
    id: 17,
    nombre: "Funda para Laptop",
    descripcion: "Funda acolchada para proteger laptops de 15 pulgadas.",
    precio: 20.00,
    imagen: "https://picsum.photos/200/200?random=17",
    reseñas: []
  },
  {
    id: 18,
    nombre: "Silla de Oficina Ergonómica",
    descripcion: "Silla con soporte lumbar para largas jornadas de trabajo.",
    precio: 180.00,
    imagen: "https://picsum.photos/200/200?random=18",
    reseñas: [
      { usuario: "Elena Valdés", texto: "Muy cómoda, mi espalda lo agradece.", fecha: "2025-09-15" }
    ]
  },
  {
    id: 19,
    nombre: "Cámara de Seguridad",
    descripcion: "Cámara con visión nocturna y detección de movimiento.",
    precio: 78.00,
    imagen: "https://picsum.photos/200/200?random=19",
    reseñas: []
  },
  {
    id: 20,
    nombre: "Licencia de Software Antivirus",
    descripcion: "Protege tu computador contra virus y malware.",
    precio: 49.99,
    imagen: "https://picsum.photos/200/200?random=20",
    reseñas: [
      { usuario: "Gabriel Torres", texto: "Me siento más seguro navegando por internet.", fecha: "2025-09-16" }
    ]
  }
];

function crearTarjeta(producto) {
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('tarjeta');

  const img = document.createElement('img');
  img.src = producto.imagen;
  img.alt = producto.nombre;
  tarjeta.appendChild(img);

  const nombre = document.createElement('h3');
  nombre.textContent = producto.nombre;
  tarjeta.appendChild(nombre);

  const desc = document.createElement('p');
  desc.textContent = producto.descripcion;
  tarjeta.appendChild(desc);

  const precio = document.createElement('p');
  precio.textContent = `$${producto.precio}`;
  precio.classList.add('precio');
  tarjeta.appendChild(precio);

  const btnCarrito = document.createElement('button');
  btnCarrito.textContent = 'Agregar al Carrito';
  btnCarrito.classList.add('btn-carrito');
  btnCarrito.addEventListener('click', function() {
    btnCarrito.textContent = 'Agregado ✅';
    btnCarrito.disabled = true;  // se deshabilita
  });
  tarjeta.appendChild(btnCarrito);

  const btnResenas = document.createElement('button');
  btnResenas.textContent = 'Mostrar Reseñas';
  btnResenas.classList.add('btn-resenas');
  tarjeta.appendChild(btnResenas);

  const divResenas = document.createElement('div');
  divResenas.classList.add('resenas');

  if (producto.reseñas.length === 0) {
    const sinResenas = document.createElement('p');
    sinResenas.textContent = 'No hay reseñas para este producto.';
    divResenas.appendChild(sinResenas);
  } else {
    producto.reseñas.forEach(function(r) {
      const resena = document.createElement('div');
      resena.classList.add('resena');
      resena.innerHTML = `<strong>${r.usuario}</strong> — ${r.fecha}<br>${r.texto}`;
      divResenas.appendChild(resena);
    });
  }

  btnResenas.addEventListener('click', function() {
    divResenas.classList.toggle('visible');
    btnResenas.textContent = divResenas.classList.contains('visible')
      ? 'Ocultar Reseñas'
      : 'Mostrar Reseñas';
  });

  tarjeta.appendChild(divResenas);
  return tarjeta;
}

function renderCatalogo() {
  const catalogo = document.getElementById('catalogo');
  productos.forEach(function(producto) {
    const tarjeta = crearTarjeta(producto);
    catalogo.appendChild(tarjeta);
  });
}

renderCatalogo();