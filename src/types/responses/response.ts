export type GeneralResponse = {
  message: string;
  access_token: string;
};
export type GeneralErrorResponse = {
  status: number;
  data: {
    message: string;
  };
};

export type CreatorModeInfo = {
  isModeEnabled: boolean;
};

export type UserInfo = {
  name: string;
  lastname: string;
  username: string;
  bio: string;
  country: string;
  email: string;
  isOtpEnabled: boolean;
  otpauthURL: string;
  profile_image: string;
  createdAt: Date;
  facebook_url: string | "";
  instagram_url: string | "";
  discord_url: string | "";
  snapchat_url: string | "";
};

export enum NotificationType {
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
  SUCCESS = "success",
}

export type Notification = {
  _id: string;
  title: string;
  content: string;
  message: string;
  type: NotificationType;
  createdAt: string;
  isRead: boolean;
};

export type NotificationResponse = Notification[];
