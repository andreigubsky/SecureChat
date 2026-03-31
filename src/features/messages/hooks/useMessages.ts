import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { messageService } from '../services/messageService';
import type { Message } from '../../../shared/types/message';

export const useMessages = () => {
    return useQuery<Message[]>({
        queryKey: ['messages'],
        queryFn: messageService.getMessage
    });
};
 
export const useSendMessage = () => {
    const queryClient = useQueryClient();
    return useMutation<Message, unknown, { text: string; userId: number }>({
        mutationFn: messageService.sendMessage,
        onSuccess: ()=>{
        queryClient.invalidateQueries({ queryKey:['messages']});
        }
    });

};