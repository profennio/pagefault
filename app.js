var Frames = []
var Pages = []
var Strrif = []
var MaxFrames = 3
let pageFault = 0



for (let i = 0; i < 10; i++)
  Pages.push(i)
let numpages = Pages.length
for (let i = 0; i < 30; i++) {
  let rndpag = Math.floor(Math.random() * numpages);
  Strrif.push(rndpag)

}
console.log("__loll__")
console.log(Strrif)


Strrif.forEach(function (s, idx) {

  if (!Frames.includes(s)) {
    console.log("!!!!!Pagefault")
    if (Frames.length < MaxFrames)
      Frames.push(s)
    else {
      let vittima = 1000
      let Firstrif=ottimo(0)
      console.log(8888)
      console.log(Firstrif)
      Frames.forEach((f) => {if(Firstrif[f]>Firstrif[vittima]) vittima=f });
    //  Frames.forEach((f) =>if(Firstrif[f]>Firstrif[vittima] vittima=f  );
      
      Frames[vittima] = s
    }

    console.log(Frames,999)

  }






})
ottimo(20)
function ottimo(posto) {

  let Firstrif = [];
  let _Strrif=Strrif.slice(posto)
  console.log(_Strrif)
  Pages.forEach((p) => Firstrif.push(1000) );

 Pages.forEach((p) => _Strrif.forEach((element,idx) => {if(element==p)if(Firstrif[p]==1000) Firstrif[p]=idx} ));

  console.log(Firstrif, 4)

  
  return  (Firstrif)

}