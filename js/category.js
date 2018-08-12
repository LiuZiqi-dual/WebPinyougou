$(
  function () {
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

    //ajax左侧列表
    $.ajax({
      type: "get",
      url: "http://api.pyg.ak48.xyz/api/public/v1/categories",
      dataType: "json",
      success: function (res) {
        console.log(res);
        $('.cat_name').html(
          template('cat_name_template', {
            res: res.data
          })
        );

        // 初始化iScroll
        var myScroll = new IScroll('.wrapper');
        // var myScroll1 = new IScroll('.wrapper1');
      }
    });



  })