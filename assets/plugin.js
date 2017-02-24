require([ 'gitbook' ], function (gitbook) {
	handleEditButton = function (e, config) {
		/**
		 * [defaultOption: default option]
		 * @type {Object}
		 */
		const defaultOption = {
	        'repo': 'aleen42/PersonalWiki',
	        'branch': 'master'
	    };

	    /** if users have its option, and then combine it with default options */
		if (config['github-edit']) {
		// @deprecated
		// if (this.options.pluginsConfig['page-treeview']) {
			for (var item in defaultOption) {
				/** special for copyright */
				// @deprecated
				const configOption = config['github-edit'];
				
				// defaultOption[item] = this.options.pluginsConfig['page-treeview'][item] || defaultOption[item];
				if (item in configOption) {
					defaultOption[item] = configOption[item];
				}
			}
		}

		gitbook.toolbar.createButton({
			icon: 'fa fa-pencil-square-o ',
			label: 'Edit on GitHub',
			position: 'right',
			onClick: function() {
				
				let editUrl = 'https://github.com/' + defaultOption.repo + '/edit/' + defaultOption.branch + '/';
				let docsRoot = config.root;
				if(docsRoot){
					
					//removes ./ at the beginning, if any
					if(docsRoot.startsWith('./')){
						docsRoot = docsRoot.substr(2);
					}
					
					//removes trailing /, if any
					if(docsRoot.endsWith('/')){
						docsRoot = docsRoot.substr(0, docsRoot.length - 1);
					}
					
					editUrl += docsRoot;
				}
				
				editUrl += ('/' + gitbook.state.filepath);
				
				window.open(editUrl);
			}
		});
	};

	gitbook.events.bind('start', handleEditButton);
});
