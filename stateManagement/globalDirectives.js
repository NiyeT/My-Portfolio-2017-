var actions={
  aboutMe:document.querySelector("niyes-portfolio").root.querySelector("#aboutMe"),
  portfolio:document.querySelector("niyes-portfolio").root.querySelector("#portfolio"),
}
function globalDirectives(directive){
  alert('global directive')
  const drawer=document.querySelector("niyes-portfolio").root.querySelector("portfolio-header").root.querySelector("#drawer");
  if(drawer.opened){
    document.querySelector("niyes-portfolio").root.querySelector("portfolio-header").root.querySelector("#drawer").close();
  }
  actions[directive].open();
}
