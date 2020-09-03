import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit {

  total=0

  labels = [{
    nombre: 'Cercania a transporte público',
    ponderado:12,
    total:0,
    valores: [
      {
        nombre: '2 cuadras',
        calificacion: 100
      },
      {
        nombre: '1 o 3 cuadras',
        calificacion: 70
      },
      {
        nombre: '4 cuadras',
        calificacion: 40
      },
      {
        nombre: '5 cuadras',
        calificacion: 10
      }
    ]
  }, {
    nombre: 'Cercania a Comercio',
    ponderado:12,
    total:0,
    valores: [
      {
        nombre: '2 cuadras',
        calificacion: 100
      },
      {
        nombre: '1 o 3 cuadras',
        calificacion: 70
      },
      {
        nombre: '4 cuadras',
        calificacion: 40
      },
      {
        nombre: '5 cuadras',
        calificacion: 10
      }
    ]
  }, {
    nombre: 'Cercania a Parques',
    ponderado:4,
    total:0,
    valores: [
      {
        nombre: '2 cuadras',
        calificacion: 100
      },
      {
        nombre: '1 o 3 cuadras',
        calificacion: 70
      },
      {
        nombre: '4 cuadras',
        calificacion: 40
      },
      {
        nombre: '5 cuadras',
        calificacion: 10
      }
    ]
  },
  {
    nombre: 'Vias Principales de acceso',
    ponderado:5,
    total:0,
    valores: [
      {
        nombre: 'Una',
        calificacion: 50
      },
      {
        nombre: 'Dos',
        calificacion: 75
      },
      {
        nombre: '3 o más',
        calificacion: 100
      }
    ]
  },
  {
    nombre: 'Cercania a iglesia',
    ponderado:2,
    total:0,
    valores: [
      {
        nombre: '2 cuadras',
        calificacion: 100
      },
      {
        nombre: '1 o 3 cuadras',
        calificacion: 70
      },
      {
        nombre: '4 cuadras',
        calificacion: 40
      },
      {
        nombre: '5 cuadras',
        calificacion: 10
      }
    ]
  },
  {
    nombre: 'Cercania a Policia',
    ponderado:3,
    total:0,
    valores: [
      {
        nombre: '2 cuadras',
        calificacion: 100
      },
      {
        nombre: '1 o 3 cuadras',
        calificacion: 70
      },
      {
        nombre: '4 cuadras',
        calificacion: 40
      },
      {
        nombre: '5 cuadras',
        calificacion: 10
      }
    ]
  },
  {
    nombre: 'Ascensor',
    ponderado:10,
    total:0,
    valores: [
      {
        nombre: '2 o piso sin ascensor',
        calificacion: 100
      },
      {
        nombre: 'Ascensor en buen estado',
        calificacion: 80
      },
      {
        nombre: 'Ascensor en mal estado',
        calificacion: 60
      },
      {
        nombre: '1 o >3 sin ascensor',
        calificacion: 20
      }
    ]
  },
  {
    nombre: 'Distribucion',
    ponderado:8,
    total:0,
    valores: [{
      nombre: 'Buena',
      calificacion: 100
    },
    {
      nombre: 'Regular',
      calificacion: 50
    },
    {
      nombre: 'Mala',
      calificacion: 10
    }]
  },
  {
    nombre: 'Parqueadero',
    ponderado:6,
    total:0,
    valores: [{
      nombre: 'Cubierto y amplio',
      calificacion: 100
    },
    {
      nombre: 'Descubierto y amplio',
      calificacion: 80
    },
    {
      nombre: 'Cubierto y justo',
      calificacion: 60
    },
    {
      nombre: 'Descubierto y justo',
      calificacion: 40
    },
    {
      nombre: 'No tiene',
      calificacion: 0
    }]
  },
  {
    nombre: 'Antiguedad',
    ponderado:2,
    total:0,
    valores: [{
      nombre: 'Mayor a 15 años',
      calificacion: 50
    },
    {
      nombre: 'Menor a 15 años',
      calificacion: 100
    }]
  },
  {
    nombre: 'Acabados',
    ponderado:12,
    total:0,
    valores: [{
      nombre: 'Mal gusto y en buen estado',
      calificacion: 75
    },
    {
      nombre: 'Buen gusto y en buen estado',
      calificacion: 100
    },
    {
      nombre: 'Cualquiera y en mal estado',
      calificacion: 75
    }]
  },
  {
    nombre: 'Servicios Comunales',
    ponderado:8,
    total:0,
    valores: [{
      nombre: 'Buenos',
      calificacion: 100
    },
    {
      nombre: 'Regulares',
      calificacion: 50
    },
    {
      nombre: 'Malos',
      calificacion: 10
    }]
  },
  {
    nombre: 'Cantidad de unidades',
    ponderado:6,
    total:0,
    valores: [{
      nombre: '100 a 150',
      calificacion: 70
    },
    {
      nombre: '150 a 200',
      calificacion: 100
    },
    {
      nombre: '>200',
      calificacion: 30
    }]
  },
  {
    nombre: 'Cartera morosa',
    ponderado:8,
    total:0,
    valores: [{
      nombre: 'Hasta 10%',
      calificacion: 100
    },
    {
      nombre: 'de 10% a 20%',
      calificacion: 50
    },
    {
      nombre: 'Más de 20%',
      calificacion: 10
    }]
  },
  {
    nombre: 'Cuotas Extraordinarias pendientes',
    ponderado:2,
    total:0,
    valores: [{
      nombre: 'Si',
      calificacion: 0
    },
    {
      nombre: 'No',
      calificacion: 100
    }]
  },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  calcular(opcion,tipo){
    tipo.total=tipo.ponderado*opcion/100   
    this.calcularTotal()
  }

  calcularTotal(){
    let acum=0
    this.labels.forEach(label=>{
        acum=acum+(label.total?label.total:0)
    })    
    this.total=acum;
  }

}
