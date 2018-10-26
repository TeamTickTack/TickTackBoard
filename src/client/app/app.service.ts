import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { KontextInfoDto } from '../../server/ticker/dtos/kontextInfo.dto';
import { TickerMessageDto } from '../../server/ticker/dtos/tickerMessage.dto';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }
    public processMessage(message: TickerMessageDto) {
        return this.http.post<KontextInfoDto[]>('ticker/processMessage', message);
    }
}