interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

export { CreateUserDTO };
