import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Uuid} from "./uuid";

@Injectable()
export class UuidApplicationService {

    private static readonly UUID_URL: string = "rest/uuid.json";

    constructor(private http: Http) { }

    getUuid(): Promise<Uuid> {
        return this.http
            .get(UuidApplicationService.UUID_URL)
            .map((response: Response) => response.json())
            .toPromise();
    }

}