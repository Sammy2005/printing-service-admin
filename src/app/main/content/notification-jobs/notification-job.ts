import {Notification} from './notification';

export class NotificationJob {
    id: number = 0;
    notification: Notification;
    channel: string;
    pending: string;
    success: string;
    queued: boolean;
    triggerDateTime: Date;
    sentDateTime: Date;
    createdAt: Date;
    updatedAt: Date;
}
