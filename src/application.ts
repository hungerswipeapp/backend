import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {RepositoryMixin} from '@loopback/repository';
//import {RestApplication} from '@loopback/rest';
import morgan from 'morgan';
import { Request, Response } from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {MySequence} from './sequence';
import { WebsocketApplication } from "./websockets/websocket.application";
import { WebsocketControllerBooter } from "./websockets/websocket.booter";


export {ApplicationConfig};

export class BackendApiApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(WebsocketApplication)),
) {
  

  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.booters(WebsocketControllerBooter);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
      websocketControllers: {
        dirs: ['controllers'],
        extensions: ['.controller.ws.js'],
        nested: true,
      },
    };

    this.setupLogging();
    };
    private setupLogging() {
      // Register `morgan` express middleware
      // Create a middleware factory wrapper for `morgan(format, options)`
      const morganFactory = (config?: morgan.Options<Request, Response>) => {
        this.debug('Morgan configuration', config);
        return morgan('combined', config);
      };
  
      // Print out logs using `debug`
      const defaultConfig: morgan.Options<Request, Response> = {
        stream: {
          write: str => {
            this._debug(str);
          },
        },
      };
      this.expressMiddleware(morganFactory, defaultConfig, {
        injectConfiguration: 'watch',
        key: 'middleware.morgan',
      });
    }
  }
  


