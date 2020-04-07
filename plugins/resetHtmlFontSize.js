export default () => {
  let _w = parseInt(window.screen.width) || window.innerWidth
  if(_w > 750){
    _w = 750
  }
  document.documentElement.style.fontSize = _w / (750 / 75) + 'px'
}