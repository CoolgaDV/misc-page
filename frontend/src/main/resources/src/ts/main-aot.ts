import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../../build/aot/ts/src/ts/app/app.module.ngfactory';

console.log('Running AOT compiled');

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);