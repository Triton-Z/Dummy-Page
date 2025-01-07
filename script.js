setTimeout(function() {
  const t = document.createElement('h1');
  t.textContent = "Hello, World!"
  t.id = 'title';
  
  document.body.appendChild(t)
  
  document.getElementById("title").addEventListener("click", ()=>{
    alert("Clicked!")
  });
}, 2000)
