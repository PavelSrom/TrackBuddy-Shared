export interface RegisterASP {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface LoginASP {
  email: string
  password: string
}

export interface NewPasswordASP {
  email: string
}

export interface PasswordResetASP {
  oldPassword: string
  newPassword: string
  confirmNewPassword: string
}
