import * as core from 'express-serve-static-core';
import {config} from '@jovijovi/pedrojs-common';
import {http, ITaskHandler} from '@jovijovi/pedrojs-network-http';
import * as eth from '../lib';

class privateImplHandlers implements ITaskHandler {
	RegisterHandlers(router: core.Express) {
		eth.Handler.APIs(router);
	}

	UseMiddleware(app: core.Express) {
		// Custom middleware
		return;
	}
}

const RestfulHandlers = new privateImplHandlers();


test('Run RESTFul API sever', async () => {
	config.LoadConfig('./test/conf/app.config.yaml');
	http.server.Run(RestfulHandlers);
})
