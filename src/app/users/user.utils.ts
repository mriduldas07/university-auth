import { User } from './user.model'

const lastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id
}

export const genarateUserId = async () => {
  const currentId = (await lastUserId()) || (0).toString().padStart(5, '0') //00000 or database id
  // increment by 1
  const incrementalId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementalId
}
