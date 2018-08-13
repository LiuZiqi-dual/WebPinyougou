$(function () {  
  setHTML();
  // 调用REM媒体查询
  onresize = function () {
    setHTML();
  }
  /* 配置REM */
  function setHTML() {
    // 基础值
    var baseSize = 100;
    // 设计稿宽度
    var baseWidth = 640;
    // 要适配的屏幕宽度
    var screenWidth = document.querySelector('html').offsetWidth;
    // 要适配的字体大小
    var screenFontsize = baseSize * screenWidth / baseWidth;
    // 将字体大小设置回
    document.querySelector("html").style.fontSize = screenFontsize + "px";
  }
})