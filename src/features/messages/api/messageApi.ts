import { api } from '@/shared/api/axios';
import type { Message, SendMessageDto } from '@/shared/types/message';

  
  export const messageApi = {
    getMessages: () => api.get<Message[]>('/messages'),
  
    sendMessage: (data: SendMessageDto) =>
      api.post<Message>('/messages', data),
  };