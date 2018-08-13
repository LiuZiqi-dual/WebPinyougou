$(
  function () {
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
        // 初始化右边的默认样式
        $('.cat_name ul li:first-child').addClass('active_nav').siblings().removeClass('active_nav');
        $.get("http://api.pyg.ak48.xyz/api/public/v1/categories",
          function (res) {
            // console.log(res.data[index].children);
            $('.cat_children').html(
              template(
                'cat_children_template', {
                  res: res.data[0].children
                }
              )
            );
            // 初始化iScroll
            window.onload = function () {
              var myScroll1 = new IScroll('.wrapper1');
            }
          },
          "json"
        );
        // 初始化iScroll
        var myScroll = new IScroll('.wrapper');
        // var myScroll1 = new IScroll('.wrapper1');
      }
    });

    // 左边点击事件
    $('.cat_name').on('tap', 'li', function () {
      var index = this.dataset.index;
      // console.log(this.attr('data-index'));
      $(this).addClass('active_nav').siblings().removeClass('active_nav');

      $.get("http://api.pyg.ak48.xyz/api/public/v1/categories",
        function (res) {
          // console.log(res.data[index].children);
          $('.cat_children').html(
            template(
              'cat_children_template', {
                res: res.data[index].children
              }
            )
          );
          // 初始化iScroll
          window.onload = function () {
            var myScroll1 = new IScroll('.wrapper1');
          }
        },
        "json"
      );
    });

  })