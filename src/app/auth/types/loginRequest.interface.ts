export interface ILoginRequest {
  user: {
    email: string
    password: string
  }
}

export interface ILoginDataRequest {
  email: string
  password: string
}
