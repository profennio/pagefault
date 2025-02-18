var Frames = []
var Pages = []
var Strrif = []
var MaxFrames = 3
let pageFault = 0



for (let i = 0; i < 5; i++)
  Pages.push(i)
let numpages = Pages.length
for (let i = 0; i < 20; i++) {
  let rndpag = Math.floor(Math.random() * numpages);
  Strrif.push(rndpag)

}
console.log("__loll__")
console.log(Strrif)


Strrif.forEach(function (s, idx) {
  console.log("arriva", s)
  if (!Frames.includes(s)) {
    console.log("!!!!!Pagefault")
    pageFault++
  
       
    if (Frames.length < MaxFrames)
    { Frames.push(s)
     
   }
    else {

      console.log("Frames")
      console.log(JSON.stringify(Frames))
      let vittima = 0
      let Firstrif = ottimo(idx)
     

      Frames.forEach((f,idx) => {  if (Firstrif[f] > Firstrif[vittima]) vittima = idx });
   
      Frames[[vittima]] = s
      console.log("Frames")
  console.log(JSON.stringify(Frames))
      console.log("______")

    }
  }
  else
    console.log("cegia")

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