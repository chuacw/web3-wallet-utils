/**
 * Interface for provider information following EIP-6963.
 */
interface EIP6963ProviderInfo {

  /**
   * Unique identifier for the wallet e.g io.metamask, io.metamask.flask 
   */
  walletId: string;

  /**
   * Globally unique ID to differentiate between provider sessions for the lifetime of the page
   */
  uuid: string;

  /**
   * Human-readable name of the wallet
   */
  name: string;

  /**
   * URL to the wallet's icon
   */
  icon: string;
}

type EIP1193ProviderRequest = { method: string, params?: Array<unknown> };
type EIP1193ProviderCallback = (error: Error | null, response: unknown) => void;

/**
 * Interface for Ethereum providers based on the EIP-1193 standard.
 */
interface EIP1193Provider {

  /**
   * Optional: Indicates the status of the provider
   */
  isStatus?: boolean;

  /**
   * Optional: Host URL of the Ethereum node
   */
  host?: string;

  /**
   * Optional: Path to a specific endpoint or service on the host
   */
  path?: string;

  /**
   * For sending asynchronous requests
   * @param request 
   * @param callback 
   * @returns 
   */
  sendAsync?: (request: EIP1193ProviderRequest, callback: EIP1193ProviderCallback) => void;

  /**
   * For sending synchronous requests
   * @param request 
   * @param callback 
   * @returns 
   */
  send?: (request: EIP1193ProviderRequest, callback: EIP1193ProviderCallback) => void;

  /**
   * Standard method for sending requests per EIP-1193
   * @param request 
   * @returns 
   */
  request: (request: EIP1193ProviderRequest) => Promise<unknown>;
}

/**
 * Interface detailing the structure of provider information and its Ethereum provider.
 */
interface EIP6963ProviderDetail {

  /**
   * The provider's info
   */
  info: EIP6963ProviderInfo;

  /**
   * The EIP-1193 compatible provider
   */
  provider: EIP1193Provider;
}

/**
 * Type representing the event structure for announcing a provider based on EIP-6963.
 */
interface EIP6963AnnounceProviderEvent extends Event {
  detail: EIP6963ProviderDetail
}

export {
  type EIP6963ProviderInfo,
  type EIP1193Provider,
  type EIP6963ProviderDetail,
  type EIP6963AnnounceProviderEvent
}