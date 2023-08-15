import { Router } from 'vue-router';
import nProgress from 'nprogress';

export function setupRouterGuard(router: Router) {
  createPageGuard(router);
  createProgressGuard(router);
}

/**
 * Hooks for handling page state
 */
function createPageGuard(router: Router) {
  const loadedPageMap = new Map<string, boolean>();

  router.beforeEach(async (to) => {
    // The page has already been loaded, it will be faster to open it again, you don’t need to do loading and other processing
    to.meta.loaded = !!loadedPageMap.get(to.path);
    return true;
  });

  router.afterEach((to) => {
    loadedPageMap.set(to.path, true);
  });
}

export function createProgressGuard(router: Router) {
  router.beforeEach(async (to) => {
    if (to.meta.loaded) {
      return true;
    }
    nProgress.start();
    return true;
  });

  router.afterEach(async () => {
    setTimeout(() => {
      nProgress.done();
    }, 500);
    return true;
  });
}
