// 设定本地存储，首屏加载，不会因为刷新而改变收藏状态

export function saveToLocal(id, key, value) { // 新增或者修改本地缓存
	let seller = window.localStorage.__seller__;
	if (!seller) {
		seller = {};
		seller[id] = {};
	} else {
		seller = JSON.parse(seller);
		if (!seller[id]) {
			seller[id] = {};
		}
	}
	seller[id][key] = value;
	window.localStorage.__seller__ = JSON.stringify(seller);
};

export function loadFromLocal(id, key, def) {  // 查询本地缓存
	let seller = window.localStorage.__seller__;
	if (!seller) {
		return def;
	}
	seller = JSON.parse(seller)[id];
	if (!seller) {
		return def;
	}
	let ret = seller[key];
	return ret || def;
};
