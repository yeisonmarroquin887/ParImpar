function numero(){
    const n = document.getElementById("num").value
      let residuo = n % 2
      let result = document.getElementById("result")
      document.getElementById("from").reset()
    if(residuo === 0){
      result.textContent="par"
    }else{
      result.textContent="impar"
    }
  }
  num()
  