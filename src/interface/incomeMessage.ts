export default interface IncomeMessageT {
  custom_id: string;
  sender_custom_id: string;
  reciver_custom_id: string;
  chat_room_id: string;
  is_read: boolean;
  is_notified: boolean;
  is_mentioned: boolean;
  mentioned_person_custom_id: string;
  message: string;
  time_stamp: string;
}
