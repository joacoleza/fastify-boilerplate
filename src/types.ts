export interface IQuerystring {
  username: string;
  password: string;
}

export interface IHeaders {
  "h-Custom": string;
}

export interface IReply<T = undefined> {
  200: { success: boolean } & (T extends undefined ? {} : { data: T });
  302: { url: string };
  "4xx": { error: string };
}
