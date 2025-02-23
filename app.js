let Frames = []
let Pages = []
var Strrif = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1]
//var Strrif = [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5]

var MaxFrames = 3
var NumPages = 8

let caricato = new Array(MaxFrames)
let algoritmo = 1 //0: Ott
// ottimo    1: LRU   2: FIFO  3: casuale
let statoRAM = []
let pagefaults = []


function ricalcola(algo) {

  Pages = []

  MaxFrames = 3
  NumPages = 8


  Frames = []


  caricato = new Array(MaxFrames).fill(-1);

  for (let i = 0; i < NumPages; i++)
    Pages.push(i)


  algoritmo = algo



  //function ricalcola(){


  let nodo = document.getElementById("statoRAM")

  nodo.innerHTML = ""
  let nodostr = document.getElementById("stringarif")

  nodostr.innerHTML = ""



  // ottimo    1: LRU   2: FIFO  3: casuale
  statoRAM = []
  pagefaults = []


  // for (let i = 0; i < NumPages; i++)
  // Pages.push(i)

  Strrif.forEach(function (s, nx) {


    if (!Frames.includes(s)) {


      pagefaults.push(1)


      if (Frames.length < MaxFrames) {
        Frames.push(s)
        caricato[Frames.length - 1] = nx

        statoRAM.push(Frames.slice(0))
      }
      else {

        // alert(80)
        let vittima = 0

        switch (algoritmo * 1) {

          case 0:

            let Firstrif = []
            Firstrif = ottimo(nx)


            Frames.forEach((f, idx) => { if (Firstrif[Frames[idx]] > Firstrif[Frames[vittima]]) { vittima = idx; } });
            Frames[vittima] = s

              ;

          case 1:


            let Firstrife = []
            Firstrife = LRU(nx)
            Frames.forEach((f, idx) => { if (Firstrife[Frames[idx]] > Firstrife[Frames[vittima]]) { vittima = idx; } });
            Frames[vittima] = s


              ; break;
          case 2:
            vittima = FIFO(nx);

            caricato[vittima] = nx


            Frames[vittima] = s
            break;
          case 3:

            vittima = Math.floor((Math.random() * MaxFrames))

            Frames[vittima] = s
            break;

        }


        statoRAM.push([...Frames])



      }
    }
    else {// cegià
      statoRAM.push([...Frames])
      pagefaults.push(0)

    }
  })


  mostraRAM()
  mostraRif()

}

function ottimo(posto) {

  let Firstrif = [];
  let _Strrif = [...Strrif].slice(posto)

  Pages.forEach((p) => Firstrif.push(1000));

  Pages.forEach((p) => _Strrif.forEach((element, idx) => { if (element == p) if (Firstrif[p] == 1000) Firstrif[p] = idx }));

  return (Firstrif)

}

function LRU(posto) {

  let Firstrif = [];
  let _Strrif = [...Strrif].slice(0, posto)

  _Strrif.reverse()

  Pages.forEach((p) => Firstrif.push(1000));

  Pages.forEach((p) => _Strrif.forEach((element, idx) => { if (element == p) if (Firstrif[p] == 1000) Firstrif[p] = idx }));




  return (Firstrif)

}

function FIFO(posto) {


  let Firstload = 0
  Pages.forEach((p) => { if (caricato[p] < caricato[Firstload]) Firstload = p })


  return (Firstload)

}

function mostraRAM() {


  let nodo = document.getElementById("statoRAM")


  statoRAM.forEach((s, idx) => {
    const newDiv = document.createElement("div");


    s.forEach((t) => {
      const rett = document.createElement("div");
      rett.classList.add("rett")
      if (pagefaults[idx] == 1) rett.classList.add("viola")
      rett.innerHTML = t
      newDiv.appendChild(rett)
    })
    newDiv.classList.add("rettangolo")
    nodo.appendChild(newDiv)
  })

  nodo.classList.add("rettangolo")

  const pagef = document.createElement("div");
  pagef.innerHTML = "     Pagefault: " + pagefaults.reduce(
    (accumulator, currentValue) => accumulator + currentValue,

  );

  nodo.appendChild(pagef)



}


function mostraRif() {


  let nodo = document.getElementById("stringarif")


  Strrif.forEach((s, idx) => {

    const rett = document.createElement("div");
    rett.classList.add("elstr")

    let strhtml = ' <select name="algo" id="selectalgo">'
    // strhtml+= '<option value="0"></option>'
   // strhtml += '<option value=' + s + '" selected >' + s + '</option>'
    Pages.forEach((p) => { strhtml += '<option value='+ s+' selected=true>' + p + '</option>' })


    strhtml += '</select>'
    rett.innerHTML = strhtml


    nodo.appendChild(rett)


  })
  nodo.classList.add("strrif")

}

document.getElementById("selectalgo").addEventListener("change", (event) => {
  algoritmo = event.target.value

  ricalcola(algoritmo)
})
