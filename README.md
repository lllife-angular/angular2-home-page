
### Reference

- http://onehungrymind.com/build-a-simple-website-with-angular-2

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