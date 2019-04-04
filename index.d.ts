declare module 'open-graph-scraper' {
  function scrape(options: IOptions): Promise<IScrapeResult>

  export interface IOptions {
    url: string
    timeout?: number
    followAllRedirects?: boolean
    maxRedirects?: number
    blacklist?: string[]
    headers?: Record<string, string>
    encoding?: string
    onlyGetOpenGraphInfo?: boolean
  }

  export interface IOGImage {
    url: string
    width: string | null
    height: string | null
    type: string | null
  }

  export interface IScrapeResult {
    data: {
      ogTitle?: string
      ogType?: string
      ogUrl?: string
      ogDescription?: string
      ogImage: IOGImage | IOGImage[]
    }
    success: boolean
    requestUrl: string
  }

  export interface IScrapeError {
    error: string
    requestUrl: string
    errorDetails: Error | string
    response: any
  }

  export = scrape
}
