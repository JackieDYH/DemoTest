$.fn.getTreeKeys = function () {
    let selectedList = [];
    let all = $(this).getTree();
    for (let idx in all) {
        selectedList.push(all[idx]["key"]);
    }
    return selectedList;
};

$.fn.getTreeNames = function () {
    let selectedList = [];
    let all = $(this).getTree();
    for (let idx in all) {
        selectedList.push(all[idx]["name"]);
    }
    return selectedList;
};

$.fn.getTree = function () {
    let selectedList = [];
    let searchCheckedObj = $(this).find(".tree-picker-search-checked");

    let key = searchCheckedObj.attr("key");
    if (!String.isNull(key)) { //单选框的值
        selectedList.push({
            "key": key,
            "name": searchCheckedObj.text()
        });
        return selectedList;
    }

    searchCheckedObj.find(".tree-picker-search-checked-btn").each(function () { //多选框的值
        selectedList.push({
            "key": $(this).attr("key"),
            "name": $(this).text()
        })
    });
    return selectedList;
};

$.fn.clearTree = function () {
    $(this).find(".tree-picker-search-checked").html($(this).attr("tips"));
    $(this).find(".tree").removeClass('tree-nocheck').removeClass('tree-checked').addClass('tree-nocheck');
};


$.fn.setTree = function (keys) {
    if (String.isNull(keys)) return;

    let searchChecked = $(this).find(".tree-picker-search-checked");
    if (keys instanceof Object) { //多选框
        if (keys.length == 0)
            return;
        else {
            let searchCheckedItem = "";
            for (let idx in keys) {
                let checkedKey = keys[idx];
                let checkedObj = $(this).find(".tree +span[key='" + checkedKey + "']");
                let checkedName = checkedObj.html();

                checkedObj.prev().addClass('tree-checked').removeClass('tree-nocheck');
                searchCheckedItem += String.format("<div class='tree-picker-search-checked-btn' key='{0}'>{1}<a class='btn-selected remove-checked-btn' href='javascript:void(0)'><span class='glyphicon glyphicon-remove-circle' aria-hidden='true'></span></a></div>", checkedKey, checkedName);

            }
            if (!String.isNull(searchCheckedItem))
                searchChecked.html(searchCheckedItem);
        }
    }
    else  { //单选框
        let checkedObj = $(this).find(".tree-picker-options-list-content[key='" + keys + "']");
        let checkedName = checkedObj.html();
        $(this).find(".tree-checked").each(function () {
            $(this).addClass('tree-nocheck').removeClass('tree-checked')
        });
        checkedObj.prev().addClass('tree-checked').removeClass('tree-nocheck');
        searchChecked.attr("key", keys);
        searchChecked.html(checkedName);
    }
};

function setDataHTML(datas, isCheckBox, parentId='', level=0) {
    if (datas.length == 0) return "";

    let treeStyle = isCheckBox ? "" : "style='border-radius: 10px'";

    let html = "<ul style='list-style:none;margin-left: -40px'>";
    let margin = 18.9;
    for (let idx in datas) {
        let key = datas[idx]["key"];
        let name = datas[idx]["name"];
        let children = datas[idx]["children"];
        let type = datas[idx]["type"];
        let playHmtl = "";
        if (String.isNull(children)) {
            children = [];
        }

        if (type == "folder") {
            playHmtl = "<span style='font-size: 5px;' class='glyphicon glyphicon-triangle-bottom' aria-hidden='true'></span>";
        }

        html += '<li class="tree-picker-options-list-item">';
        html += String.format("<div class='tree-item' style='cursor: pointer' type='{0}' parent_id='{1}' level='{2}'>", type, parentId, level);
        html += String.format('<b class="tree tree-nocheck" {0}></b>', treeStyle);
        html += String.format('<span class="tree-picker-options-list-content" key="{0}">{1}</span>', key, name);
        html += playHmtl;
        html += '</div>';
        html += setDataHTML(children, isCheckBox, key, level + 1);
        html += '</li>';
    }
    html += "</ul>";

    return html;
}

$.fn.addTreeEvent = function(isCheckBox=true, changeEvent=null, tips="请选择", selectFolder=false) {
    let $this = $(this);

    // 点击收缩
    $this.off('click', ".tree-item");
    $this.on('click', ".tree-item", function () {
        let searchChecked = $this.find(".tree-picker-search-checked");
        let ul = $(this).parent().find(">ul");
        let itemObj = $(this);

        itemObj.find(".glyphicon").toggleClass("glyphicon-triangle-bottom glyphicon-triangle-right");
        ul.toggle();
        ul.find(".tree-picker-options-list-item").toggle();

        let oldSelectedKeys = $this.getTreeKeys();

        if (!isCheckBox) {
            let type = $(this).attr("type");
            if (type == "file" || type == "folder" && selectFolder) {
                let clickContent = $(this).find(".tree-picker-options-list-content");
                let clickKey = clickContent.attr("key");
                let clickName = clickContent.html();
                let thisTree = itemObj.find(".tree");
                $this.find(".tree").each(function () {
                    if ($(this).is(thisTree)) return;
                    $(this).removeClass("tree-checked").addClass("tree-nocheck");
                });
                thisTree.toggleClass("tree-nocheck tree-checked");

                if (thisTree.hasClass("tree-checked")) {
                    searchChecked.attr("key", clickKey);
                    searchChecked.html(clickName);
                }
                else {
                    searchChecked.removeAttr("key");
                    searchChecked.html(tips);
                }
            }

        }
        let nowoldSelectedKeys = $this.getTreeKeys();
        if (changeEvent && oldSelectedKeys.length != nowoldSelectedKeys.length && !compareObject(oldSelectedKeys, nowoldSelectedKeys)) { //改动监听
            changeEvent();
        }


    });

    // 点击选中或不选
    $this.off('click', ".tree");
    $this.on('click', ".tree", function () {
        if (!isCheckBox) { //单选框不在此处处理逻辑
            return;
        }

        let searchChecked = $this.find(".tree-picker-search-checked");
        let oldSelectedKeys = $this.getTreeKeys();
        let allTree = $(this).parent().parent().find(".tree"); //查找所有子项
        if ($(this).attr("class").indexOf("nocheck") != -1)
            allTree.removeClass('tree-nocheck').removeClass('tree-checked').addClass('tree-checked');
        else if ($(this).attr("class").indexOf("checked") != -1)
            allTree.removeClass('tree-nocheck').removeClass('tree-checked').addClass('tree-nocheck');

        let selectedKeys = $this.getTreeKeys();

        let searchCheckedItem = "";
        $this.find(".tree").each(function () {
            if ($(this).parent().attr("type") == "folder" && !selectFolder) return; //如果点击的是目录，但设置了目录不允许选中

            let key = $(this).next("span").attr("key");
            if (String.isNull(key)) return; //key为空时选择无效

            //添加已选择的项目
            if ($(this).hasClass("tree-checked")) {
                if (selectedKeys.includes(key)) return;
                let name = $(this).next("span").html();
                searchCheckedItem += String.format("<div class='tree-picker-search-checked-btn' key='{0}'>{1}<a class='btn-selected remove-checked-btn' href='javascript:void(0)'><span class='glyphicon glyphicon-remove-circle' aria-hidden='true'></span></a></div>", key, name);
            }
            //删除未选择的项目
            else {
                searchChecked.find(".tree-picker-search-checked-btn[key='" + key + "']").remove();
            }

        });

        if (selectedKeys.length == 0)
            searchChecked.html(searchCheckedItem);
        else
            searchChecked.append(searchCheckedItem);

        if (searchChecked.find(".tree-picker-search-checked-btn").length == 0)
            searchChecked.html(tips);

        let nowoldSelectedKeys = $this.getTreeKeys();
        if (changeEvent && oldSelectedKeys.length != nowoldSelectedKeys.length && !compareObject(oldSelectedKeys, nowoldSelectedKeys)) { //改动监听
            changeEvent();
        }
    });


    // 删除已选
    $this.off('click', ".remove-checked-btn");
    $this.on('click', ".remove-checked-btn", function (e) {   //功能代码部分，绑定事件
        let oldSelectedKeys = $this.getTreeKeys();

        let parentDiv = $(this).parent();
        let key = parentDiv.attr("key");

        parentDiv.remove();
        $this.find(".tree-checked +span[key='" + key + "']").prev().addClass('tree-nocheck').removeClass('tree-checked');

        if ($this.find(".remove-checked-btn").length == 0)
            $this.find(".tree-picker-search-checked").html(tips);

        if (changeEvent && !compareObject(oldSelectedKeys, $this.getSelectedKeys())) { //改动监听
            changeEvent();
        }
    });

    // 下拉显示隐藏
    $this.off('click', ".tree-picker-search");
    $this.on('click', ".tree-picker-search", function (e) {   //功能代码部分，绑定事件
        $(this).next('.tree-picker-options-wrp').toggle();
        $(this).next('.tree-picker-options-wrp').find('.tree-picker-options-serch input').focus();
    });



    // 下拉显示隐藏
    $this.off('click', ".tree-picker-search-checked-btn");
    $this.on('click', ".tree-picker-search-checked-btn", function (e) {   //功能代码部分，绑定事件
        $this.find('.tree-picker-options-wrp').css("display", "block");
        $this.find('.tree-picker-options-serch input').focus();
    });

    // 前端实现下拉搜索
    $this.off('keyup', ".tree-picker-options-serch input");
    $this.on('keyup', ".tree-picker-options-serch input", function () {
        var text = $(this).val();

        $this.find(".tree-picker-options-list-item").each(function () {
            let _this = $(this);
            let itemText = _this.text();
            if (!String.isNull(text) && itemText.toLowerCase().indexOf(text.toLowerCase()) == -1) {
                _this.hide();
            }
            else {
                _this.show();
            }

        });

    });

    return $this;
};

/**
 * 设置树形框
 * @param datas 数据
 * @param isCheckBox 是否多选
 * @param changeEvent change监听方法
 * @param tips 选择提示文案
 * @param maxHeight 最大高度
 * @param selectFolder 目录是否可选
 * @returns {jQuery|HTMLElement}
 */
$.fn.myTree = function (datas=[], isCheckBox=true, changeEvent=null, tips="请选择", maxHeight=200, selectFolder=false) {
    let $this = $(this);
    $this.attr("tips", tips);

    let html = '';
    html += '<div style="text-align: left" class="tree-picker-search">';
    html += '<div class="tree-picker-search-checked">' + tips + '</div>';
    html += '</div>';
    html += '<div style="text-align: left" class="tree-picker-options-wrp">';
    html += '<div class="tree-picker-options-serch">';
    html += '<input type="text" placeholder="">';
    html += '</div>';
    html += '<div class="tree-picker-options-list" style="height: ' + maxHeight + 'px">';
    html += setDataHTML(datas, isCheckBox);
    html += '</div>';
    html += '</div>';

    $this.html(html);
    $this.addTreeEvent(isCheckBox, changeEvent, tips, selectFolder);

    return $this;
};
// 点击document任意地方 下拉消失
$(document).click(function (event) {
var _con = $('.tree-picker-options-wrp'); // 设置目标区域
var _con2 = $('.tree-picker-search-checked'); // 设置目标区域
if (!_con2.is(event.target) && !_con.is(event.target) && _con.has(event.target).length === 0) { // Mark 1
  $('.tree-picker-options-wrp').hide(); //淡出消失
}
});

String.isNull = function() {
    if (arguments.length == 0)
        return true;
    let str = arguments[0];
    if (typeof(str) == "string" && str == "" || str == null || str == "undefined")
        return true;
    return false;
}


String.format = function() {
    if (arguments.length == 0)
        return null;
    let str = arguments[0];
    for ( let i = 1; i < arguments.length; i++) {
        let re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
};

function compareObject(object1, object2) {
    for (let propName in object1) {
        if (object1.hasOwnProperty(propName) != object2.hasOwnProperty(propName)) {
            return false;
        }
        else if (typeof object1[propName] != typeof object2[propName]) {
            return false;
        }
    }

    for(let propName in object2) {
        if (object1.hasOwnProperty(propName) != object2.hasOwnProperty(propName)) {
            return false;
        }
        else if (typeof object1[propName] != typeof object2[propName]) {
            return false;
        }
        if(!object1.hasOwnProperty(propName))
            continue;

        /**REQUIRES Array.equals**/
        if (object1[propName] instanceof Array && object2[propName] instanceof Array) {
            // recurse into the nested arrays
            if (!object1[propName].equals(object2[propName]))
                return false;
        }
        else if (object1[propName] instanceof Object && object2[propName] instanceof Object) {
            if (!object1[propName].equals(object2[propName]))
                return false;
        }
        else if(object1[propName] != object2[propName]) {
            return false;
        }
    }
    return true;
}
