export type RegisterASP = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export type LoginASP = {
  email: string
  password: string
}

export type NewPasswordASP = {
  email: string
}

export type PasswordResetASP = {
  oldPassword: string
  newPassword: string
  confirmNewPassword: string
}
