// 日期格式化
function getTime() {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	month = month < 10 ? '0' + month : month;
	var day = date.getDate();
	day = day < 10 ? '0' + day : day;

	var hours = date.getHours();
	hours = hours < 10 ? '0' + hours : hours;

	var minutes = date.getMinutes();
	minutes = minutes < 10 ? '0' + minutes : minutes;

	var seconds = date.getSeconds();
	seconds = seconds < 10 ? '0' + seconds : seconds;

	var str = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
	return str;
};

// 获取area【内容】
var area = document.getElementById("area");
// 获取useCount【显示长度】
var useCount = document.querySelector(".useCount");
// 获取按钮，点击事件
var send = document.getElementById("send");
// 获取ul【添加li】
var ul = document.querySelector(".contentList ul");

// 给area添加事件
area.oninput = function () {
	// 获取内容的长度
	var len = this.value.length;
	// 赋值给span
	useCount.innerText = len;
}
// 点击发布
send.onclick = function () {
	var newString = area.value.replace(/\n/g, "<br />").replace(/\r/g, "<br />").replace(/\s/g, "&nbsp;");
	var len = area.value.length;
	if (len == 0) {
		alert("内容不能为空，请输入内容");
	} else {
		// 创建li
		var newli = document.createElement("li");
		ul.insertBefore(newli, ul.firstChild);

		// 个人信息
		var info = document.createElement("div");
		info.className = "info";
		newli.appendChild(info);

		// 创建人物头像
		var newimg = document.createElement("img");
		info.appendChild(newimg);
		newimg.src = "03.jpg";

		// 创建人物昵称
		var span = document.createElement("span");
		info.appendChild(span);
		span.innerText = "小李飞刀";

		// 创建时间
		var p = document.createElement("p");
		info.appendChild(p);
		p.innerText = '发布于：' + getTime();

		// 内容
		var content = document.createElement("div");
		content.className = "content";
		newli.appendChild(content);
		content.innerHTML = newString;

		// 清空
		area.value = "";
		useCount.innerText = 0;
	}
}