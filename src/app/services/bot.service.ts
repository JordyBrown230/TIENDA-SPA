import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'https://api.openai.com/v1/completions';
  private accessToken = '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';

  constructor(private http: HttpClient) {}

  sendMessage(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.accessToken}`
    });

    const body = {
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 2048,
      temperature: 0.5
    };
    return this.http.post(this.apiUrl, body, { headers: headers });
  }
}