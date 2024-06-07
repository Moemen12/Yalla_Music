export interface SignupInputs {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface LoginInputs {
  email: string;
  password: string;
}

export interface EmailCode {
  code?: string;
  email: string | null;
}

export interface OtpCode {
  otp: string;
  email: string | null;
}

export interface ChangePassword {
  password: string;
  passwordConfirmation: string;
}

export interface SettingsInputs {
  name: string | null;
  lastName: string | null;
  country: string | null;
  bio: string | null;
  facebook_url: string | null;
  instagram_url: string | null;
  discord_url: string | null;
  snapchat_url: string | null;
}

export interface GenreBtnProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface NavigateBtnProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}
