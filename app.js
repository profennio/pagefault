var Frames = []
var Pages = []
var Strrif = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1]
//var Strrif = [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5]
var MaxFrames = 3
var NumPages = 8
let pageFault = 0
let caricato = new Array(MaxFrames)
let algoritmo = 0//0: Ottimo    1: LRU   2: FIFO  3: casuale



for (let i = 0; i < NumPages; i++)
  Pages.push(i)




Strrif.forEach(function (s, nx) {


  if (!Frames.includes(s)) {

    pageFault++


    if (Frames.length < MaxFrames) {
      Frames.push(s)
      caricato[Frames.length - 1] = nx

    }
    else {


      let vittima = 0

      switch (algoritmo) {

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

          caricato[vittima] = nx


          Frames[vittima] = s
          break;

      }


      console.log(JSON.stringify(Frames))

    }
  }

})

console.log(pageFault, "PageFaults totali")
console.log(JSON.stringify(Frames), "stato finale")

function ottimo(posto) {

  let Firstrif = [];
  let _Strrif = Strrif.slice(posto)

  Pages.forEach((p) => Firstrif.push(1000));

  Pages.forEach((p) => _Strrif.forEach((element, idx) => { if (element == p) if (Firstrif[p] == 1000) Firstrif[p] = idx }));

  return (Firstrif)

}

function LRU(posto) {

  let Firstrif = [];
  let _Strrif = Strrif.slice(0, posto)
  _Strrif = _Strrif.reverse()

  Pages.forEach((p) => Firstrif.push(1000));

  Pages.forEach((p) => _Strrif.forEach((element, idx) => { if (element == p) if (Firstrif[p] == 1000) Firstrif[p] = idx }));




  return (Firstrif)

}

function FIFO(posto) {


  let Firstload = 0
  Pages.forEach((p) => { if (caricato[p] < caricato[Firstload]) Firstload = p })


  return (Firstload)

}