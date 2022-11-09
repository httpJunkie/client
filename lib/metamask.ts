import MetaMaskSDK from '@metamask/sdk'

export const giveBackInstance = () => {
  if(typeof window === "undefined") {
    return null;
  }
  else {
    return new MetaMaskSDK({
      useDeeplink: false,
      // communicationLayerPreference: 'socket',
    })
  }
}

// first attempts to prerender SSG (Static Site Generation)
// for something mroe dynamic we want SSR (Server Side Rendering)
//    processes and return the HTML

// Any activity that depends on window is unavailable.


// 1. delay interactivity until client is loaded
// 2. you fetch what you want and the rest will hydrate client side.