function show_result(){
    let c = document.querySelector('#c').value;
    let mt = document.querySelector('#mt').value;
    let ph = document.querySelector('#ph').value;
    let ja = document.querySelector('#ja').value;
    let csa = document.querySelector('#csa').value;

  let to = parseFloat(c)+parseFloat(mt)+parseFloat(ph)+parseFloat(ja)+parseFloat(csa);
let per =(to*100)/500;
if(per >=90){
    document.querySelector('gra').innerHTML = ' YOU GOT a+'
}else if(per >=89){
    document.querySelector('gra').innerHTML = ' YOU GOT a'
}else if(per >=79){
    document.querySelector('gra').innerHTML = ' YOU GOT b+'
}else if(per >=69){
    document.querySelector('gra').innerHTML = ' YOU GOT b'
}else if(per >=60){
    document.querySelector('gra').innerHTML = ' YOU GOT c+'
}

  document.querySelector('.to').innerHTML=to;
  document.querySelector('.per').innerHTML=per;


 if(per>30){
    document.querySelector('result h2').innerHTML='you are pass'
 }
   
}