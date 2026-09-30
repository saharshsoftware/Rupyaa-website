/** Fall back to the local 404 only when the mirror confirms the page is missing. */
export async function isMissingMirrorPage(destination: URL): Promise<boolean> {
  try {
    const response = await fetch(destination, {
      method: "HEAD",
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
    });
    return response.status === 404;
  } catch {
    // Preserve the existing rewrite on timeouts or network failures.
    return false;
  }
}
