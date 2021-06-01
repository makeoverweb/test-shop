import qs from "query-string";

export const ENDPOINT = "//localhost:3001/";

class ApiCall {
  domain: string;

  constructor(domain: string) {
    this.domain = domain;
  }

  async perform(url: string, data?: any, config?: any) {
    const request = await fetch(`${this.domain}${url}`, {
      ...config,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await request.json();
  }

  async get(path: string, searchParams?: any) {
    return await this.perform(`${path}${qs.stringify(searchParams)}`);
  }

  async post(path: string, data: any) {
    return await this.perform(path, data, {
      method: "POST",
    });
  }

  async patch(path: string, payload: any) {
    return await this.perform(path, payload, {
      method: "PATCH",
    });
  }

  // async delete(path: string) {
  //   return await this.perform(path, null, {
  //     method: "DELETE",
  //   });
  // }
}

const Api = new ApiCall(ENDPOINT);

export { Api };
