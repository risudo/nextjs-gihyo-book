import { ApiContext, User } from 'types'
import { fetcher } from 'utils'

export type SigninParams = {
  // サンプルユーザーのユーザー名は"user"
  username: string
  // サンプルユーザーのユーザー名は"password"
  password: string
}

const signin = async (
  context: ApiContext,
  params: SigninParams,
): Promise<any> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export default signin
