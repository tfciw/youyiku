$(function() {
	$(document).on("pageInit", function() {
		$("#picker-user").picker({
			toolbarTemplate: '<header class="bar bar-nav">\
			<button class="button button-link pull-right close-picker" style="color:white;">确定</button>\
			<h1 class="title" style="color:white;">用户群</h1>\
			</header>',
			cols: [
			{
			textAlign: 'center',
			values: ['学校学生', '社会人士']
			}
			]
		});
		$("#picker-school").picker({
			toolbarTemplate: '<header class="bar bar-nav">\
			<button class="button button-link pull-right close-picker" style="color:white;">确定</button>\
			<h1 class="title" style="color:white;">学校</h1>\
			</header>',
			cols: [
			{
			textAlign: 'center',
			values: ['重庆师范大学', '重庆大学','重庆医科大学']
			}
			]
		});
		$("#picker-buildding").picker({
			toolbarTemplate: '<header class="bar bar-nav">\
			<button class="button button-link pull-right close-picker" style="color:white;">确定</button>\
			<h1 class="title" style="color:white;">寝室楼</h1>\
			</header>',
			cols: [
			{
			textAlign: 'center',
			values: ['清风苑A栋', '清风苑B栋','雅风苑A栋','雅风苑B栋','雅风苑C栋']
			}
			]
		});
    });
	$(document).on('click','.confirm-quode', function () {
	    $.alert('您确定生成总二维码？', '扫码');
	});
	$(document).on('click','.confirm-ok', function () {
      $.confirm('是否检查完所有订单', function () {
          $.alert('你已经检查完所有订单');
		  console.$;
      });
  });
  $.init();
});
