export function passwordValidator(password) {
  if (!password) return "Password can't be empty."
  if (password.length < 3) return 'Password must be at least 3 characters long.'
  return ''
}
