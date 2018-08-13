$(function () {  
  // 截取字符串获取从URL传入的参数
  var cid = location.search.substr(5) - 0;
  // console.log(typeof cid);
  $.ajax({
    type: "get",
    url: "http://api.pyg.ak48.xyz/api/public/v1/goods/search",
    data: "?cid="+cid,
    dataType: "json",
    success: function (res) {
      console.log(res);
      $('.container').html(
        template('good_list_template',{
          res:res.data.goods
        })
      );
    }
  });
})