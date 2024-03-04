class APIUriConfig {
  static getUri(baseUrl: string, endpoint: string): string {
    return `${baseUrl}${endpoint}`;
  }
  static getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    return headers;
  }
}

export default APIUriConfig;
