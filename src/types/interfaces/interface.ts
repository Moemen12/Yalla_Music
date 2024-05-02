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
  email?: string;
}

export interface ChangePassword {
  password: string;
  // resetToken: string;
  passwordConfirmation: string;
}
