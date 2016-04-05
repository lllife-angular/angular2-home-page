

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