import {NotificationJob} from './notification-job';
import {NotificationRecipient} from './notification-recipient';

export class Notification {
    id: number = 0;
    notificationJobs: NotificationJob[];
    channels: string;
    subject: string;
    message: string;
    delivery: boolean;
    notificationRecipient: NotificationRecipient;
    sentDateTime: Date;
    createdAt: Date;
    updatedAt: Date;
}
