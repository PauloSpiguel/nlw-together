type PayloadType = {
  [key: string]: string;
  email: string;
};

type OptionsType = {
  [key: string]: string;
  subject?: string;
  expiresIn?: string;
};

interface ITokenProvider {
  createToken: (payload: PayloadType, options?: OptionsType) => string;
  verifyToken: (token: string, options?: any) => string | Record<string, any>;
  decodeToken: (token: string, options?: any) => string | Record<string, any>;
}

export default ITokenProvider;
