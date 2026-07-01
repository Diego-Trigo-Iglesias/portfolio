<template>
  <div class="footer-credits">
    <p>&copy; {{ new Date().getFullYear() }} Diego Trigo Iglesias</p>
  </div>
</template>

<style scoped lang="scss">
.footer-credits {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  width: 100%;
  font-size: var(--font-size-sm);
  text-align: center;

  &-built {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--space-xxs);
  }
}

.footer-link {
  font-weight: 700;
}
</style>
