import createCache from "@emotion/cache";

export default function createEmotionCacheHelper() {
  return createCache({ key: "css" });
}
