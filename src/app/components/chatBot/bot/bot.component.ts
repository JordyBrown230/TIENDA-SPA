import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChatbotService } from 'src/app/services/bot.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent {
  inputQuestion: string;
  isOpen = false;
  chat: string[] = [];
  showMessages = false;

  constructor(private chatbotService: ChatbotService,private http: HttpClient) { 
    this.inputQuestion ='';
    this.chat.push('Bot: ¡Bienvenido! ¿En qué puedo ayudarte hoy?');
  }

  ngOnInit() {
    setTimeout(() => {
      this.showMessages = true;
    }, 200);
  }

  sendMessage() {
    const message = this.inputQuestion.trim();
    if (message !== '') {
      this.chat.push(`User: ${message}`);
      this.inputQuestion = '';
      this.chatbotService.sendMessage(message).subscribe({
        next:(response:any)=>{
          //console.log(response);
          const botResponse = response.choices[0].text;   //la respuesta regresa un objeto con un arreglo llamado choices.
          if(botResponse){
            this.chat.push(`Bot: ${botResponse}`);
          }
        },
        error:(err:Error)=>{
          console.log(err);
        }
      })
    }
  }

  openChatbot() {
    this.isOpen = !this.isOpen;
  }

  closeChatbot() {
    this.isOpen = false;
  }

  clearChat(){
    this.chat = [];
    this.chat.push('Bot: ¡Bienvenido! ¿En qué puedo ayudarte hoy?');
  }

}
