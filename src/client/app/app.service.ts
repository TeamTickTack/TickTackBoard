import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { TickerHelperDto } from '../../server/ticker/dtos/tickerHelper.dto'
import { TickerMessageDto } from '../../server/ticker/dtos/tickerMessage.dto';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }
    public processMessage(message: TickerMessageDto) {
        return this.http.post<TickerHelperDto[]>('ticker/processMessage', message);
    }
}