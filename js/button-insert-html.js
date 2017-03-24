(function() {
  tinymce.create('tinymce.plugins.MyButtons', {
    init : function(ed, url) {
      // ボタン設定
      ed.addButton( 'button_insert_html', {
        title : 'HTMLを挿入',
        image : url + '/button-insert-html.png',
        cmd: 'button_insert_html_cmd'
      });
      // ボタンの動作
      ed.addCommand( 'button_insert_html_cmd', function() {
        var raw_html = window.prompt('HTMLを入力してください','');
        ed.execCommand('mceInsertContent', 0, raw_html);
      });
    },
    createControl : function(n, cm) {
      return null;
    },
  });
  /* Start the buttons */
  tinymce.PluginManager.add( 'custom_button_script', tinymce.plugins.MyButtons );
})();