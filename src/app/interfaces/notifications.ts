export interface Notifications {
  id: number;
  user_id: number;
  order_id: number;
  notification_type: string;
  email: string;
  phone: number;
  push_id: number;
  notification_subject: string;
  notification_body: string;

}
