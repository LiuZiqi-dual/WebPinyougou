$(function () {
  $.ajax({
    type: "get",
    url: "http://api.pyg.ak48.xyz/api/public/v1/home/swiperdata",
    dataType: "json",
    success: function (res) {
      console.log(res.data);
      $('.mui-slider-group').html(template(
        'slide_template', {
          res: res.data
        }
      ));
      //获得slider插件对象
      var gallery = mui('.mui-slider');
      gallery.slider({
      interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
      });
    }
  });
});
$.get("http://api.pyg.ak48.xyz/api/public/v1/home/catitems",
  function (res) {
    console.log(res);
    $('.catitems').html(
      template(
        'catitems_template',{res:res.data}
      )
    );
  },
  "json"
);