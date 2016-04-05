
### Reference

- http://onehungrymind.com/build-a-simple-website-with-angular-2
- https://github.com/johnpapa/angular2-tour-of-heroes
- https://github.com/simpulton/angular2-website-routes

### ติดตั้ง Node.js

- https://nodejs.org/en/

### ติดตั้ง Library

1. สร้างไฟล์ `package.json`

    ```json
    {
      "name": "angular2-tour-of-heroes",
      "version": "0.0.1",
      "scripts": {
        "postinstall": "typings install",
        "tsc": "tsc",
        "tsc:w": "tsc -w",
        "lite": "lite-server",
        "start": "concurrently \"npm run tsc:w\" \"npm run lite\" ",
        "typings": "typings"
      },
      "dependencies": {
        "angular2": "2.0.0-beta.13",
        "systemjs": "0.19.25",
        "es6-shim": "^0.35.0",
        "reflect-metadata": "0.1.2",
        "rxjs": "5.0.0-beta.2",
        "zone.js": "0.6.6"
      },
      "devDependencies": {
        "concurrently": "^2.0.0",
        "lite-server": "^2.2.0",
        "typescript": "^1.8.9",
        "typings":"^0.7.11"
      }
    }
    ```

2. พิมพ์คำสั่ง `npm install`


### เซ็ต TypeScript

- สร้างไฟล์ `tsconfig.json`

    ```json
    {
      "compilerOptions": {
        "target": "ES5",
        "module": "system",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "moduleResolution": "node",
        "removeComments": false,
        "noImplicitAny": true,
        "suppressImplicitAnyIndexErrors": true
      },
      "exclude": [
        "node_modules"
      ]
    }
    ```

### Bootstrapping

1. สร้างไฟล์ `index.html`

    ```html
    <html>
    <head>
        <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
        <script src="node_modules/systemjs/dist/system.src.js"></script>
        <script src="node_modules/rxjs/bundles/Rx.js"></script>
        <script src="node_modules/angular2/bundles/angular2.dev.js"></script>
        <script src="node_modules/angular2/bundles/router.dev.js"></script>
    </head>
    <body>
        <app>Loading...</app>
        <script>
            System.config({packages: {app: {format: 'register', defaultExtension: 'js'}}});
            System.import('app/boot')
                    .then(null, console.error.bind(console));
        </script>
    </body>
    </html>
    ```

2. สร้างไฟล์ `app/boot.ts`

    ```typescript
    import {bootstrap} from 'angular2/platform/browser';
    import {ROUTER_PROVIDERS} from 'angular2/router';
    import {AppComponent} from './app.component';

    bootstrap(AppComponent, [
      ROUTER_PROVIDERS
    ]);
    ```

3. สร้างไฟล์ `app/app.component.ts`

    ```typescript
    import {Component} from "angular2/core";
    import {ROUTER_DIRECTIVES} from "angular2/router";

    @Component({
        selector: "app",
        templateUrl: "app/app.component.html",
        styleUrls: ["app/app.component.css"],
        directives: [ROUTER_DIRECTIVES]
    })
    export class AppComponent {

    }
    ```

4. สร้างไฟล์ `app/app.component.html`

    ```html
    <h1>Hello, world</h1>
    ```

5. สร้างไฟล์ `app/app.component.css`
    ```css
    h1 {
       color: green;
    }
    ```

### รันโปรแกรม

```
npm start
```

### เซ็ต Route

- โดยเพิ่ม `@RouteConfig` ในไฟล์ `app/app.component.ts`

```typescript
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AboutComponent} from './about/about.component';
import {ExperimentsComponent} from experiments.comexperiments.component.tsmeComponent} from './home/home.component';
import {StateService} from common;
import {ExperimentsService} from './common/experiments.service';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [StateService, ExperimentsService],
})
@RouteConfig([
  {path: '/home',        name: 'Home',        component: HomeComponent, useAsDefault: true },
  {path: '/about',       name: 'About',       component: AboutComponent },
  {path: '/experiments', name: 'Experiments', component: ExperimentsComponent }
])
export class AppComponent {}
```


### สร้าง `HomeComponent` และ `StateService`

1. สร้างไฟล์ `app/home/home.component.ts`

    ```typescript
    import {Component, OnInit} from "angular2/core";
    import {StateService} from common;
    @Component({
        selector: "home",
        templateUrl: "app/home/home.component.html"
    })
    export class HomeComponent implements  OnInit {
        title = "Home Page";
        body = "This is th about home body";
        message: string;

        constructor(private state: StateService) {

        }

        ngOnInit():any {
            this.message = this.state.getMessage();
        }

        updateMessage(m: string) {
            this.state.setMessage(m);
        }
    }
    ```

2. สร้างไฟล์ `state/state.service.ts`

    ```typescript
    import {Injectable} from "angular2/core";

    @Injectable()
    export class StateService {
        message = "Hello Message";

        setMessage(m: string) {
            this.message = m;
        }

        getMessage() {
            return this.message;
        }
    }
    ```

### เขียน View

1. Update ไฟล์ `app/app.component.html`

    ```html
    <header id="header">
        <h1 id="logo">
            <a [routerLink]="['/Home']"></a>
        </h1>

        <div id="menu">
            <a [routerLink]="['/Home']" class="btn">Home</a>
            <a [routerLink]="['/About']" class="btn">About</a>
            <a [routerLink]="['/Experiments']" class="btn">Experiments</a>
        </div>

        <div class="color"></div>
        <div class="clear"></div>
    </header>

    <div class="shadow"></div>

    <div id="container">
        <router-outlet></router-outlet>
    </div>
    ```

2. Update ไฟล์ `app/home/home.component.html`

    ```html
    <h1>{{title}}</h1>

    {{body}}

    <hr>

    <div>
        <h2 class="text-error">Home: {{message}}</h2>
        <form class="form-inline">
            <input type="text" [(ngModel)]="message" placeholder="Message">
            <button type="submit" class="btn" (click)="updateMessage(message)">Update Message</button>
        </form>
    </div>
    ```

### Update ไฟล์อื่น ๆ

- `app/common/commmon.service.ts`
- `app/common/experiment.serivce.ts`
- `app/common/experiment.model.ts`
- `app/experiments/experiment.component.ts`
- `app/experiments/experiment.component.html`
- `app/experiments/experiment-details/experiment.detail.component.ts`
- `app/experiments/experiment-details/experiment.detail.component.html`
