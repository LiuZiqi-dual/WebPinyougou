$(function () {
  // 截取字符串获取从URL传入的参数
  var cid = location.search.substr(5) - 0;
  // console.log(typeof cid);
  $.ajax({
    type: "get",
    url: "http://api.pyg.ak48.xyz/api/public/v1/goods/search",
    data: "?cid=" + cid,
    dataType: "json",
    success: function (res) {
      console.log(res);
      $('.pyg_view ul').html(
        template('good_list_template', {
          res: res.data.goods
        })
      );
      // pullupRefresh();
    }
  });



  /**
   * 下拉刷新具体业务实现
   */
  // function pulldownRefresh() {
  // 	setTimeout(function() {
  // 		var table = document.body.querySelector('.mui-table-view');
  // 		var cells = document.body.querySelectorAll('.mui-table-view-cell');
  // 		for (var i = cells.length, len = i + 3; i < len; i++) {
  // 			var li = document.createElement('li');
  // 			li.className = 'mui-table-view-cell';
  // 			li.innerHTML = '<a class="mui-navigate-right">Item ' + (i + 1) + '</a>';
  // 			//下拉刷新，新纪录插到最前面；
  // 			table.insertBefore(li, table.firstChild);
  // 		}
  // 		mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
  // 	}, 1500);
  // }
  // var count = 0;
  /**
   * 上拉加载具体业务实现
   */

  // function pullupRefresh() {
  //   mui.init({
  //     pullRefresh: {
  //       container: ".pyg_view", //下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
  //       down: {
  //         // auto: true, //可选,默认false.首次加载自动上拉刷新一次
  //         callback: function () {

  //         } //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
  //       }
  //     }
  //   });
  // }
  // if (mui.os.plus) {
  // 	mui.plusReady(function() {
  // 		setTimeout(function() {
  // 			mui('#pullrefresh').pullRefresh().pullupLoading();
  // 		}, 1000);

  // 	});
  // } else {
  // 	mui.ready(function() {
  // 		mui('#pullrefresh').pullRefresh().pullupLoading();
  // 	});
  // }




  // mui.init({
  //   gestureConfig:{
  //     doubletap:true
  //   },
  //   subpages:[{
  //     url:'good_list.html',
  //     id:'containerPullrefresh',
  //     styles:{
  //       top: '1.1rem',
  //       bottom: '0px',
  //     }
  //   }]
  // });


  // mui.init({
  //   pullRefresh: {　　
  //     swipeBack: false, //关闭左滑关闭功能
  //     container: "#refreshContainer", //下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
  //     down: {
  //       style: 'circle', //必选，下拉刷新样式，目前支持原生5+ ‘circle’ 样式
  //       color: '#2BD009', //可选，默认“#2BD009” 下拉刷新控件颜色
  //       height: '50px', //可选,默认50px.下拉刷新控件的高度,
  //       range: '100px', //可选 默认100px,控件可下拉拖拽的范围
  //       offset: '0px', //可选 默认0px,下拉刷新控件的起始位置
  //       auto: true, //可选,默认false.首次加载自动上拉刷新一次
  //       // callback: pulldownRefresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
  //     },
  //     // 　　up: {　　　　
  //     //   contentrefresh: '正在加载...',
  //     //   　　　　contentnomore: '没有更多数据了',
  //     //   // 　　　　callback: pulluploading //上拉加载下一页
  //     //   　　
  //     // }
  //   }
  // });




})