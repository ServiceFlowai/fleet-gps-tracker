export const loginUser = async (email: string, password: string) => {
  // Mock implementation
  if (email === 'admin@example.com' && password === 'password') {
    return Promise.resolve();
  }
  throw new Error('Invalid credentials');
};

export const registerUser = async (email: string, password: string) => {
  // Mock implementation
  return Promise.resolve();
};