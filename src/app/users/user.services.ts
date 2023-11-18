import config from '../../config'
import { User } from './user.model'
import { genarateUserId } from './user.utils'
import { IUser } from './users.interface'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await genarateUserId()
  user.id = id

  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createUser = await User.create(user)
  if (!createUser) {
    throw new Error('Failed to create user')
  }
  return createUser
}

export const userServices = {
  createUser,
}
