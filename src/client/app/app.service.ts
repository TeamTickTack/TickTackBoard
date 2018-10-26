import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { ITickerHelperEntity } from '../../server/ticker/dtos/tickerHelperEntitiy.interface'
import { TickerMessageDto } from '../../server/ticker/dtos/tickerMessage.dto';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }
    public processMessage(message: TickerMessageDto) {
        return this.http.post<ITickerHelperEntity>('ticker/newMessage', message);
    }
}