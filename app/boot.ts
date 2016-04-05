import {ROUTER_PROVIDERS, APP_BASE_HREF} from "angular2/router";
import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from "./app.component";
import {provide} from "angular2/core";

bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue : '/' })]);