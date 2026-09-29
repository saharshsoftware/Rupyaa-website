/** Starter-tier offer amount that unlocks the verified offer status UI (native parity). */
export const STARTER_TIER_OFFER_AMOUNT = 1200;

/**
 * Whether the current offer should show the starter-tier verified offer UI.
 * Temporarily forced to `false` until the new web UI is ready.
 */
export function isStarterTierVerifiedOffer(
  _offerAmount: number | null | undefined
): boolean {
  // Disabled until new starter-tier UI is ready.
  // return offerAmount === STARTER_TIER_OFFER_AMOUNT;
  return false;
}
