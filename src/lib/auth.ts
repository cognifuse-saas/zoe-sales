import { Auth } from 'aws-amplify'

export async function signIn(email: string, password: string) {
  try {
    const user = await Auth.signIn(email, password)
    return user
  } catch (error) {
    throw error
  }
}

export async function signUp(email: string, password: string) {
  try {
    const { user } = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email
      }
    })
    return user
  } catch (error) {
    throw error
  }
}

export async function confirmSignUp(email: string, code: string) {
  try {
    await Auth.confirmSignUp(email, code)
  } catch (error) {
    throw error
  }
}

export async function forgotPassword(email: string) {
  try {
    await Auth.forgotPassword(email)
  } catch (error) {
    throw error
  }
}

export async function forgotPasswordSubmit(
  email: string,
  code: string,
  newPassword: string
) {
  try {
    await Auth.forgotPasswordSubmit(email, code, newPassword)
  } catch (error) {
    throw error
  }
}
