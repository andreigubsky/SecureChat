export type Message {
    id: number;
    text: string;
    completed: boolean;
    userId: number;
    chatId: number;
}

  
export  type SendMessageDto = {
    text: string;
    chatId: number;
  };