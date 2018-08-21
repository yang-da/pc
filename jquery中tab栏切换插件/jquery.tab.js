(function ($,window) {


	var newSettings;

	// 开发插件
	function Tab(userSettings) {

		// 在插件内部 先给一些默认配置  如果用户不传参数 则按默认来
			// 把可扩展的参数往这里写  div的内容  按钮上的文字  事件类型click mouseover
		var defaultSettings = {
			'divCon':['内容1', '内容2', '内容3'],
			'btnVal': ['按钮1', '按钮2', '按钮3'],
			'evType': 'click'
		}

		// 给一个新的json对象 进行合并属性

		newSettings = {};
		// console.log(123);
		// 这个方法既可以扩展工具方法 也可以用来做对象属性拷贝
		$.extend(newSettings,defaultSettings,userSettings)

		// console.log(newSettings);
		// console.log(defaultSettings);
		// console.log(userSettings);

		// 写一个函数 创建元素
		create.call(this);
		// 功能实现
		eventFn.call(this);
	}

	function create() {
		// 创建input
		 for(var i = 0; i < newSettings.btnVal.length; i++) {
		 	var oInp =  $('<input type="button" value="'+  newSettings.btnVal[i] +'" />');
		 	if(i===0) {
		 		oInp.addClass('active');
		 	}
		 	this.append(oInp);
		 }
		 // 生成div
		 for(var i = 0; i < newSettings.divCon.length; i++) {
		 	var oDiv = $('<div>'+ newSettings.divCon[i] +'</div>');
		 	if(i===0) {
		 		oDiv.show();
		 	}
		 	this.append(oDiv);
		 }
	}

	function eventFn() {
		this.find('input').on(newSettings.evType,function () {
			
			$(this).addClass('active').siblings('input').removeClass('active');
			$(this).siblings('div').eq( $(this).index() ).show().siblings('div').hide();
		})
	}

	$.fn.extend({

		// tab
		tab: Tab

	});




})(jQuery,window);