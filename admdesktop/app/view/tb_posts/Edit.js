/**
*	@Autor: Maciel Sousa
*	@Email: macielcr7@gmail.com
**/

Ext.define('ShSolutions.view.tb_posts.Edit', {
    extend: 'Ext.window.Window',
	alias: 'widget.addtb_postswin',

    id: 'AddTb_PostsWin',
    layout: {
        type: 'fit'
    },
	maximizable: false,
    minimizable: true,
	height: 458,
    width: 800,
    border: false,
    modal: true,
    title: 'Cadastro de Paginas',

    initComponent: function() {
        var me = this;


        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    id: 'FormTb_Posts',
                    bodyPadding: 10,
                    autoScroll: true,
                    method: 'POST',
                    url : 'server/modulos/tb_posts/save.php',
                    items: [
						{
							xtype: 'textfield',
							name: 'dsc_pagina',
							id: 'dsc_pagina_tb_posts',
							anchor: '100%',							
							fieldLabel: 'Titulo'
						},
                        {
							xtype: 'htmleditor',
							name: 'texto_pagina',
                            height: 400,
							id: 'texto_pagina_tb_posts',
							anchor: '100%',							
							fieldLabel: 'Conteúdo',      
                            plugins: [new Ext.create('Ext.ux.form.HtmlEditor.imageUpload', {enableContextMenu:true})]
						},
						{
							xtype: 'hidden',
							name: 'cod_pagina',
							hidden: true,
							id: 'cod_pagina_tb_posts',
							value: 0,
							anchor: '100%'
						},
						{
							xtype: 'hidden',
							name: 'action',
							hidden: true,
							id: 'action_tb_posts',
							value: 'INSERIR',
							anchor: '100%'
						}
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            id: 'button_resetar_tb_posts',
                            iconCls: 'bt_cancel',
                            action: 'resetar',
                            text: 'Resetar'
                        },
                        {
                            xtype: 'button',
                            id: 'button_salvar_tb_posts',
                            iconCls: 'bt_save',
                            action: 'salvar',
                            text: 'Salvar'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);

    }

});
