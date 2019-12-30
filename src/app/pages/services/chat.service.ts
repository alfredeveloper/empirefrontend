import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
  ) { }
  /*

  enterChat(data: Object) {
    this.socket.emit('enter-room', data, function (_data) {
      return _data;
    });
  }

  sendMessageTo(data: Object, grupal: boolean) {
    // const event = grupal === true ? 'create-message-chat' : 'private-message';
    const event = grupal === true ? 'message' : 'private-message';
    this.socket.emit(event, data);
  }
  async enterTo(data: Object, grupal: boolean) {
    const event = grupal === true ? 'enter-room' : 'enter-chat-one-to-one';
    await this.socket.emit(event, data, (resp: any) => {
      console.log(resp);
      return resp;
    });
  }

  getMessage(grupal: boolean) {
    // const event = grupal === true ? 'create-message-chat' : 'private-message';
    const event = grupal === true ? 'message' : 'private-message';
    console.log(event);
    // return this.socket.fromEvent('message');
    return this.socket.fromEvent(event);
  }
  getChatList() {
    console.log('service list');
    return this.socket.fromEvent('list-person-chat-one-to-one');
  }

  disconnect() {
    this.socket.disconnect('chat-one-to-one-room');
  }
  */
}
