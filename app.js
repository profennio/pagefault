var Frames = []
var Pages = []
var Strrif = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1]
//var Strrif = [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5]
var MaxFrames = 3
let pageFault = 0
let caricato = [0,0,0,0]
let algoritmo = 1


//7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1
//1 2 3 4 1 2 5 1 2 3 4 5

for (let i = 0; i < 8; i++)
  Pages.push(i)
let numpages = Pages.length
/* for (let i = 0; i < 20; i++) {
  let rndpag = Math.floor(Math.random() * numpages);
  Strrif.push(rndpag)

} */
//console.log("__loll__")
//console.log(Strrif)


Strrif.forEach(function (s, nx) {
  
  // console.log("arriva", s)
  if (!Frames.includes(s)) {
    //  console.log("!!!!!Pagefault")
    pageFault++


    if (Frames.length < MaxFrames) {
      Frames.push(s)
      caricato[Frames.length-1]=nx

    }
    else {

    
      let vittima = 0
   
      switch (algoritmo) {
 
        case 0:  // OTTIMO o MIN
         let Firstrif = []
        Firstrif = ottimo(nx)
       
        
          Frames.forEach((f, idx) => { if (Firstrif[Frames[idx]] > Firstrif[Frames[vittima]]) { vittima = idx; } });
          Frames[vittima] = s
          caricato[vittima]=nx
          ;

        case 1: //LRU
          let Firstrife = []
          Firstrife = LRU(nx)
          Frames.forEach((f, idx) => { if (Firstrife[Frames[idx]] > Firstrife[Frames[vittima]]) { vittima = idx; } });
          Frames[vittima] = s
          caricato[vittima]=nx
          ; break;
        case 2:  // FIFO
        vittima = FIFO(nx);
        
        caricato[vittima]=nx
      

        Frames[vittima] = s
          break;
          case 3:
            //casuale
          vittima =Math.floor((Math.random()*MaxFrames))
        
          caricato[vittima]=nx
        
  
          Frames[vittima] = s
            break;

      }

 
      console.log(JSON.stringify(Frames))
    
    }
  }
//  else
    // console.log("cegia")
  //  a = 6
})

console.log(pageFault, "PageFaults totali")
console.log(JSON.stringify(Frames), "stato finale")
//ottimo(0)
function ottimo(posto) {

  let Firstrif = [];
  let _Strrif = Strrif.slice(posto)
  //console.log(_Strrif)
  Pages.forEach((p) => Firstrif.push(1000));

  Pages.forEach((p) => _Strrif.forEach((element, idx) => { if (element == p) if (Firstrif[p] == 1000) Firstrif[p] = idx }));

  //console.log(Firstrif, 4)


  return (Firstrif)

}

function LRU(posto) {

  let Firstrif = [];
  let _Strrif = Strrif.slice(0, posto)
  _Strrif = _Strrif.reverse()
  //console.log(_Strrif)
  Pages.forEach((p) => Firstrif.push(1000));

  Pages.forEach((p) => _Strrif.forEach((element, idx) => { if (element == p) if (Firstrif[p] == 1000) Firstrif[p] = idx }));

  //console.log(Firstrif, 4)


  return (Firstrif)

}

function FIFO(posto) {

 
  let Firstload = 0
  Pages.forEach((p) => { if (caricato[p] < caricato[Firstload]) Firstload = p})





  return (Firstload)

}