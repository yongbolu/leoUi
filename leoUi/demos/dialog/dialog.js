leoUiLoad.config({

    debug: false,

    baseUrl: 'leoUi/',

    alias: {

        leoCss: '../../css/leo.css',

        jqueryMousewheel: '../jquery/jquery-mousewheel'

    },

    shim: {

        jquery: {

            src: '../jquery/jquery-1.9.1.js',

            exports: "$"

        }　

    }

})

leoUiLoad.require('leoUi-dialog,leoCss,ready', function($) {

    var a = $.leoDialog({

        appendTo: 'body',

        contentHtml: '<div id="delete_image">' + '<div class="send_content clearfix">' + '<div class="text">' + '<span class="icon"></span>' + '<span class="title">标题内容</span>' + '</div>' + '<div class="send_bottom clearfix">' + '<input class="send_submit" type="submit" value="改变按钮" name="submit" />' + '<input class="send_off" type="submit" value="取消" name="submit" />' + '</div>' + '</div>' + '</div>',

        captionButtons: false,

        titlebarDblclickMax:false,

        title:'A',

        height: 190,

        resizableOption: {

            containment: 'parent',

            stopMouseWheel: true,

            iframeFix:true

        },

        quickClose: true,

        isMoveToTop:true,

        draggableOption: {

            containment: 'parent',

            stopMouseWheel: false,

            iframeFix:true

        },

        // disabled:true,

        initDraggable: true,

        restore: true,

        modal: true,

        dialogFocus:function(target){

            $(target).find('input').focus();

        }

    });

    var c = $.leoDialog({

        appendTo: 'body',

        contentHtml: '<div id="delete_image">' + '<div class="send_content clearfix">' + '<div class="text">' + '<span class="icon"></span>' + '<span class="title">标题内容</span>' + '</div>' + '<div class="send_bottom clearfix">' + '<input class="send_submit" type="submit" value="改变按钮" name="submit" />' + '<input class="send_off" type="submit" value="取消" name="submit" />' + '</div>' + '</div>' + '</div>',

        title:'C',

        captionButtons: ['maximize', 'close', 'minimize', 'pin'],

        height: 190,

        // showDelay:1000,

        resizableOption: {

            containment: 'parent',

            stopMouseWheel: true,

            iframeFix:true

        },

        quickClose: true,

        isMoveToTop:true,

        draggableOption: {

            containment: 'parent',

            stopMouseWheel: false,

            iframeFix:true

        },

        // disabled:true,

        initDraggable: false,

        restore: false,

        modal: false,

        dialogFocus:function(target){

            $(target).find('input').focus();

        }

    });

    var b = $.leoDialog({

        appendTo: 'body',

        dialogHtml: '<div class="leoDialog">' + '<div class="leoDialog_titlebar leoUi_clearfix">' + '<span class="leoDialog_title">标 题</span>' + '</div>' + '<div class="leoDialog_content leoDialog_content_iframe">' + '</div>' + '</div>',

        contentHtml: '<iframe style="width:50%;height:100%;position:relative;z-index:998" frameborder="0" src="http://www.w3school.com.cn/"></iframe><iframe style="width:50%;height:100%;position:relative;z-index:999" frameborder="0" src="http://www.bootcss.com/"></iframe>',

        title:'B',

        isMoveToTop:true,

        width: 600,

        height: 300,

        // disabled:true,

        showAnimation: function(callBack) {

            this.show(500, callBack);

        },

        titlebarDblclickMax:false,

        hideAnimation: function(callBack) {

            this.hide(500, callBack);

        },

        resizableOption: {

            containment: 'parent',

            iframeFix:true

        },

        draggableOption: {

            containment: 'parent',

            iframeFix:true

        },

        initDraggable: true,

        restore: false,

        modal: false,

        dialogFocus:function(target){

            $(target).find('iframe').focus();

        }

    });

    $('#botton_1').on('click', function() {


        if (a.dialogState() === "close") {

            a.dialogShow();

        } else if (a.dialogState() === "open") {

            a.dialogHide();
        }


        a.option('okCallBack', function(event, disabled, enable) {

            b.option({'captionButtons': [], titlebarDblclickMax:true});

            a.option('captionButtons', ['close', 'toggle', 'pin']);
            // a.option('draggableOption.stopMouseWheel', true)
            // a.option('scope','all' );
            // a.option({width:200,height:500,'position':{
            // disabled()
            // my: "center",

            // at: "right top",

            // of: window,

            // collision: "fit",using: function( pos ) {

            //   var topOffset = $( this ).css( pos ).offset().top;

            //   if ( topOffset < 0 ) {

            //       $( this ).css( "top", pos.top - topOffset );

            //   }

            // }} })


            // a.option({width:200,height:500,'position.at':'right top'} )

        })

        a.option('cancelCallBack', function(event, disabled, enable) {

            // a.option('disable', true);
           a.option('okButtonClassName', '.send_off');

        });

        c.option('initDraggable', true);

        b.option('contentHtml', '<iframe style="width:100%;height:100%;" frameborder="0" src="http://www.w3school.com.cn"></iframe>');
    })

    var flag = false;

    $('#botton_2').on('click', function() {

        b.dialogShow();

        c.dialogShow();

        b.option('disabled',flag)

        a.option('disabled',flag)

        // a.destroy();

        // b.destroy();

        // c.destroy();

        // b.option({width:200,height:500,contentHtml:'<div>'})

        flag = !flag;


    })


});