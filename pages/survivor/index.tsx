import dynamic from "next/dynamic";

/** This lets us disable SSR and use components */
export default dynamic(() => import('./survivor'), { ssr: false });
