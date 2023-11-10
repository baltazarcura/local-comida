import { Categoria } from "../interfaces/categoria";

export const CATEGORIAS: Categoria[] = [
    {
        nombre: 'Hambuguesas',
        id: 1,
        fotoUrl: "https://adrianacotte.com/wp-content/uploads/2021/05/hamburguesa01.jpeg",
        productos: [{
           
            nombre:"Hamburguesa con queso",
            precio: 1000,
            descripcion: "",
            imagen: "https://quem.com.ar/tienda/wp-content/uploads/2020/12/Grandwich_17-10_-061.jpg"

        },
        {
            nombre:"Hamburguesa especial",
            precio: 1500,
            descripcion: "",
            imagen: "https://elsheriffburger.com/uploads/lh90_elsheriffbuger/products/54/es/img-H.-Especial-5-WEB-de-taman%CC%83o-mediano.jpg"
          },
          {
            nombre:"Hamburguesa vegana",
            precio: 1300,
            descripcion: "",
            imagen: "https://www.pequerecetas.com/wp-content/uploads/2009/04/hamburguesa-de-garbanzos-casera-receta.jpg"
          },
          {
            nombre:"Hamburguesa celíaca",
            precio: 1250,
            descripcion: "",
            imagen: "https://www.perez-h.com/newsite/wp-content/uploads/2016/06/queso-2.jpg"
          },
          {
            nombre:"Hamburguesa americana",
            precio: 3500,
            descripcion: "",
            imagen: "https://www.clarin.com/img/2022/05/27/0HXb0UR0v_2000x1500__1.jpg"
          },
          {
            nombre:"Medallón platero",
            precio: 2000,
            descripcion: "",
            imagen: "https://canalcocina.es/medias/images/1010_Coc_RecetasDeAnnie_HamburguesaQueso.jpg"
        }]
    },



    {
        nombre: 'Pizzas',
        id: 2,
        fotoUrl: "https://img-global.cpcdn.com/recipes/5422e9144d489156/1200x630cq70/photo.jpg",
        productos: [
            {
              nombre: 'Pizza común',
              precio: 1000,
              descripcion: "Pizza.",
              imagen:
                'https://caserissimo.com/wp-content/uploads/2015/08/pizabuaur1-1024x768.jpg',
            },
            {
              nombre: 'Pizza especial',
              precio: 1200,
              descripcion: "Típica pizza estilo porteño, con muchos morrones.",
              imagen:
                'https://images-gmi-pmc.edge-generalmills.com/fce31bdd-1931-4f30-adef-a5bac0864676.jpg',
            },
            {
              nombre: 'Pizza 3 quesos',
              precio: 1300,
              descripcion: "Pizza que combina los mejores quesos: provolone, muzarella y roquefort.",
              imagen:
                'https://www.gourmet.cl/wp-content/uploads/2017/04/pizza-570x458.jpg',
            },
          ]    },
    {
        nombre: 'Postres',
        id: 3,
        fotoUrl: "https://i.blogs.es/d519e3/tarta-de-queso-y-cafe-sin-horno/840_560.jpeg",
        productos: [
            {
              nombre: 'Tiramisú',
              precio: 800,
              descripcion: "Clasico tiramisú al estilo italiano.",
              imagen: 'https://i.blogs.es/410470/vasitos/1366_2000.jpeg',
            },
            {
              nombre: 'Chocotorta',
              precio: 800,
              descripcion: "Porción de chocotorta.",
              imagen:
                'https://www.cronica.com.ar/__export/1653520801548/sites/cronica/img/2021/06/17/chocotorta_2_crop1623944104124.jpg_792575817.jpg',
            },
            {
              nombre: 'Turrón de Quaker',
              precio: 800,
              descripcion: "Turrón con avena, chocolate y manteca",
              imagen:
                'https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_ipk5fgqbdh_eg-pf-platos-turron-de-avena-hi-03.jpg',
            },
          ] },
    {
        nombre: 'Bebidas',
        id: 4,
        fotoUrl: "https://pizzbur.com/wp-content/uploads/2016/05/20-datos-curiosos-sobre-bebidas-1920.jpg",
        productos: [{
            nombre: 'Agua',
            precio: 100,
            descripcion: "Agua mineral 500cc",
            imagen:
              'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040004_f.jpg',
          },
          {
            nombre: 'Agua Saborizada Naranja',
            precio: 100,
            descripcion: "Agua saborizada marca X 500cc sabor naranja",
            imagen:
              'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040783_f.jpg',
          },
          {
            nombre: 'Fanta Uva',
            precio: 100,
            descripcion: "Fanta 500cc sabor uva",
            imagen:
              'https://carrefourar.vtexassets.com/arquivos/ids/332920/7790895648670_E02.jpg?v=638212197029330000',
          },]
    }
]