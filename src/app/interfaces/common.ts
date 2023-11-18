import { IGenericErorMessages } from './error'

export type IGenericErrorResponse = {
  statusCode: number
  message: string
  errorMessages: IGenericErorMessages[]
}
