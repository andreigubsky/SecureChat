import { api } from '../../../shared/api/axios';
import type { Message } from '../../../shared/types/message';

export const messageService = {
    async getMessage(): Promise<Message[]>{
        const res = await api.get('/todos');
        return res.data;
    },

    async sendMessage(message: Partial<Message>): Promise<Message> {
        const res = await api.post('/todos', message);
        return res.data;
      },

      async updateMessage(id: number, data: Partial<Message>) {
        const res = await api.patch(`/todos/${id}`, data);
        return res.data;
      },
    
      async deleteMessage(id: number) {
        await api.delete(`/todos/${id}`);
      }

};