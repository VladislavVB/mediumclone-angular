export interface IRegisterRequest {
  user: {
    username: string
    email: string
    password: string
  }
}

export interface IRegisterDataRequest {
  username: string
  email: string
  password: string
}
